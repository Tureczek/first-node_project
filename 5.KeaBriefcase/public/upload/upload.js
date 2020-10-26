
const currentYear = new Date().getFullYear();

const footerCopyright = document.getElementById("footer-copyright");
const copyrightElement = document.createTextNode("©" + currentYear);

footerCopyright.appendChild(copyrightElement);


// document.getElementById("form-submit").addEventListener("click", () =>{})

function handleFormSubmitted(){
    const formMessage = document.getElementById("messageBox").value;
    console.log(formMessage);
    $.get("/form?message=" + formMessage, (response) =>{ //Kombinere flere med "^" eller "&"
        console.log(response);
    });
}

// change it to post this tile on /form
function handleFormSubmittedPost() {
    const formMessage = document.getElementById("messageBox").value;
    console.log(formMessage);
    $.post("/form?message=" + formMessage, (response) =>{
        console.log(response);
    });
}

function handleFormSubmittedPost2() {
    const formMessage = document.getElementById("messageBox").value;
    $.ajax({
        url : "/form",
        type : "POST",
        data: {formMessage}
    }).done((response) => {
        console.log(response)
    });
}

function validateForm() {
    return true
}