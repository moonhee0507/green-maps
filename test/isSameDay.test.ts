function isSameDay(date: string): boolean {
    const arrDate = date.split('. ');

    const today = new Intl.DateTimeFormat('ko-KR', {
        dateStyle: 'medium',
        timeStyle: 'short',
        hour12: false,
    }).format(Date.now());

    const arrToday = today.split('. ');

    for (let i = 0; i <= 2; i++) {
        if (arrToday[i] !== arrDate[i]) return false;
    }

    return true;
}

describe('isSameDay', () => {
    // describe() 함수는 isSameDay()에 대한 테스트 사례를 단일 suite로 그룹화하고, it() 함수는 개별 테스트 사례를 정의한다.
    const mockDate = '2023. 05. 07. 01:46';

    // beforeEach() 및 afterEach() 함수는
    // Intl의 모의 구현을 설정하고 해체하는 데 사용된다.
    beforeEach(() => {
        jest.spyOn(Intl, 'DateTimeFormat').mockReturnValueOnce({
            format: () => mockDate,
        } as any);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should return true for the same day', () => {
        expect(isSameDay(mockDate)).toBe(true);
    });

    it('should return false for a different day', () => {
        expect(isSameDay('2023. 05. 08.')).toBe(false);
    });

    it('should return false for an invalid date string', () => {
        expect(isSameDay('invalid date')).toBe(false);
    });
});
