module.exports = typeof module.exports === "undefined" ? {} : module.exports;
/**
 * gets sq rt
 * @param {decimal} number - sqr nbr
 * @return {decimal}
 */
module.exports.sqrtlib = function( number ) {
  const libreria = require('mathjs');
  return libreria.sqrt(number);
}
