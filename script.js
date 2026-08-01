// Menampilkan surat saat tombol ditekan
document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.getElementById("start");
    const letter = document.getElementById("letter");
    const text = document.getElementById("type");

    const message = `Selamat ulang tahun, Anik aku tercinta ❤️

Semoga di usia yang baru ini kamu selalu diberikan kesehatan,
kebahagiaan, dan semua impianmu bisa tercapai, dan selalu mencitai aku, ga pernah ninggalin aku. 

Terima kasih sudah menjadi bagian terindah dalam hidupku.

mas bersyukur bisa mengenalmu,
tertawa bersamamu,
dan membuat banyak kenangan indah.

Semoga kita selalu bersama
hari ini,
besok,
dan selamanya.
Aku sangat mencintaimu
I Love You ❤️`;

    if(startBtn){
        startBtn.addEventListener("click", () => {

            document.querySelector(".card").style.display="none";

            letter.classList.remove("hide");

            let i = 0;

            function typing(){

                if(i < message.length){

                    text.innerHTML += message.charAt(i);

                    i++;

                    setTimeout(typing,35);

                }

            }

            typing();

        });

    }

});

// Animasi hati jatuh

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="-20px";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.opacity=Math.random();

    heart.style.pointerEvents="none";

    heart.style.transition="transform 6s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(110vh) rotate(360deg)";

    },50);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,350);
