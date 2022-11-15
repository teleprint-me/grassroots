async function handleLocation(selector = "#application") {
    const path = window.location.pathname;
    const route = routes[path] || routes["error"];
    const html = await fetch(route).then((data) => data.text());
    document.querySelector(selector).innerHTML = html;
};

function route(event) {
    event = event || window.event;
    let link = event.target.parentElement;
    event.preventDefault();
    window.history.pushState({}, "", link.href);
    handleLocation();
};

function initializeRouter() {
    window.onpopstate = handleLocation;
    window.route = route;
    handleLocation();
};

export { route, initializeRouter };
