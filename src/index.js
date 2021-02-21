module.exports = function check(str, bracketsConfig) {

  for (let i=str.length; i>0; i--) 
		for (pair of bracketsConfig)
			str.includes(pair.join('')) ? str = str.replace(pair.join(''), '') : null;

  return !str.length;
}