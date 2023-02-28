import type { scrappedData } from '../scrapper';
import fetch from 'node-fetch';

export async function saveScrapped(item: scrappedData) {
    try {
        const res = await fetch(`http://localhost:3000/api/scrappers/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });

        const data: any = await res.json();

        if (data.saveSuccess) {
            console.log('저장완료--');
        } else {
            console.log('❌❌❌', data.errorMessage);
        }
    } catch (err) {
        console.error(err);
    }
}
