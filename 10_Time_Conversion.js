function timeConversion(s) {
    var slicedHour = s.slice(0, 2); 
    slicedHour = parseInt(slicedHour)
    var ampm = s.slice(8);

    if (ampm === "AM" && slicedHour == 12) {
        slicedHour = 0 
    } else if (ampm === "PM" && slicedHour !== 12) { 
      slicedHour = slicedHour + 12 
    }

    if (slicedHour < 10) {
        slicedHour = "0" + slicedHour 
    }

    var slicedMinutes = s.slice(3, 5); 
    var slicedSeconds = s.slice(6, 8); 
    var slicedTime = slicedHour + ":" + slicedMinutes + ":" + slicedSeconds;

    return slicedTime 
}

var s = '12:05:45PM'
console.log(timeConversion(s));

function timeConversionShort(s) {
    var slicedHour = parseInt(s.slice(0, 2))

    if (s.slice(8) === "AM" && slicedHour == 12){ 
        slicedHour = 0 
    } else if (s.slice(8) === "PM" && slicedHour !== 12) { 
        slicedHour = slicedHour + 12 
    }

    if (slicedHour < 10) {
        slicedHour = "0" + slicedHour 
    }

    var slicedTime = slicedHour + ":" + s.slice(3, 5) + ":" + s.slice(6, 8);
    
    return slicedTime 
}

var s = '12:05:45PM'
console.log(timeConversionShort(s));