export function isValidDateFormat(dateString: string): boolean {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return dateRegex.test(dateString);
}

export function isFutureDate(dateString: string): boolean {
    if (!isValidDateFormat(dateString)) {
        return false;
    }

    const [day, month, year] = dateString.split("/").map(Number);

    const date = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date.getTime() >= today.getTime();
}

export function isOneYearLater(date1: string, date2: string): boolean {
    if (!isValidDateFormat(date1) || !isValidDateFormat(date2)) {
        return false;
    }

    const [day1, month1, year1] = date1.split("/").map(Number);
    const [day2, month2, year2] = date2.split("/").map(Number);

    const d1 = new Date(year1, month1 - 1, day1);
    const d2 = new Date(year2, month2 - 1, day2);

    return (
        d1.getFullYear() === d2.getFullYear() + 1 &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
    );
}

export function convertDate(dateString: string): string {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
}