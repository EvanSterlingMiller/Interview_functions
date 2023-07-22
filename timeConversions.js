// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

function timeConversion(s) {
    const [time, period] = s.split(' ');
    const [hour, minute, second] = time.split(':').map(Number);

    let convertedHour = hour;
    if (period === 'PM' && hour !== 12) {
    convertedHour += 12;
    } else if (period === 'AM' && hour === 12) {
        convertedHour = 0;
    }

    const formattedHour = String(convertedHour).padStart(2, '0');
    const formattedMinute = String(minute).padStart(2, '0');
    const formattedSecond = String(second).padStart(2, '0');

    return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
}

//working code
function timeConversion(s) {
    const timeCode = s.slice(-2);
    let [hour, minute, second] = s.slice(0, -2).split(":");

    if (timeCode === "PM" && hour !== "12") {
        hour = String(Number(hour) + 12);
    } else if (timeCode === "AM" && hour === "12") {
        hour = "00";
    }

    return `${hour}:${minute}:${second}`; 
}