import { RefObject, useEffect, useRef } from 'react';
// import Hammer from 'hammerjs';
// import * as hammerJs from 'hammerjs';

// const { DIRECTION_HORIZONTAL } = ((hammerJs as any).default ?? hammerJs) as typeof hammerJs;

type PanCallback = HammerListener;

type UseSwipeHookProps = {
    elRef: RefObject<Element>;
    onDragMove: PanCallback;
};

// onDragMove에 등록되어 있는 콜백함수가 실행될 때마다
// ref 객체에 콜백함수를 담아서 hammer 이벤트 실행 시 콜백 함수로 사용
export default function useSwipeHook({ elRef, onDragMove }: UseSwipeHookProps) {
    const dragMoveRef = useRef<PanCallback | null>(null);
    dragMoveRef.current = onDragMove;

    useEffect(() => {
        let manager: HammerManager;
        import('hammerjs').then((module) => {
            const { DIRECTION_HORIZONTAL } = module;

            if (!elRef || !elRef.current) {
                console.error('useSwipe hook은 swipe 컨테이너를 참조해야 합니다.');

                return;
            }

            const container = elRef.current;
            manager = new Hammer.Manager(container);
            const Drag = new Hammer.Pan({ threshold: 10, direction: DIRECTION_HORIZONTAL });

            manager.add(Drag);
            manager.on('panmove', (event: HammerInput) => dragMoveRef.current && dragMoveRef.current(event));

            return () => {
                manager.off('panstart');
                manager.off('panmove');
            };
        });
    }, [dragMoveRef]);
}
