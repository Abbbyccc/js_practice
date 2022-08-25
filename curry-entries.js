const defaultCurry = (obj1) => (obj2) => {
    let result = {}
    Object.entries(obj1).forEach(([key, value]) => { result[key] = value });
    Object.entries(obj2).forEach(([key, value]) => { result[key] = value });
    return result
}

const mapCurry = (func) => (obj) => {

    return Object.fromEntries(Object.entries(obj).map(func))

}
const reduceCurry = func => (obj, n) => {
    return Object.entries(obj).reduce(func, n)
}

const filterCurry = (func) => (obj) => {
   return Object.fromEntries(Object.entries(obj).filter(func))

}

const forceUsers = filterCurry(([_, value]) => value.isForceUser)

const reduceScore = (obj, initial) =>
    reduceCurry((acc, [_, value]) => acc + value.shootingScore + value.pilotingScore)(forceUsers(obj), initial)

const filterForce = (obj) =>
    filterCurry(([_, value]) => value.shootingScore >= 80)(forceUsers(obj))

const mapAverage = (obj) => {
    let res = {}
    Object.entries(obj).map(([key, value]) => {
        res[key] = Object.assign(value)
        res[key].averageScore = (value.shootingScore + value.pilotingScore) / 2
    })
    return res
}