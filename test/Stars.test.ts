test('별 평점', () => {
    expect(
        (() => {
            const maxRating = 5.0;
            const rating = 2.3;
            const maxInt = Math.floor(rating);
            const rest = Number((rating - maxInt).toFixed(1));

            return new Array(maxRating).fill(0).map((_, i) => {
                if (i <= maxInt - 1) return 100;
                else if (i === maxInt) return rest * 100;
                else return 0;
            });
        })()
    ).toStrictEqual([100, 100, 30, 0, 0]);
});
