console.log("test");

// Javascript function for the navbar
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapse_sidebar
function openNav(){
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("sidebarMain").style.marginLeft ="250px";
}
function closeNav(){
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("sidebarMain").style.width = "0";
}



$("#expressInfo :eq(6)").css("color", "red");