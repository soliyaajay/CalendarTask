export const validateEmail = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    return false;
  }
  else {
    return true;
  }
}

export const tConvert = time => {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ]
  if (time.length > 1) {
    // If time format correct
    time = time.slice(1) // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM' // Set AM/PM
    time[0] = +time[0] % 12 || 12 // Adjust hours
  }
  return time.join('') // return adjusted time or original string
}

export const tConvertHM = time => {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ]
  if (time.length > 1) {
    // If time format correct
    time = time.slice(1) // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM' // Set AM/PM
    time[0] = +time[0] % 12 || 12 // Adjust hours
  }
  return time.join('') // return adjusted time or original string
}

export const secondsToHms = d => {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  return `${h}:${m}`;
}

export const timeConvert = time_str => {
  // Convert a string like 10:05:23 PM to 24h format, returns like [22,5,23]
  var time = time_str.match(/(\d+):(\d+) (\w)/);
  var hours = Number(time[1]);
  var minutes = Number(time[2]);
  var meridian = time[3].toLowerCase();

  if (meridian == 'p' && hours < 12) {
    hours += 12;
  }
  else if (meridian == 'a' && hours == 12) {
    hours -= 12;
  }

  let result = (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes);

  return result;
};

export default null
