function filterShortStateName(arr) {
    return arr.filter(word => word.length < 7)
}

const filterStartVowel = (arr) => arr.filter(word => word[0].match(/[aeiouAEIOU]/g))


const filter5Vowels = (arr) => arr.filter(word => word.match(/[aeiouAEIOU]/g).length >= 5)

const filter1DistinctVowel = arr => arr.filter(word => {
    let arr2 = word.match(/[aeiouAEIOU]/g)
    return arr2.every(v => v.toLowerCase() === arr2[0].toLowerCase())
})

const multiFilter = arr => arr.filter(obj => (
    obj.capital.length > 7 &&
    filterStartVowel([obj.name]).length == 0 &&
    (/[aeiouAEIOU]/g).test(obj.tag) == true &&
    obj.region != 'South'
)
)