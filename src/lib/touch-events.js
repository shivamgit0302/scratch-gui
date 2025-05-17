export const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
};

export const getTouchEvent = (event) => {
    return event.touches ? event.touches[0] : event;
};