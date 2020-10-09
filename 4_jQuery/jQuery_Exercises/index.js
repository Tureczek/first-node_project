console.log($);


<!-- 1 -->
$(document).ready(function () {
    $("body").css({
        "text-align" : "center"
    });
});

<!-- 2 -->
$(document).ready(function () {
    $("#title h2").text("New title")
});

<!-- 3 -->
$(document).ready(function () {
    $(".subtitle-box").css("background-color", "red");
});

<!-- 4 -->
$(document).ready(function () {
  //  $(".temp").css("visibility", "hidden");
   // $(".temp").css("display", "none");
    $(".temp").hide();
});

<!-- 5 -->
$(document).ready(function () {
    $(".reason").css("border", "5px dashed black");
});

<!-- 6 -->
$(document).ready(function () {
    $("#first-list").find("li").css("font-weight", "bold");
});

<!-- 7 -->
// $("#first-list li:nth-child(3)").css("text-decoration", "underline");
$("#first-list :eq(2)").css("text-decoration", "underline");

<!-- 8 -->
//$("#first-list li:nth-child(2)").css("text-decoration", "line-through");
$("#first-list :eq(1)").css("text-decoration", "line-through");

<!-- 9 -->
$("ul").css("font-style", "italic");
//$("#list").css("font-style", "italic");

<!-- 10 -->
<!-- Use em while relative to the font size, 2 em means 2 times the size of the current font -->
$("#list").find("span").css("font-size", ".50em");


<!-- 11 -->
$(document).ready(function () {
//    $(".unused-box").find("label").remove();
    $(".unused-box label").remove();

});

<!-- 12 -->
$(document).ready(function () {
    let txt1 = "<p>Second Sentence</p>";
    $(".unused-box").append(txt1);
});

<!-- 13 -->
$(document).ready(function () {
    let txt2 = "<p>First Sentence</p>"
    $(".unused-box").prepend(txt2);
});

<!-- 14 -->
$(document).ready(function () {
   // $(".unused-box").removeClass("unused-box").addClass("used-box");
    $(".unused-box").attr("class", "used-box");
});

<!-- 15 -->
$(document).ready(function () {
    $('.used-box').click(function(event) {
        $(event.currentTarget).toggleClass('used-boxed-clicked');
    });
});

<!-- 16 -->
$("#submit-button").prop("title", "You are ready to click");


<!-- 17 -->
$(document).ready(function () {
    let count = 4;
    $("#submit-button").click(function () {
        $("#first-list").append("<li>Reason " + count + "</li>");
        count++;
    });
});

<!-- 18 -->
$(document).ready(function () {
    $("#submit-button").click(function (event) {
        console.log($(event.currentTarget).parent());
    });
});