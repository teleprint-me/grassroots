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
        reject("Oops! Something went wrong!");
    };
}

function request(setting) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(setting.method, setting.url);
        xhr.responseType = setting.responseType;
        xhr.setRequestHeader("content-type", setting.contentType);
        xhr.onload = onload(xhr, resolve, reject);
        xhr.onerror = onerror(reject);
        xhr.send(JSON.stringify(setting.data));
    });
}

class Request {
    constructor() {
        this.shadow = request;
        this.setting = null;
    }

    text(setting) {
        this.setting = setting;
        this.setting.method = "GET";
        this.setting.responseType = "text";
        this.setting.contentType =
            "text/html,text/css,application/xhtml+xml,application/xml";
        return this.shadow(this.setting);
    }

    image(setting) {
        this.setting = setting;
        this.setting.responseType = "image";
        this.setting.contentType =
            "image/jpeg,image/png,image/gif,image/webp,image/svg+xml";
        return this.shadow(this.setting);
    }

    json(setting) {
        this.setting = setting;
        this.setting.responseType = "json";
        this.setting.contentType = "application/json";
        return this.shadow(this.setting);
    }

    custom(setting) {
        this.setting = setting;
        return this.shadow(this.setting);
    }
}

export { request, Request };
