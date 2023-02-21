import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
    // const browser = await puppeteer.launch({ headless: false, slowMo: 300, devtools: true, timeout: 600000 });
    const browser = await puppeteer.launch({ slowMo: 300 });
    const [page] = await browser.pages();

    await page.setViewport({ width: 1280, height: 1024 });

    await page.goto(`https://map.kakao.com/?q=채식`);

    const totalDom = await page.$('#info\\.search\\.place\\.cnt');
    let totalNumForResult = await page.evaluate((em: any) => Number(em.innerHTML.replaceAll(',', '')), totalDom);

    let dataInAllPage = new Array();

    for (let currentPage = 1; currentPage <= Math.trunc(totalNumForResult / 15) + 1; currentPage++) {
        const pageContent = await page.$$eval('.link_name', (elements) => {
            let dataInPage = new Array();

            for (let element of elements) {
                dataInPage.push({
                    title: element.innerHTML.replace(/[<strong>|</strong>]/g, ''),
                    category: element.parentElement?.nextElementSibling?.innerHTML,
                    rating: element.parentElement?.parentElement?.nextElementSibling?.firstElementChild
                        ?.firstElementChild?.nextElementSibling?.innerHTML,
                    address:
                        element.parentElement?.parentElement?.nextElementSibling?.nextElementSibling?.firstElementChild
                            ?.nextElementSibling?.firstElementChild?.innerHTML,
                });
            }

            return dataInPage;
        });

        dataInAllPage.push(...pageContent);

        const activeButton = (await page.$('#info\\.search\\.page > .pageWrap > .ACTIVE')) as any;
        const activeNumber = await page.evaluate((a: any) => a.innerHTML, activeButton);

        if (currentPage === 1) {
            const moreButton = (await page.$('#info\\.search\\.place\\.more')) as any;

            if (moreButton) {
                await moreButton.evaluate((b: any) => b.click());
            } else break;
        } else if (currentPage % 5 === 0) {
            const nextButton = (await page.$('#info\\.search\\.page\\.next')) as any;

            if (Number(activeNumber) === currentPage) {
                await nextButton.evaluate((b: any) => b.click());
            } else break;
        } else {
            if (Number(activeNumber) === currentPage) {
                const pageNation = (await page.$('#info\\.search\\.page\\.no' + `${(currentPage % 5) + 1}`)) as any;
                await pageNation.evaluate((b: any) => b.click());
            } else break;
        }
    }

    fs.writeFileSync('./kakaoMapCrawling.json', JSON.stringify(dataInAllPage));

    // new Promise(() => setTimeout((r) => r, 10 * 60 * 1000));

    await browser.close();
})();
