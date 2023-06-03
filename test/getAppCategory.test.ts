import getAppCategory from '../components/image/getAppCategory';

describe('getAppCategory', () => {
    it('업종에 맞는 카테고리가 분류된다 1', () => {
        const name = '일식';
        const expectedCategory = 'JAPANESE';
        expect(getAppCategory(name)).toEqual(expectedCategory);
    });
    it('업종에 맞는 카테고리가 분류된다 2', () => {
        const name = '분식';
        const expectedCategory = 'KOREAN';
        expect(getAppCategory(name)).toEqual(expectedCategory);
    });
    it('업종에 맞는 카테고리가 분류된다 3', () => {
        const name = '닭강정';
        const expectedCategory = 'CHICKEN';
        expect(getAppCategory(name)).toEqual(expectedCategory);
    });

    it('DB에 없는 업종은 OTHER을 반환한다', () => {
        const name = '파스타';
        const expectedCategory = 'OTHER';
        expect(getAppCategory(name)).toEqual(expectedCategory);
    });

    it('빈 문자열은 OTHER을 반환한다', () => {
        const name = '';
        const expectedCategory = 'OTHER';
        expect(getAppCategory(name)).toEqual(expectedCategory);
    });

    it('null은 OTHER을 반환한다', () => {
        const name = null;
        const expectedCategory = 'OTHER';
        expect(getAppCategory(name)).toEqual(expectedCategory);
    });
});
