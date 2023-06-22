import React, { useEffect, useState } from 'react';
import LoadingMain from '../../components/Loading/LoadingMain';
import imgLoading from '/images/spinner.gif';

export { Page };

export const documentProps = {
    title: '홈 | Green Maps',
    description: '채식 식당 지도 서비스',
};

const HomeMain = React.lazy(() => import('./HomeMain'));

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

    const handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
        event.preventDefault();

        setDeferredPrompt(event);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        console.log('LCP 폴리필 테스트', test());
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    function test() {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
            console.log('LCP:', lastEntry.startTime);
            console.log(lastEntry);
        });
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
    }

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
            <HomeMain deferredPrompt={deferredPrompt} setDeferredPrompt={setDeferredPrompt} />
        </React.Suspense>
    );
}
