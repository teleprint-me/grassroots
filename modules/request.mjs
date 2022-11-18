function defaultSetting() {
    return {
        method: 'GET',
        responseType: 'text',
        contentType: 'text/html',
        data: undefined
    };
}

function onload(xhr, resolve, reject) {
    return function () {
        if (xhr.status >= 400) {
            reject(xhr.response);
        } else {
            resolve(xhr.response);
        }
    };
}

function onerror(reject) {
    return function () {
        reject('Oops! Something went wrong!');
    };
}

class Request {
    http(url, setting = null) {
        setting = null != setting ? setting : defaultSetting();
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open(setting.method, url);
            xhr.responseType = setting.responseType;
            xhr.setRequestHeader('content-type', setting.contentType);
            xhr.onload = onload(xhr, resolve, reject);
            xhr.onerror = onerror(reject);
            xhr.send(JSON.stringify(setting.data));
        });
    }

    async text(url) {
        return await fetch(url).then((response) => response.text());
    }

    async json(url) {
        return await fetch(url).then((response) => response.json());
    }

    async template(url) {
        let template = document.createElement('template');
        template.innerHTML = await this.text(url);
        return template;
    }
}

export let request = new Request();
