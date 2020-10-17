$("h1").css("text-decoration", "underline");

$("p").css("font-weight", "bold");

$(".container p").css({
    "text-align": "left",
    "margin-left": "20%"
});

$("#jqSlideBox").css({
    "margin-left": "20%",
    "width": "70%",
    "height": "20%",
    "padding": "1.5%"
});

$("#jqSlideBox").hide();

$(document).ready(function () {
    $("#libButton").click(function () {
        $("#jqSlideBox").slideToggle(2000);
    });
});

$("#libButton").css({
    "letter-spacing": "1px",
    "text-transform": "uppercase",
    "text-align": "center",
    "border": "2px solid purple",
    "background": "gray",
    "color": "black",
    "box-shadow": "1px 1px 2px purple",
    "border-radius": "10px",
    "padding": "3px 10px",
    "display": "inline-block",
    "cursor": "pointer",
    "margin-top": "2%"
});

$("#secondExample").css({
    "margin-left": "20%",
    "width": "70%",
    "height": "20%",
    "padding": "1.5%"
});

$("#documentReady").css({
    "margin-left": "20%",
    "text-align" : "left",
    "width": "70%",
    "height": "20%",
    "padding": "1.5%",

});

$(".pictureContainer").css({
    "test-align" : "center",
    "color" : "white",
    "width" : "33%",
    "float" : "left",
    "margin-left" : "10%",
    "padding" : "10px",
    "margin-bottom" : "5%"
});

$("#pictureContainer img:nth-child(2)").css("margin-top", "8.5%");
$("#pictureContainer img:nth-child(4)").css("margin-left", "30%");


$("#documentReady p:nth-child(1)").css("margin-left", "9%");
$("#documentReady p:nth-child(2)").css("margin-left", "12%");
$("#documentReady p:nth-child(3)").css("margin-left", "16%");
$("#documentReady p:nth-child(4)").css("margin-left", "12%");
$("#documentReady p:nth-child(5)").css("margin-left", "9%");
