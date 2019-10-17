window.addEventListener('DOMContentLoaded', (event) => {
    let time;
    let numberOfMistakes = 0;
    let startTime;
    let sentences = ['hi', 'bye'
        //'ten ate neite ate nee enet ite ate inet ent eate',
        // 'Too ato too nOt enot one totA not anot tOO aNot',
        // 'oat itain oat tain nate eate tea anne inant nean',
        // 'itant eate anot eat nato inate eat anot tain eat',
        // 'nee ene ate ite tent tiet ent ine ene ete ene ate'
    ];
    var whatSentence = 0;
    var letterPosition = 0;
    $('#sentence')[0].innerText = sentences[whatSentence]
    $('#target-letter')[0].innerText = sentences[whatSentence][letterPosition]


    $('#keyboard-upper-container').hide(); //overridden by function under this (lowest thing has priority)

    $('body').bind('keydown', function (e) {
        if (e.which == 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        };
    })
        .bind('keyup', function (e) { //undoes above function
            if (e.which == 16) {
                $('#keyboard-upper-container').hide();
                $('#keyboard-lower-container').show();
            };
        });

    let keyList = $('.key');
    $('body').keypress(function (event) { //listening for keypress on body tag
        if (whatSentence == 0 && letterPosition == 0) {
            time = new Date(); console.log(time)
        }
        startTime = time.getMinutes();

        let x = event.which;
        $('#' + x).css('background-color', 'pink');


        if (event.key == sentences[whatSentence][letterPosition]) {

            letterPosition++
            $('#yellow-block').width(function (i, c) {
                return c + 17;
            })
            $('#feedback').append('<p class="glyphicon glyphicon-ok"></p>');
        } else {
            numberOfMistakes++
            $('#feedback').append('<p class="glyphicon glyphicon-remove"></p>');
        }

        if (letterPosition == sentences[whatSentence].length && whatSentence !== (sentences.length - 1)) { //next sentence, or not true to end
            whatSentence++
            letterPosition = 0;
            $('#yellow-block').width(5);
            $('#sentence')[0].innerText = sentences[whatSentence]
            $('#feedback').empty()
        }

        $('#target-letter')[0].innerText = sentences[whatSentence][letterPosition]

        if (letterPosition == sentences[whatSentence].length && whatSentence === (sentences.length - 1)) {
            $('#target-letter')[0].innerText = score();
            score();
            gameOver();
            setTimeout(function () { $('#target-letter')[0].innerText = 'Do you want to play again? Type y or n'; }, 3000);

        }


    })

    $('body').keyup(function () {

        keyList.css('background-color', ''); //uses the 'key' from class name to change color
    })





    function score() {
        // calculate/display WPM
        // get time since start in minutes
        let stopTime = new Date();
        let finalTime = stopTime.getMinutes();

        //get elapsed minutes
        let totalTime = finalTime - startTime;

        let speed = Math.round((11 - 2 * numberOfMistakes) / totalTime); //11 should be 55

        return 'Your score is ' + speed + '!'

    }

    function gameOver() { //button to restart ?alert?

        $('body').keypress(function (y) {
            if (y.which == 121) {
                location.reload();
            }
        })
    }

});




