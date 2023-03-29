export const transformToNumberFromCVS = (numberIn, fileName) => {
    let number = numberIn
    try {
        number = number.replace("$", "")
        number = number.replace(" ", "")
        number = number.replace(".", "")
        number = number.replace(",", ".")
        number = parseFloat(number)
    } catch (error) { }
    let excelExtension = ""
    let point = false
    for (let i = 0; i < fileName.length; i++) {
        if (point === true) {
            excelExtension = excelExtension + fileName[i]
        }
        if (fileName[i] === ".") {
            point = true
        }
    }
    if (excelExtension === "csv") {
        if (isNaN(number)) {
            number = 0
        }
    }
    return number
}