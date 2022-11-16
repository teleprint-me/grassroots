// limit func to a single execution given the specified timing
export function debounce(func, timing = 100) {
    let timer;
    return function () {
        let context = this, args = arguments;
        let delay = function () {
            timer = null;
            func.apply(context, args);
        };
        clearTimeout(timer);
        timer = setTimeout(delay, timing);
    };
}
