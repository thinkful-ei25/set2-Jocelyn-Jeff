function jediName(firstName, lastName) {
	let jedName = lastName.slice(0,3) + firstName.slice(0,2);
	return jedName;
}

console.log(jediName('Jeff', 'Oriente'));

function beyond(num) {
	if(num === Number.NEGATIVE_INFINITY || num === Number.POSITIVE_INFINITY) {
		console.log('And beyond');
	}
	if(num > 0 && num < Infinity) {
		console.log('To infinity');
	}
	if(num < 0 && num > -Infinity) {
		console.log('To negative infinity');
	}
	if(num === 0) {
		console.log('Staying home');
	}

}

console.log(beyond(0));

/////////////////////////////////////////////////////////////////////

function decode(encoded) {
let crackedString = '';
let newArray = encoded.split(' ');
for(let i=0; i<newArray.length; i++) {
	if(newArray[i].charAt(0)!== /a|b|c|d/ig) {
		crackedString += ' ';
	}
	if(newArray[i].charAt(0) === 'a') {
		crackedString += newArray[i].charAt(1);
	} 
	if(newArray[i].charAt(0) === 'b') {
		crackedString += newArray[i].charAt(2);
	} 
	if(newArray[i].charAt(0) === 'c') {
		crackedString += newArray[i].charAt(3);
	} 
	if(newArray[i].charAt(0) === 'd') {
		crackedString += newArray[i].charAt(4);
	} 
}

return crackedString;
}


console.log(decode('craft block argon meter bells brown croon droop'));