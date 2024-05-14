let excalimation = true


$(document).ready(function () {

    // Add Navigation
    $('.dots li').click(function () {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

    // Add exclaimation blink
    setInterval(() => {
        let excalimationComponent = document.getElementById("exclaimation")
        excalimationComponent.innerText = excalimation
            ? "Hi there"
            : "Hi there!"
        excalimation = !excalimation
    }, 500)


    // Handle resume effect
    const yOffset = window.pageYOffset
    $(".resume-image").css("object-position", `50% ${yOffset/window.innerHeight*100}%`)
    window.addEventListener('scroll', () => {

        // Handle resume scroll
        const yOffset = window.pageYOffset
        $(".resume-image").css("object-position", `50% ${yOffset/window.innerHeight*100}%`)

        // Handle dots change

    })



});
