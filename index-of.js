

const indexOf = function (collection, item, index = 0) {

    for (let i = index; i < collection.length; i++) {
        if (collection[i] === item) {
            return i;
        }
    }
    return -1
}

const lastIndexOf = function (collection, item, index = collection.length) {
    for (let i = index; i >= 0; i--) {
        if (collection[i] === item) {
            return i;
        }
    }
    return -1
}

const includes = function (collection, arg) {
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] === arg) {
            return true;
        }
    }
    return false
}