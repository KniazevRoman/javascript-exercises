const ftoc = function(deg) {
  let result = (deg - 32) * 5 / 9;

  if (Number.isInteger(result)) {
    return result;
  } else {
    return +result.toFixed(1);
  }
}

const ctof = function(deg) {
  let result = (deg * 9 / 5) + 32;

  if (Number.isInteger(result)) {
    return result;
  } else {
    return +result.toFixed(1);
  }
}

module.exports = {
  ftoc,
  ctof
}
