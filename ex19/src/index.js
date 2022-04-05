// Only change code below this line
function myDoWhile() {
    var i=0;
    var myNumbers="";
    do {
        (i===9) ? myNumbers+= i:myNumbers+= i+", ";
        i++;
    } while (i<10);
    return myNumbers;
}
console.log(myDoWhile());
// Only change code above this line
module.exports = myDoWhile;