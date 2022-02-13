export default function upload(detail) {
    const xhr = new XMLHttpRequest();
    xhr.open("post", detail.action, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(detail.param);
    return xhr.response;
}
