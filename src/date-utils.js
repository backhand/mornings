export default {
  parseTime: parseTime,
  getTime: getTime
};

function parseTime(str) {
  var match = str.match(/^(\d+):(\d+)/);
  if (match) {
    return {
      h: parseInt(match[1], 10),
      m: parseInt(match[2], 10)
   };
 }
}

function getTime(str) {
  var parsedTime = parseTime(str);
  var date = new Date();
  date.setHours(parsedTime.h);
  date.setMinutes(parsedTime.m);
  date.setSeconds(0);
  return date.getTime();
}
