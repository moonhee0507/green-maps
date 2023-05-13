export function isSameDay(date: string): boolean {
    const arrDate = date.split('. '); // 받은 연월일
    arrDate.pop();

    const today = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    }).format(new Date());

    const arrToday = today.split('. '); // 오늘 연월일

    for (let i = 0; i <= 2; i++) {
        if (arrToday[i] !== arrDate[i]) return false;
    }

    return true;
}
