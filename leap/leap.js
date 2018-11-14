
export let isLeap = function(year) {
    if ((year % 4 === 0) && (year % 100 != 0)) {
            return true;
        } else if (year % 400 === 0) {
            return true;
        } else {
            return false;
    }
};

// console.log(isLeap(1700));
// console.log(isLeap(2000));


// ES6

//export let isLeap = (year) => { return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); }

// console.log(isLeap(1700));
// console.log(isLeap(2000));