let excalimation = true
let experienceScrollDirection = 1

const calculateResumePostion = () => {
    const resumeComponent = $(".resume-image");
    const offsetDiff = (window.pageYOffset + window.innerHeight) - resumeComponent.offset().top - 2 * resumeComponent.innerHeight()
    const yOffset = Math.min(Math.max(0, offsetDiff), resumeComponent.innerHeight())
    resumeComponent.css("object-position", `50% ${yOffset / resumeComponent.innerHeight() * 100}%`)
}

const activateDot = (sectionId) => {
    let section = $(`#${sectionId}`)
    var hT = section.offset().top,
        hH = section.outerHeight(),
        wH = $(window).height(),
        wS = $(window).scrollTop();

    if ((wS + wH) > ((hT + hH)) && (wS < hT)) {
        $('.active').removeClass('active');
        $(`#dot-${sectionId}`).addClass('active');
        return true;
    }
    return false
}

const handleExperienceScroll = () => {
    setInterval(() => {
        let element = $(".auto-horizontal-scroll");
        let maxScroll = element[0].scrollWidth - element.outerWidth();
        if (element.scrollLeft() === maxScroll) {
            experienceScrollDirection = -1;
        } else if (element.scrollLeft() == 0) {
            experienceScrollDirection = 1;
        }
        element.scrollLeft(element.scrollLeft() + experienceScrollDirection * 0.5, 0);
    }, 30);

    $("#experience")
        .on('mouseenter', () => {
            console.log("hello")
            $(this).removeClass("auto-horizontal-scroll");
        })
        .on('mouseleave', () => {
            console.log("leave")
            $(this).addClass("auto-horizontal-scroll")
        });
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

    handleExperienceScroll()


    // Handle resume effect
    calculateResumePostion()
    window.addEventListener('scroll', () => {

        // Handle resume scroll
        calculateResumePostion()

        // Handle dots change
        activateDot("introduction") ||
            activateDot("experience") ||
            activateDot("projects") ||
            activateDot("resume") ||
            activateDot("recommendation")
    })



});
