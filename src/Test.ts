/// <reference path="Validation.ts" />
/// <reference path="ValidatorLettersOnly.ts" />
/// <reference path="ValidatorZipCode.ts" />

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.ValidatorString; } = {};
validators["ZIP code"] = new Validation.ValidatorZipCode();
validators["Letters only"] = new Validation.ValidatorLettersOnly();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log("'" + s + "' " + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
    }
}
