///////////////////////
// Javascript checks //
///////////////////////

console.log("Javascript (events.js) connected!");

if (jQuery) {
    console.log("jQuery is connected and available");
} else {
    console.log("!! ERROR !! jQuery is unavailable");
}


//////////////////////////////
// Global variables go here //
//////////////////////////////

// buttons as variables using jQuery selectors
var btnOne = $("#button1");
var btnTwo = $("#button2");
var btnThree = $("#button3");

// h1
var heading = $("h1");


////////////////////////////
// Eventlisteners go here //
////////////////////////////

// eventlisteners assigned using jQuery selectors
btnOne.click(function() {
    alert("You have clicked button one");
})

btnTwo.click(function() {
    alert("You have clicked button two");
})

btnThree.click(function() {
    alert("You have clicked button three");
})