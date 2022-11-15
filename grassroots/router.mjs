let routes = {
    error: "/views/error.html",
    "/": "/views/profile.html",
    "/portfolio": "/views/portfolio.html",
    "/contact": "/views/contact.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes["error"];
    const html = await fetch(route).then((data) => data.text());
    document.querySelector("#application").innerHTML = html;
};

const route = (event) => {
    event = event || window.event;
    let link = event.target.parentElement;
    event.preventDefault();
    window.history.pushState({status: true}, "", link.href);
    handleLocation();
};

const initializeRouter = () => {
    window.onpopstate = handleLocation;
    window.route = route;
    handleLocation();
};

export { initializeRouter, route };
