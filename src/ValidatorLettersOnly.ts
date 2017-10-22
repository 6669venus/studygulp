/// <reference path="Validation.ts" />
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class ValidatorLettersOnly implements ValidatorString {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}
