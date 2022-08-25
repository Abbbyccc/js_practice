function dayOfTheYear(date) {
    const firstDay = new Date(date)
    firstDay.setDate(1)
    firstDay.setMonth(0)
    return 1 + (date.getTime() - firstDay.getTime()) / (24 * 60 * 60 * 1000)
}