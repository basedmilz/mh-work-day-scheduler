$(document).ready(function () {

    console.log("Ready ")
})
var hour8 = 8;
var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour13 = 13;
var hour14 = 14;
var hour15 = 15;
var hour16 = 16;
var hour17 = 17;
var hour18 = 18;
var hour19 = 19;
var hour20 = 20;
var hour21 = 21;

// Date in textbox
$("#day").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


// Set time for comparison
var timeNow = moment().format("H");
console.log(timeNow)


// Conditional Statements for time 

// 8am 
if (timeNow < hour8) {
    $(".time-block8").addClass("future");
} else if (timeNow > hour8) {
    $(".time-block8").addClass("past");
} else if (timeNow = hour8) {
    $(".time-block8").addClass("present");
}
// 9am 
if (timeNow < hour9) {
    $(".time-block9").addClass("future");
} else if (timeNow > hour9) {
    $(".time-block9").addClass("past");
} else if (timeNow = hour9) {
    $(".time-block9").addClass("present");
}
// 10am 
if (timeNow < hour10) {
    $(".time-block10").addClass("future");
} else if (timeNow > hour10) {
    $(".time-block10").addClass("past");
} else if (timeNow = hour10) {
    $(".time-block10").addClass("present");
}
// 11am 
if (timeNow < hour11) {
    $(".time-block11").addClass("future");
} else if (timeNow > hour11) {
    $(".time-block11").addClass("past");
} else if (timeNow = hour11) {
    $(".time-block11").addClass("present");
}
// 12pm 
if (timeNow < hour12) {
    $(".time-block12").addClass("future");
} else if (timeNow > hour12) {
    $(".time-block12").addClass("past");
} else if (timeNow = hour12) {
    $(".time-block12").addClass("present");
}
// 1pm 
if (timeNow < hour13) {
    $(".time-block13").addClass("future");
} else if (timeNow > hour13) {
    $(".time-block13").addClass("past");
} else if (timeNow = hour13) {
    $(".time-block13").addClass("present");
}
// 2pm
if (timeNow < hour14) {
    $(".time-block14").addClass("future");
} else if (timeNow > hour14) {
    $(".time-block14").addClass("past");
} else if (timeNow = hour14) {
    $(".time-block14").addClass("present");
}
// 3pm 
if (timeNow < hour15) {
    $(".time-block15").addClass("future");
} else if (timeNow > hour15) {
    $(".time-block15").addClass("past");
} else if (timeNow = hour15) {
    $(".time-block15").addClass("present");
}
// 4pm 
if (timeNow < hour16) {
    $(".time-block16").addClass("future");
} else if (timeNow > hour16) {
    $(".time-block16").addClass("past");
} else if (timeNow = hour16) {
    $(".time-block16").addClass("present");
}
// 5pm 
if (timeNow < hour17) {
    $(".time-block17").addClass("future");
} else if (timeNow > hour17) {
    $(".time-block17").addClass("past");
} else if (timeNow = hour17) {
    $(".time-block17").addClass("present");
}
// 6pm 
if (timeNow < hour18) {
    $(".time-block18").addClass("future");
} else if (timeNow > hour18) {
    $(".time-block18").addClass("past");
} else if (timeNow = hour18) {
    $(".time-block18").addClass("present");
}
// 7pm
if (timeNow < hour19) {
    $(".time-block19").addClass("future");
} else if (timeNow > hour19) {
    $(".time-block19").addClass("past");
} else if (timeNow = hour19) {
    $(".time-block19").addClass("present");
}
// 8pm 
if (timeNow < hour20) {
    $(".time-block20").addClass("future");
} else if (timeNow > hour20) {
    $(".time-block20").addClass("past");
} else if (timeNow = hour20) {
    $(".time-block20").addClass("present");
}
// 9pm 
if (timeNow < hour21) {
    $(".time-block21").addClass("future");
} else if (timeNow > hour21) {
    $(".time-block21").addClass("past");
} else if (timeNow = hour21) {
    $(".time-block21").addClass("present");
}

// Save button function
$(".saveBtn").on("click", function () {

    var plan = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Textbox values saved to localStorage
    localStorage.setItem(time, plan);
})

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));
$("#hour19 .description").val(localStorage.getItem("hour19"));
$("#hour20 .description").val(localStorage.getItem("hour20"));
$("#hour21 .description").val(localStorage.getItem("hour21"));

