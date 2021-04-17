type DigitValidator = (char: string) => boolean;

const numericValidator = (char: string) => /[0-9]{1}/.test(char);
const lowerCaseValidator = (char: string) => /[a-z]{1}/.test(char);
const upperCaseValidator = (char: string) => /[A-Z]{1}/.test(char);
const anyValidator = (char: string) => true;
const numberRangeValidator = (maxValue:number, char: string) => numericValidator(char) && parseInt(char) <= maxValue;



export const maskDigitValidators: {[key: string]: DigitValidator} = {
    'a': lowerCaseValidator,
    'A': upperCaseValidator,
    '*': anyValidator
};

export const neverValidator = (char: string) => false;

for(let i = 0; i <= 9; i++) {
    maskDigitValidators[i] = numberRangeValidator.bind(undefined, i);
}