import expect from 'expect';

/*
* Your task is to write a function that takes a string 
* and return a new string with all vowels removed.

* For example, the string "This website is for losers LOL!"
* would become "Ths wbst s fr lsrs LL!".
*/

const disemvowel = (str) => {
	if(typeof str !== 'string') {
		throw new Error('Parameter not a string!');
	}

	return str.split('').reduce((acc, i) => {
		return !/[aeiou]/i.test(i) ? acc + i : acc;
	}, '');
}

/*
* TODO List:
* - Check input to see if it's a string
* - Check output to see if it's a string
* - Check if output is a vowel-less input
* - Empty string should return empty string
*/
describe('disemvowel()', () => {

	it('should input a string', () => {
		expect(function() {
			disemvowel(42)
		}).toThrow(/Parameter not a string!/);
	});

	it('should output a string', () => {
		expect(
			typeof disemvowel('lorem ipsum')
		).toBe('string');
	});

	it('should have an output lacking vowels', () => {
		expect(
			disemvowel('lorem ipsum')
		).toBe('lrm psm');
	});

	it('should return an empty string if argument is an empty string', () => {
		expect(
			disemvowel('')
		).toBe('');
	});


});