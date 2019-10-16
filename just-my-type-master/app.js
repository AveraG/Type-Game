window.addEventListener('DOMContentLoaded', (event) => {
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    var whatSentence = 0;
    var letterPosition = 0;

    $('#sentence')[0].innerText = sentences[whatSentence]
    // sentences[whatSentence][letterPosition]
    // letterPosition == sentences[whatSentence].length
    // whatSentence++
    // letterPosition = 0;

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
        console.log(event.key)
        $('#' + x).css('background-color', 'pink');
        if(event.key == sentences[whatSentence][letterPosition]){
        letterPosition++
        
        }
    })
    $('body').keyup(function () {
        
        keyList.css('background-color', ''); //uses the 'key' from class name to change color
    })





});

