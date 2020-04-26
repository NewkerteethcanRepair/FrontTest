function parse(str) {
    const obj = {};
    const ary = str.split("&");
    for (let item of ary) {
        const [key, value] = item.split('=');
        obj[key] = value;
    }
    return obj;
}