// limit func execution to no more than once every timing
export function throttle(func, timing = 100) {
    let inThrottle;
    return function () {
        let context = this, args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, timing);
        }
    };
}
