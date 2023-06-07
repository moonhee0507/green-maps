type Thumb = {
    src: string;
    copyRight: string;
};

type MatchList = string[];

export type CategoryInfo = {
    thumb: Thumb;
    list: MatchList;
};

interface CATEGORIES {
    [key: string]: CategoryInfo;
}

const CATEGORIES: CATEGORIES = {
    일식: {
        thumb: {
            src: '/images/category-japan.png',
            copyRight: 'ultimatearm - Flaticon',
        },
        list: ['일식', '퓨전일식', '초밥,롤'],
    },
    '멕시칸/브라질': {
        thumb: {
            src: 'images/category-south-america.png',
            copyRight: 'Eucalyp - Flaticon',
        },
        list: ['멕시칸,브라질'],
    },
    샐러드: {
        thumb: {
            src: 'images/category-salad.png',
            copyRight: 'Victoruler - Flaticon',
        },
        list: ['샐러드'],
    },
    한식: {
        thumb: {
            src: 'images/category-korea.png',
            copyRight: 'Darius Dan - Flaticon',
        },
        list: [
            '한식',
            '분식',
            '한정식',
            '퓨전한식',
            '칼국수',
            '떡,한과',
            '떡볶이',
            '쌈밥',
            '한식뷔페',
            '돈까스,우동',
            '두부전문점',
            '찌개,전골',
            '도시락',
            '채식뷔페',
            '뷔페',
            '샤브샤브',
            '구내식당',
            '국수',
            '퓨전요리',
        ],
    },
    '인도/중동': {
        thumb: {
            src: 'images/category-middle-east.png',
            copyRight: 'cah nggunung - Flaticon',
        },
        list: ['인도/중동', '인도음식', '터키음식'],
    },
    양식: {
        thumb: {
            src: 'images/category-west.png',
            copyRight: 'pojok d - Flaticon',
        },
        list: ['양식', '이탈리안', '피자', '토스트', '햄버거', '패밀리레스토랑', '패스트푸드'],
    },
    카페: {
        thumb: {
            src: 'images/category-cafe.png',
            copyRight: 'Freepik - Flaticon',
        },
        list: [
            '베이커리',
            '까페',
            '카페',
            '커피전문점',
            '제과,베이커리',
            '디저트카페',
            '샌드위치',
            '갤러리카페',
            '테마카페',
            '아이스크림',
            '도넛',
            '북카페',
            '전통찻집',
            '스튜디오카페',
            '고양이카페',
        ],
    },
    술집: {
        thumb: {
            src: 'images/category-drink.png',
            copyRight: 'Good Ware - Flaticon',
        },
        list: ['술집', '호프,요리주점', '와인바', '일본식주점', '칵테일바'],
    },
    중식: {
        thumb: {
            src: 'images/category-china.png',
            copyRight: 'GOWI - Flaticon',
        },
        list: ['중국식', '중국요리', '중식', '아시아음식', '퓨전중식'],
    },
    동남아: {
        thumb: {
            src: 'images/category-east-south-asia.png',
            copyRight: 'Eucalyp - Flaticon',
        },
        list: ['동남아', '태국음식', '동남아음식'],
    },
    치킨: {
        thumb: {
            src: 'images/category-chicken.png',
            copyRight: 'Soni Sokell - Flaticon',
        },
        list: ['닭강정'],
    },
    해산물: {
        thumb: {
            src: 'images/category-fish.png',
            copyRight: 'fjstudio - Flaticon',
        },
        list: ['해물,생선', '참치회'],
    },
    죽: {
        thumb: {
            src: 'images/category-porridge.png',
            copyRight: 'Freepik - Flaticon',
        },
        list: ['죽'],
    },
    기타: {
        thumb: {
            src: 'images/category-food.png',
            copyRight: '3ab2ou - Flaticon',
        },
        list: ['과일,채소가게', '식품판매', '생과일전문점', '교육,학문', '음식점', '식품가공,제조', '슈퍼마켓'],
    },
};

export default CATEGORIES;
