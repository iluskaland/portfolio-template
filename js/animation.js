let excalimation = true
let experienceScrollDirection = 1

const calculateResumePostion = () => {
    const resumeComponent = $(".resume-image");
    const offsetDiff = (window.pageYOffset + window.innerHeight) - resumeComponent.offset().top - 2.7 * resumeComponent.innerHeight()
    const yOffset = Math.min(Math.max(0, offsetDiff), resumeComponent.innerHeight())
    resumeComponent.css("object-position", `50% ${yOffset / resumeComponent.innerHeight() * 100}%`)
}

// const activateDot = (sectionId) => {
//     let section = $(`#${sectionId}`)
//     var hT = section.offset().top,
//         hH = section.outerHeight(),
//         wH = $(window).height(),
//         wS = $(window).scrollTop();

//     if ((wS + wH) > ((hT + hH)) && (wS < hT)) {
//         $('.active').removeClass('active');
//         $(`#dot-${sectionId}`).addClass('active');
//         return true;
//     }
//     return false
// }

const handleExperienceScroll = () => {
    setInterval(() => {
        let element = $(".auto-horizontal-scroll");
        let maxScroll = element[0].scrollWidth - element.outerWidth();
        if (element.scrollLeft() === maxScroll) {
            console.log("asasmax", element.scrollLeft(), experienceScrollDirection, maxScroll)
            element.animate({scrollLeft: $(element).offset().left - 200}, 2000);
        } else if (element.scrollLeft() === 0) {
            console.log("asas0", element.scrollLeft(), experienceScrollDirection, maxScroll)
            element.animate({scrollLeft: $(element).offset().left + 200}, 5000);
        }
    }, 100);

    // $("#experience")
    //     .on('mouseenter', () => {
    //         $(this).removeClass("auto-horizontal-scroll");
    //     })
    //     .on('mouseleave', () => {
    //         $(this).addClass("auto-horizontal-scroll")
    //     });
}

const handleTimelineClick = () => {
    $("#timeline").click(() => {
        window.open(NOTION_LINK, '_blank').focus();
    })
}

$(document).ready(function () {

    // Add Navigation
    // $('.dots li').click(function () {
    //     $('.active').removeClass('active');
    //     $(this).addClass('active');
    // });

    handleTimelineClick();

    // Add exclaimation blink
    setInterval(() => {
        let excalimationComponent = document.getElementById("exclaimation")
        excalimationComponent.innerText = excalimation
            ? "Hi there"
            : "Hi there!"
        excalimation = !excalimation
    }, 500)

    // handleExperienceScroll()


    // Handle resume effect
    calculateResumePostion()
    window.addEventListener('scroll', () => {

    //     // Handle resume scroll
        calculateResumePostion()

    //     // Handle dots change
    //     activateDot("introduction") ||
    //         activateDot("experience") ||
    //         activateDot("projects") ||
    //         activateDot("resume") ||
    //         activateDot("recommendation")
    })


});
