/*======================================================================

                          Show/Hide script

======================================================================*/

$(document).ready(function() {
    $(".hidden").hide();


    var isShown = false;
    $("#showButton").click(function() {
        $(".hidden").toggle();



        if (isShown) {
            $("#showButton").html("Show more");
        } else {
            $("#showButton").html("Show less");
        }

        isShown = !isShown;
    });
});