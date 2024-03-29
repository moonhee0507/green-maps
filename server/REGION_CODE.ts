interface Code {
    시도: string;
    시군구: {
        [key: string]: string;
    };
}

type RegionCode = {
    서울특별시: Code;
};

export const regionCode: RegionCode = {
    서울특별시: {
        시도: '6110000',
        시군구: {
            종로구: '3000000',
            중구: '3010000',
            용산구: '3020000',
            성동구: '3030000',
            광진구: '3040000',
            동대문구: '3050000',
            중랑구: '3060000',
            성북구: '3070000',
            강북구: '3080000',
            도봉구: '3090000',
            노원구: '3100000',
            은평구: '3110000',
            서대문구: '3120000',
            마포구: '3130000',
            양천구: '3140000',
            강서구: '3150000',
            구로구: '3160000',
            금천구: '3170000',
            영등포구: '3180000',
            동작구: '3190000',
            관악구: '3200000',
            서초구: '3210000',
            강남구: '3220000',
            송파구: '3230000',
            강동구: '3240000',
        },
    },
};
