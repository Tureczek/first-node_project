/*
// document.getElementById("form-submit").addEventListener("click", () =>{})
function handleFormSubmitted(){
    const formMessage = document.getElementById("messageBox").value;
    console.log(formMessage);
    $.get("/form?message=" + formMessage, (response) =>{ //Kombinere flere med "^" eller "&"
        console.log(response);
    });
}

// change it to post this time on /form
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
*/


// 1 send a fetch to /uploads
// 2 send a message to backend and get it back
function validateForm() {
    const message = document.getElementById("messageBoxSubmit").value;
    fetch("/uploads", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            message
        })
    })
        .then(res => res.json())
        .then(res => { // Converts a stream to a new object, requires a .then()
            window.location.href = `/download/${res.id}`
        });
    return true
}
