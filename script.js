
$(document).ready(function () {
    var textcontent = document.getElementsByClassName("text-content")[0];


    function enter() {
        textcontent.innerHTML += '<br>';
    };
    function erase(speed = 30) {

        setTimeout(function () {
            textcontent.innerHTML = textcontent.innerHTML.substring(0, textcontent.innerHTML.length - 39);

        }, speed + speed * 1);
    };

    function write(array = "", speed = 70) {

        for (let index = 0; index < array.length; index++) {

            let element = array[index];

            setTimeout(() => {
                if (element == '$') {
                    if (strong === false) {
                        strong = true;
                    } else {
                        strong = false;
                    }
                } else {
                    if (element == '^') {
                        enter();
                    } else {
                        if (element == '`') {
                            erase();
                        } else {
                            if (strong == false) {
                                textcontent.innerHTML += '<p class=" text-content-normal " >' + element + '</p>';
                            } else {
                                textcontent.innerHTML += '<p class="text-content-important">' + element + '</p>';
                            };
                        };
                    };
                };


            }, speed + speed * index);
        }

    };
    strong = false;
    //^=enter `=erase $=change-to-blood
    write('^I am a $autodidact inventor   ``````````` entrepreneur$. My mision is $influence for good an unimaginable number of people$. Enjoy and $Be Happy$ at the same time.^^I have good skills at $managment$ and as a $fullstack developer$ who enjoy $continuously learning$ the awesome new thoughts and technologies   ````````````````````````````mind explosions, however, the field which most interes me and I am preparing to make a huge impact in is: $The Artificial intelligence, Brain, Mind and Machine field.$^^$Contact me:$  dsandoval.ai@gmail.com');





});