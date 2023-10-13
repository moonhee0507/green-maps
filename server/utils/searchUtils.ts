type Params = {
    columnName: string;
    regex: RegExp;
    trueVal: number;
    falseVal: number;
}

export function createCalcAccuracyQuery({ columnName, regex, trueVal, falseVal }: Params) {
    // columnName을 split한 배열을 돌면서 in 내부의 표현식을 처리
    return {
        $map: {
            input: {
                $split: [columnName, ' '],
            },
            as: 'word', // 요소
            in: {
                $cond: [
                    // 부울 표현식 평가
                    {
                        $regexMatch: {
                            input: '$$word',
                            regex: regex,
                        },
                    },
                    trueVal,
                    falseVal,
                ],
            },
        },
    }
}