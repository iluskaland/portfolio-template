let excalimation = true

const calculateResumePostion = () => {
    const resumeComponent = $(".resume-image");
    const offsetDiff = (window.pageYOffset + window.innerHeight) - resumeComponent.offset().top - 2* resumeComponent.innerHeight()
    const yOffset = Math.min(Math.max(0, offsetDiff), resumeComponent.innerHeight())
    resumeComponent.css("object-position", `50% ${yOffset / resumeComponent.innerHeight() * 100}%`)
}

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
    calculateResumePostion()
    window.addEventListener('scroll', () => {

        // Handle resume scroll
        calculateResumePostion()

        // Handle dots change

    })



});
