export const weekDays = [
    'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'
]

export function formatNumberForTime (number) {
    return number < 10 ? ('0' + number) : number;
}

export function convertISOToFields (ISODate) {
    const dateObject = new Date(ISODate);
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();

    return {
        day: weekDays[dateObject.getDay()],
        timeSlot: formatNumberForTime(hours) + ':' + formatNumberForTime(minutes)
        // year: dateObject.getFullYear(),
        // month: dateObject.getMonth() + 1,
        // date: dateObject.getDate(),
    }
}

export function generateTimeSlotFromFields (startTimeSlot, endTimeSlot) {
    return `${startTimeSlot} - ${endTimeSlot}`
}