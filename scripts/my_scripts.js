$(document).ready(function() {
    // Lightning effect and sound
    function triggerLightning() {
        $('#lightning1').fadeIn(500).fadeOut(500);
        $('#lightning2').fadeIn(500).fadeOut(500);
        $('#lightning3').fadeIn(500).fadeOut(500);

    }

    $('body').click(function() {
        triggerLightning();
    });

    $('#head').on('mousedown', function(e) {
        if (e.which === 1) { 
            $(this).animate({ left: "+=50px" }, 500); 
        }
    });

    $('#head').on('contextmenu', function(e) {
        e.preventDefault(); 
        $(this).animate({ left: "+=50px" }, 500); 
        return false; 
    });

});
