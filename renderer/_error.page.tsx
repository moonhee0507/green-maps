import React from 'react';

export { Page };

function Page({ is404 }: { is404: boolean }) {
    if (is404) {
        return (
            <section className="section-404">
                <h2>
                    4️⃣0️⃣4️⃣<span>Page Not Found</span>
                </h2>
                <GoToHomeButton />
            </section>
        );
    } else {
        return (
            <section className="section-500">
                <h2>
                    5️⃣0️⃣0️⃣<span>Internal Server Error</span>
                </h2>
                <GoToHomeButton />
            </section>
        );
    }
}

function GoToHomeButton() {
    return (
        <a href="/" className="link-go-home">
            홈으로 이동
        </a>
    );
}
