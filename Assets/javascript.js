$(document).ready(function () {

$("#day").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

})
var plan = $(document).siblings(".col-md-10 description")
window.localStorage.setItem(plan)