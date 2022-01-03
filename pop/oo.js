var point = 0;
var pic = 0;
const closeMouthSound = new Audio("./movie_1.mp3");
const closeMouthSound1 = new Audio("./pew-pew-lame-sound-effect.mp3");


function pop() {
    point = point + 1;
    changePic();
    document.getElementById("point").innerHTML = point
}

function changePic() {
    if (pic == 0) {
        pic = 1;
        document.getElementById("pic").style.backgroundImage = "url('88.jpg')";


        time();
        var audio = document.getElementById("audio");
        closeMouthSound.play()

    } else {
        pic = 0;
        document.getElementById("pic").style.backgroundImage = "url('99.jpg')";
        closeMouthSound1.play()

    }
}

function time() {
    var check = true;
    let start = Date.now();

    setInterval(function() {
        if (check) {
            let diff = Math.floor((Date.now() - start) / 10);
            console.log(diff);

            if (diff == 10) {
                check = false;
                changePic();
            }
        }
    }, 10);
}