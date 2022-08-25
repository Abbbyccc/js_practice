const longWords = (arr) => arr.every(word => word.length >= 5)
const oneLongWord = (arr) => arr.some(word => word.length >= 10)
const noLongWords = (arr) => arr.every((word => word.length < 7))