function strMonth( month:number ){
    let monthString;
    if ( month === 1 ) {
        monthString = "January";
    } else if ( month === 2 ) {
        monthString = "February";
    } else if ( month === 3 ) {
        monthString = "March";
    } else if ( month === 4 ) {
        monthString = "April";
    } else if ( month === 5 ) {
        monthString = "May";
    } else if ( month === 6 ) {
        monthString = "June";
    } else if ( month === 7 ) {
        monthString = "July";
    } else if ( month === 8 ) {
        monthString = "August";
    } else if ( month === 9 ) {
        monthString = "September";
    } else if ( month === 10 ) {
        monthString = "October";
    } else if ( month === 11 ) {
        monthString = "November";
    } else if ( month === 12 ) {
        monthString = "December";
    }
    return monthString;
}
function strDay( days:number ){
    let dayString;
    if ( days === 0 ) {
        dayString = "Sunday";
    } else if ( days === 1 ) {
        dayString = "Monday";
    } else if ( days === 2 ) {
        dayString = "Tuesday";
    } else if ( days === 3 ) {
        dayString = "Wednesday";
    } else if ( days === 4 ) {
        dayString = "Thursday";
    } else if ( days === 5 ) {
        dayString = "Friday";
    } else if ( days === 6 ) {
        dayString = "Saturday";
    }
    return dayString;
}
export {strMonth,strDay}
