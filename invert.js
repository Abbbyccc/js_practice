const invert = (obj) => {
    let result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[obj[key]] = key;
        }
    }
    return result;
}


