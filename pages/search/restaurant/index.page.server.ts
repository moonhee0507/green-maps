import fetch from 'node-fetch';
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';
import fs from 'fs';
import imgGen from 'js-image-generator';

export { onBeforeRender };
export { prerender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const { restaurantId } = pageContext.routeParams;
    try {
        const res = await fetch(`http://localhost:5000/api/restaurants/${restaurantId}`, {
            headers: {
                'Cache-Control': 'max-age=31536000',
            },
        });
        const restaurantInfo = await res.json();

        // dummy image
        for (var i = 1; i <= 3; i++) {
            imgGen.generateImage(800, 600, 80, function (err, image) {
                console.log('Generating image #' + i);
                fs.writeFileSync('dummy-' + i + '.jpg', image.data);
            });
        }

        const pageProps = { restaurantInfo };

        return {
            pageContext: {
                pageProps,
            },
        };
    } catch (err) {
        console.error(err);
    }
}

function prerender() {
    return [{ url: '/search/@restaurantId' }];
}
