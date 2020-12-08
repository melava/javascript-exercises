const ftoc = function(farenheit) {
  let cel = Math.round((farenheit - 32) * 5 / 9 * 10) / 10 ;
  return cel;
}

const ctof = function(celsius) {
  let far = Math.round((celsius * 9 / 5 + 32) * 10) / 10 ;
  return far;
}

module.exports = {
  ftoc,
  ctof
}
