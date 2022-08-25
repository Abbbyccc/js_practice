
const month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

function firstDayWeek(week, year) {
    if (week === 1) {return "01-01-"+year}
    let date = new Date((week-1)*7*24*60*60*1000)
    date.setFullYear(year)
    date.getDay() >= 1 ?  date.setSeconds(-((date.getDay()-1)*(60*60*24))) : date.setSeconds(-(6*(60*60*24)))
    return `${date.toDateString().match(/\d\d/).flat()}-${month[date.getMonth()]}-${year}`
}
