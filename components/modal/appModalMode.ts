export default function appModalMode(option: boolean): void {
    const app = document.querySelector('.app');

    if (option) {
        app?.classList.add('modal-mode');
    } else {
        app?.classList.remove('modal-mode');
    }
}
