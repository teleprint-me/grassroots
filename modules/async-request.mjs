export class AsyncRequest {
    async text(url) {
        return await fetch(url).then((response) => response.text());
    }

    async json(url) {
        return await fetch(url).then((response) => response.json());
    }

    async blob(url) {
        return await fetch(url).then((response) => response.blob());
    }

    async template(url) {
        const html = await this.text(url);
        const parser = new DOMParser();
        const template = document.createElement('template');
        const document = parser.parseFromString(html, 'text/html');
        template.appendChild(document);
        return template;
    }
}
