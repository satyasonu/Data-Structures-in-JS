/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  // we can simply use a function
  return address.replaceAll(".", "[.]");
};       
var defangIPaddr1 = function (address) {
  let result = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] == ".") {
      result = result + "[.]";
    } else {
      result = result + address[i];
    }
  }
  return result;
};
console.log(defangIPaddr1("1.1.1.1."));
