// expecting time to be a string in the format like '8:15' or '12:30'
const timeToString = {
  0: 'twelve',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eigthteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
  24: 'twenty four',
  25: 'twenty five',
  26: 'twenty six',
  27: 'twenty seven',
  28: 'twenty eight',
  29: 'twenty nine',
};

const minuteToString = {
  15: 'quarter past',
  30: 'half past',
  45: 'quarter to',
};

const addAnHour = (hour) => {
  hour += 1;
  if (hour === 24) {
    hour = 0;
  }

  return hour;
};

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday';
  }

  const segments = time.split(':');
  const hour = Number.parseInt(segments[0], 10) % 12;
  const minutes = Number.parseInt(segments[1], 10);

  //console.log(Number.parseInt(segments[0], 10), hour, minutes, minuteToString[minutes], timeToString[hour]);

  if (minutes === 0) {
    return `${timeToString[hour]} o'clock`;
  }

  if (minuteToString[minutes]) {
    let hr = hour;
    if (minutes === 45) {
      hr = addAnHour(hour);
    }

    return `${minuteToString[minutes]} ${timeToString[hr]}`;
  }

  if (minutes < 30) {
    return `${timeToString[minutes]} past ${timeToString[hour]}`;
  }

  const hr = addAnHour(hour);
  const remainder = 60 - minutes;

  return `${timeToString[remainder]} to ${timeToString[hr]}`;
}

module.exports = { convertTimeToWords };
