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
} return crackedString;
}
console.log(decode('craft block argon meter bells brown croon droop'));


function howManyDays(month, leapYear) {

	if (leapYear === true && month === 'February'){
		return `${month} has 29 days`;
	} else if (leapYear === false && month === 'February'){
		return `${month} has 28 days`;
	}
	switch(month) {
		case 'January':
		case 'March':
		case 'May':
		case 'July':
		case 'August':
		case 'October': 
		case 'December':
			return  `${month} has 31 days`;
			break;
		case 'April':
		case 'June':
		case 'September':
		case 'November': 
			return  `${month} has 30 days`;
			break;
		default: 
		 throw new Error('Must provide a valid month');
	} 		 	
}
console.log(howManyDays('February', true));
console.log(howManyDays('welp', false));


function rockPaperSciss(num){
let outcomes = [
		'rock',
		'paper',
	 'scissors' 
];

let computer = Math.floor(Math.random() * 3) + 1;

	if (outcomes[num-1] === outcomes[computer-1]){
		return `You tied with the computer!`;
	} else if (outcomes[num-1]==='rock'&& outcomes[computer-1]==='paper'){
		return 'Paper beats rock! Computer wins!';
	} else if (outcomes[num-1]==='paper' && outcomes[computer-1] === 'scissors'){
		return 'Scissors beats paper! Computer wins!';
	} else if (outcomes[num-1]==='scissors' && outcomes[computer-1] === 'rock'){
		return 'Rock beats scissors! Computer wins!';
	} else if (outcomes[num-1]==='rock' && outcomes[computer-1] === 'scissors'){
		return 'Rock beats scissors! You win!';
	} else if (outcomes[num-1]==='paper' && outcomes[computer-1] === 'rock'){
		return 'Paper beats rock! You win!';
	} else if (outcomes[num-1]==='scissors' && outcomes[computer-1] === 'paper'){
		return 'Scissors beats paper! You win!';
	}
}	
console.log(rockPaperSciss(1));
console.log(rockPaperSciss(2));
console.log(rockPaperSciss(3));
