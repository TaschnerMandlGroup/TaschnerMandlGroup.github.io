const track = document.getElementById("image-track");

function onMouseMove(e) {

    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * 100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    nextPercentage = Math.max(-50, Math.min(50, nextPercentage));
    track.dataset.percentage = nextPercentage;

    //track.style.transform = `translate(${nextPercentage-50}%, -50%)`; // Fixed missing parenthesis
    track.animate({
        transform: `translate(${nextPercentage-50}%, -50%)`
    }, {duration:1200, fill: "forwards"});
    
    document.getElementById('prevPercentageDisplay').textContent = `Previous Percentage: ${nextPercentage}`;

    for(const image of track.getElementsByClassName("image")) {
        // image.style.objectPosition = `${nextPercentage+50}% 50%`;
        image.animate({
            objectPosition: `${nextPercentage+50}% center`
        }, {duration:1200, fill: "forwards"});
    }

}

window.onmousedown = e => {
  track.dataset.mouseDownAt = e.clientX.toString(); // Store as a string
}

window.onmousemove = onMouseMove;

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
}

