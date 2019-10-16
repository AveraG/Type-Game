window.addEventListener('DOMContentLoaded', (event) => {
    let numberOfWords = 54;
    let numberOfMistakes = 0;
    
    let sentences = ['hi'
        // 'ten ate neite ate nee enet ite ate inet ent eate',
        //  'Too ato too nOt enot one totA not anot tOO aNot',
        //  'oat itain oat tain nate eate tea anne inant nean',
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
        var x = event.which;
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
            console.log('here');console.log(sentences.length)
            whatSentence++
            letterPosition = 0;
            $('#yellow-block').width(5);
            $('#sentence')[0].innerText = sentences[whatSentence]
            $('#feedback').empty()
            
        }

        //$('#target-letter')[0].innerText = sentences[whatSentence][letterPosition]
    })

    $('body').keyup(function () {
        keyList.css('background-color', ''); //uses the 'key' from class name to change color
    })

    // function gameOver() {
    //     console.log(letterPosition)
    //     console.log(sentences[whatSentence])
    //     console.log(sentences.length)
    //     if (letterPosition === sentences[whatSentence].length && sentences[whatSentence] === sentences.length){
    //         console.log('done')
    //     }
    // }



});

