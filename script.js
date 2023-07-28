//your JS code here. If required.
function nonRepeatedchar(str) {
	for(let i=1;i<str.length();i++){
		if(i==str.length()-1&&str.charAt(i)!==str.charAt(i-1))return str.charAt(i)
       if(str[i]!==str[i-1]&&str[i]!==str[i+1])return str[i];
	}
}
let str="anmenn"
console.log(nonRepeatedchar(str))