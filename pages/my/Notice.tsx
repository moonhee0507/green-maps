import React from 'react';

export { Notice };

function Notice({ host }: { host: string }) {
    return (
        <div className="container-notice profile">
            <em>
                <span>
                    {(() => {
                        switch (host) {
                            case 'local':
                                return '자체 계정';
                            case 'kakao':
                                return '다음카카오 계정';
                            case 'naver':
                                return '네이버 계정';
                            default:
                                return '자체 계정';
                        }
                    })()}{' '}
                    회원 입니다.
                </span>
            </em>
        </div>
    );
}
