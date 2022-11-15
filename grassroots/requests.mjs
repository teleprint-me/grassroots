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

export function request(setting) {
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
