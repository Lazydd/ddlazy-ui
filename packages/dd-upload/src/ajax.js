export default function upload(detail, callback, error) {
    let { action, headers, param } = detail
    const xhr = new XMLHttpRequest();
    xhr.open("post", action, true);
    for (let item in headers) {
        if (headers.hasOwnProperty(item) && headers[item] !== null) {
            xhr.setRequestHeader(item, headers[item]);
        }
    }
    xhr.send(param);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                callback(JSON.parse(xhr.responseText))
            } else {
                error(xhr)
            }
        }
    }
}
