import sharp from 'sharp';
import fs from 'fs';

const regexExtension = /\.jpg|\.jpeg|\.png/g;

const filterForConvert = (file: string) => {
    const noConvert = [
        'icon.png',
        'icon-180.png',
        'icon-192.png',
        'icon-384.png',
        'icon-1024.png',
        'icon-2000.png',
        'icon-mask.png',
    ];

    return regexExtension.test(file) && !noConvert.includes(file);
};

const directoryPath = process.cwd() + '/public/images';

fs.readdir(directoryPath, async (err, files) => {
    if (err) {
        console.error('🤬 디렉토리 읽기 실패: ', err);
        return;
    }

    for (const file of files) {
        if (filterForConvert(file)) {
            const input = `public/images/${file}`;
            const output = `public/images/${file.replaceAll(regexExtension, '.webp')}`;

            sharp(input)
                .webp({ lossless: true })
                .toFile(output, async (err) => {
                    if (err) {
                        console.error('🤬 변환 실패: ', err);
                    } else {
                        fs.unlink(input, (err) => {
                            if (err) {
                                console.error('🤬 삭제 실패: ', err);
                            } else {
                                console.log('✅ 파일 삭제: ', input);
                            }
                        });
                    }
                });
        }
    }
});
