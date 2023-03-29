import { isDate } from "moment"

export const RawDateToDate = (rawDate) => {
    if (isDate(rawDate)) {
        return rawDate
    } else {
        let day = ""
        let month = ""
        let year = ""
        let slash = ""
        for (let i = 0; i < rawDate.length; i++) {
            const element = rawDate[i];
            if (element === "/") {
                slash = slash + element
            } else {
                if (slash === "") {
                    day = day + element
                } else if (slash === "/") {
                    month = month + element
                } else {
                    year = year + element
                }
            }
        }

        day = parseInt(day)
        month = parseInt(month)
        year = parseInt(year)

        year.toString().length === 2 && (year = year + 2000)


        return new Date(year, month - 1, day)
    }
}