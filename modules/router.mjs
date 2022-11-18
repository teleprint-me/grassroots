import { request } from './request.mjs';

export function router(selector, routes) {
    async function onpopstate(event) {
        const path = window.location.pathname;
        const url = routes[path] || routes['error'];
        document.querySelector(selector).innerHTML = await request.text(url);
    }

    function route(event) {
        event = event || window.event;
        let link = event.target.parentElement;
        event.preventDefault();
        window.history.pushState({}, '', link.href);
        onpopstate();
    }

    window.onpopstate = onpopstate;
    window.route = route;
    onpopstate();
}
