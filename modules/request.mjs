const defaultSetting = function () {
    return {
        method: 'GET',
        responseType: 'text',
        contentType: 'text/html',
        data: undefined
    };
};

const onload = function (xhr, resolve, reject) {
    return function () {
        if (xhr.status >= 400) {
            reject(xhr.response);
        } else {
            resolve(xhr.response);
        }
    };
};

const onerror = function (reject) {
    return function () {
        reject('Oops! Something went wrong!');
    };
};

export const request = function (url, setting = null) {
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
};
