export default function formatDistance(distance: number): string {
    if (distance < 1000) {
        let arrDistance = distance.toLocaleString('ko-KR').split('');
        arrDistance.pop();
        return arrDistance.join('') + 'm';
    } else {
        // (distance / 1000).toFixed(2) + 'km'
        let arrDistance = (distance / 1000).toLocaleString('ko-KR').split('');
        arrDistance.pop();
        return arrDistance.join('') + 'km';
    }
}
