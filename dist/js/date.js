var dt = new Date();

var date = {
  //   timeZone: "America/New_York",
  hour12: true,
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

var time = {
  hour: "numeric",
  minute: "numeric",
};

// something like "Thursday, February 14, 2019, 02:55"
console.log(dt.toLocaleString("en-US", date));
console.log(dt.toLocaleString("en-US", time));
