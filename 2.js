// Username harus diawali huruf kecil, 
// tidak boleh ada huruf besar, 
// tidak boleh menggunakan special character kecuali ‘_’, 
// minimal 5 karakter dan maksimal 12 karakter
function usernameValidity(username) {
    return /^(?=.{5,12}$)(?![_0-9])(?!.*[_]{2})[a-z0-9_]+(?<![_])$/.test(username);
}

// Password merupakan 7 digit karakter dengan kombinasi 1 simbol, 1 angka dan 5 huruf besar.
function passwordValidity(password) {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Z\d\W\_]{7}$/.test(password);
}

console.log(usernameValidity('fiona'));
console.log(usernameValidity('fiona_mareta'));
console.log(usernameValidity('fionamareta99'));
console.log(usernameValidity('FIONA-mareta'));
console.log(passwordValidity('1WORLD!'));