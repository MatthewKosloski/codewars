import expect from 'expect';

const challenge = (str) => {
	return true;
}

/*
* TODO List:
* - Check input to see if it's a string
* - Check output to see if it's a string
* - Check if output is a vowel-less input
*/
describe('challenge1', () => {
	it('should have an input as a string', () => {
		expect(challenge(42)).toThrow(/Input not a string!/);
	});
});