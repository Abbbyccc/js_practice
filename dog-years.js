
const dogYears = (planet, secs) => {
    if (planet === 'earth') {
        return parseFloat((secs / 31557600/1 * 7).toFixed(2))
    } else if (planet === 'mercury') {
        return parseFloat((secs / 31557600 / 0.2408467 * 7).toFixed(2))
    } else if (planet === 'venus') {
        return parseFloat((secs / 31557600 / 0.61519726 * 7).toFixed(2))
    } else if (planet === 'mars') {
        return parseFloat((secs / 31557600 / 1.8808158 * 7).toFixed(2))
    } else if (planet === 'jupiter') {
        return parseFloat((secs / 31557600 / 11.862615 * 7).toFixed(2))
    } else if (planet === 'saturn') {
        return parseFloat((secs / 31557600 / 29.447498 * 7).toFixed(2))
    } else if (planet === 'uranus') {
        return parseFloat((secs / 31557600 / 84.016846 * 7).toFixed(2))
    } else if (planet === 'neptune') {
        return parseFloat((secs / 31557600 / 164.79132 * 7).toFixed(2))
    }
}
