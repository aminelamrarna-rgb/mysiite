const popup = document.getElementById("popup");

const forzaBtn = document.querySelector(".forza-btn");

const showCode = document.getElementById("showCode");

const lockerBtns = document.querySelectorAll(".locker-btn");

/* OPEN POPUP */

forzaBtn.onclick = () => {

    popup.style.display = "flex";

}

/* CLOSE POPUP */

popup.onclick = (e) => {

    if(e.target === popup){

        popup.style.display = "none";

    }

}

/* CONTENT LOCKER */

showCode.onclick = () => {

    window.location.href =
    "https://checkmyapp.store/cl/i/l7md76";

}

/* OTHER BUTTONS */

lockerBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        window.location.href =
        "https://checkmyapp.store/cl/i/l7md76";

    });

});

/* VIDEO EFFECT */

const medias = document.querySelectorAll(".media");

medias.forEach(media => {

    const video = media.querySelector(".hover-video");

    if(video){

        media.addEventListener("mouseenter", () => {

            video.style.opacity = "1";

            video.play();

        });

        media.addEventListener("mouseleave", () => {

            video.style.opacity = "0";

            video.pause();

            video.currentTime = 0;

        });

    }

});

/* LIVE COUNTERS */

function randomNumber(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

/* FORZA */

setInterval(() => {

    document.querySelectorAll(".forza-count").forEach(el => {

        el.innerHTML =
        "🎟 " + randomNumber(410, 426) + " coupons left";

    });

}, 2500);

/* BLOCK BLAST */

setInterval(() => {

    document.querySelector(".block-count").innerHTML =
    "🎮 " + randomNumber(300, 318) + " rewards left";

}, 2200);

/* MONOPOLY */

setInterval(() => {

    document.querySelector(".mono-count").innerHTML =
    "🎲 " + randomNumber(570, 592) + " dice rewards left";

}, 2000);

/* USERS ONLINE */

setInterval(() => {

    document.querySelector(".online-users").innerHTML =
    "👥 " + randomNumber(1100, 1400) + " USERS ONLINE NOW";

}, 3000);