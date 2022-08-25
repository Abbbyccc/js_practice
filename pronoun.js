const pronouns = ['i', 'you', 'he', 'she', 'it', 'we', 'they']

const pronoun = str => {
    let result = {}
    let arr = str.toLowerCase().replace(/\n/g, ' ').replace(/,/g, ' ').split(' ').filter(elem => elem != '')

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        const next = arr[i + 1]
        if (pronouns.includes(curr)) {

            if (result[curr] === undefined) {
                result[curr] = { word: [], count: 0 }
            }

            if (!pronouns.includes(next) && next != undefined) {
                result[curr].word.push(next)
            }
            result[curr].count++
        }
    }
    return result
}
