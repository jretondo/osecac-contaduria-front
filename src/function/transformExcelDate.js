export const fromExcelDateToDate = (originalDate) => {
    if (isNaN(originalDate)) {
        let excelDate
        try {
            excelDate = new Date(originalDate.replace(" ", ""))
            if (excelDate.toString() === "Invalid Date") {
                const year = ((originalDate.replace(" ", ""))).slice(6, 10)
                const month = ((originalDate.replace(" ", ""))).slice(3, 5)
                const day = ((originalDate.replace(" ", ""))).slice(0, 2)
                excelDate = new Date(year, (month - 1), day)
                if (excelDate === "Invalid Date") {
                    return false
                } else {
                    return excelDate
                }
            }
        } catch (error) {
            return false
        }
    } else {
        var utc_days = Math.floor(originalDate - 25569);
        var utc_value = utc_days * 86400;
        var date_info = new Date(utc_value * 1000);

        var fractional_day = originalDate - Math.floor(originalDate) + 0.0000001;

        var total_seconds = Math.floor(86400 * fractional_day);

        var seconds = total_seconds % 60;

        total_seconds -= seconds;

        var hours = Math.floor(total_seconds / (60 * 60));
        var minutes = Math.floor(total_seconds / 60) % 60;

        return new Date(date_info.getFullYear(), date_info.getMonth() + 1, date_info.getDate(), hours, minutes, seconds);
    }
}