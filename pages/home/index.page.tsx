import React, { useEffect, useState } from 'react';
import LoadingMain from '../../components/Loading/LoadingMain';
import imgLoading from '/images/spinner.gif';

export { Page };

export interface BeforeInstallPromptEvent extends Event {
    readonly platforms: Array<string>;
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed';
        platform: string;
    }>;
    prompt(): Promise<void>;
}

function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [Component, setComponent] = useState<any>(() => LoadingMain);

    const handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
        event.preventDefault();

        setDeferredPrompt(event);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        setComponent(() => React.lazy(() => import('./HomeMain.js')));

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        if (!isLoading) {
            window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt as any); // (지원 o) chrome 44, edge 79, opera, 삼성브라우저, android webview / (지원 x) 사파리, ios 사파리, firefox
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt as any);
        };
    }, [isLoading]);

    return (
        <React.Suspense fallback={<LoadingMain />}>
            {isLoading ? (
                <div
                    style={{
                        width: '50px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        opacity: '0.33',
                    }}
                >
                    <img src={imgLoading} alt="로딩" style={{ width: '100%' }} id="__LOADING__" />
                </div>
            ) : null}
            <Component deferredPrompt={deferredPrompt} setDeferredPrompt={setDeferredPrompt} />
        </React.Suspense>
    );
}
