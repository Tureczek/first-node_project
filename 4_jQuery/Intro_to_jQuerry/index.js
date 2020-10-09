$(() => {
    $('#teleport-btn').click(() => {
        const left = $('.input-left');
        const right = $(".input-right");

        const temp = $(".input-left").val();
        left.val(right.val());
        right.val(temp);


        console.log('Clicked');
    });
});