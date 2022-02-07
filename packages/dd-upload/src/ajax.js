export default function upload(detail) {
    const xhr = new XMLHttpRequest();
    xhr.open("post", detail.action);
    xhr.send();
    return xhr.response;
}
