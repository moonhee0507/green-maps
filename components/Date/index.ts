export function isSameDay(date: string): boolean {
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
