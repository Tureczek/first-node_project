$(".methodShow li").css({
    "text-decoration": "underline",
    "margin-left": "2%"
});

$(".methodShow img").css("margin-left", "4%");

$("p").css("font-weight", "bold");

$("h1").css("text-decoration", "underline");

$(".space1").css("margin-left", "2.5em");

$(".space2").css("margin-left", "5em");

$(".space3").css("margin-left", "7.2em");

$("#car_Array").css({
    "margin-left": "5%",
    "width": "15%"
});

$("#car_Table").css({
    "margin-left": "10%",
    "color": "white"
});

$("#postman").css("margin-top", "100%")



/*
GOING TO ADD THIS IN THE FUTURE, WHEN WE LEARN ABOUT IT
UNFORTUNATELY I AM RUNNING OUT OF TIME

//CAR DEMO

let nextCarId = 3;

let cars = [
    {id: 1, model: "Jaguar"},
    {id: 2, model: "Mitsubishi"},
    {id: 3, model: "BMW"}
];

function loadArray() {
    for (let i = 0; i < cars.length; i++) {
        $("#cars").append("<p>" + cars[i].id + ": " + cars[i].model + "</p>");
    }
    ;
};

function deleteAll() {
    cars = ""
}

$(document).ready(function () {
    $("#reload").click(function () {
        let element = $("#cars");
        element.empty();
        loadArray()
    });
});

$(document).ready(function () {
    $("#delete_All").click(function () {
        let element = $("#cars");
        element.empty()
        deleteAll()
    });
});

 */

