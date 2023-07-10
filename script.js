// typed js
var typed = new Typed("#element", {
    strings: [
        "Web Developer",
        "Graphic Designer",
        "Web Designer",
        "Python Developer",
    ],
    typeSpeed: 50,
    smartBackspace: true,
    backSpeed: 10,
    fadeOut: true,
    cursorChar: "&nbsp;",
    loop: true,
    loopCount: Infinity,
});

// Button events

function visitGithub() {
    window.open("https://www.github.com/Aryan-ji");
}
function downloadResume() {
    var link = document.createElement("a");
    link.href = "/resume.pdf"; // Replace with the actual file URL
    link.download = "resume.pdf"; // Replace with the desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}