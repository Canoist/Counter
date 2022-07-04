export function countAsync(initial: number) {
    let i = initial;
    setTimeout(function timeOut() {
        setTimeout(timeOut, 1000);
        i++;
        return i;
    }, 1000);
}
