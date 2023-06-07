import CATEGORIES, { CategoryInfo } from './CATEGORY';

export default function getAppCategory(name: string | null): string {
    if (name === '' || name === null) return '기타';

    for (const CATEGORY in CATEGORIES) {
        const categoryInfo: CategoryInfo = CATEGORIES[CATEGORY];

        if (categoryInfo.list.includes(name)) {
            return CATEGORY;
        }
    }

    return '기타';
}
