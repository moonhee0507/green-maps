import React from 'react';

type Props = { handler: ({ on }: { on: boolean }) => void; className?: string };

export const UncheckAllButton = ({ handler, className }: Props) => {
    return (
        <button type="button" onClick={() => handler({ on: false })} className={className}>
            전체 해제
        </button>
    );
};

export const CheckAllButton = ({ handler, className }: Props) => {
    return (
        <button type="button" onClick={() => handler({ on: true })} className={className}>
            전체 선택
        </button>
    );
};
