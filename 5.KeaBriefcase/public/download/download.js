const urlArray = window.location.href.split("/");
const messageId = urlArray[urlArray.length - 1];

fetch(`/uploads/${messageId}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        $("#message").append(`<p>${data.data.message}</p>`);
    });