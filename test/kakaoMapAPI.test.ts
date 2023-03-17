import { codeToName } from '../pages/search/kakaoMapAPI';

test('주소코드 변환', () => {
    expect(codeToName('서울특별시 3000000 능동 135')).toBe('서울특별시 종로구 능동 135');
});
