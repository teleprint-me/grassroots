export function debounce(func, timing = 100) {
    let timer;
    return function () {
        let context = this, args = arguments;
        let delay = function () {
            timer = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timer = setTimeout(delay, timing);
    };
}
