import Hammer, { DIRECTION_HORIZONTAL } from 'hammerjs';
import { RefObject, useEffect, useRef } from 'react';

type PanCallback = HammerListener;

type UseSwipeHookProps = {
    elRef: RefObject<Element>;
    onDragStart: PanCallback;
    onDragMove: PanCallback;
};

// onDragStart와 onDragMove에 등록되어 있는 콜백함수가 실행될 때마다
// ref 객체에 콜백함수를 담아서 hammer 이벤트 실행 시 콜백 함수로 사용
export default function useSwipeHook({ elRef, onDragStart, onDragMove }: UseSwipeHookProps) {
    const dragStartRef = useRef<PanCallback | null>(null);
    dragStartRef.current = onDragStart;

    const dragMoveRef = useRef<PanCallback | null>(null);
    dragMoveRef.current = onDragMove;

    useEffect(() => {
        if (!elRef || !elRef.current) {
            console.error('useSwipe hook은 swipe 컨테이너를 참조해야 합니다.');

            return;
        }

        const container = elRef.current;
        const manager = new Hammer.Manager(container);
        const Drag = new Hammer.Pan({ threshold: 10, direction: DIRECTION_HORIZONTAL });

        manager.add(Drag);
        manager.on('panstart', (event: HammerInput) => dragStartRef.current && dragStartRef.current(event));
        manager.on('panmove', (event: HammerInput) => dragMoveRef.current && dragMoveRef.current(event));

        return () => {
            manager.off('panstart');
            manager.off('panmove');
        };
    }, [dragStartRef, dragMoveRef]);
}
