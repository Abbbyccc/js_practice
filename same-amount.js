function sameAmount(str, regx1, regx2) {
    const regx11 = new RegExp(regx1, 'g');
    const regx22 = new RegExp(regx2, 'g');

    if (str.match(regx11) == null && str.match(regx22) == null) {
        return false

    } else if ((str.match(regx11) || []).length == (str.match(regx22) || []).length) {
        return true

    } else {
        return false
    }
}