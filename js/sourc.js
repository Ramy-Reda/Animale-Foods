$(document).ready(function () {
        $(".sear").click(function (e) { 
            e.preventDefault();
            $(this).toggleClass("add1").fadeOut(500);
            $("#search-box").show();
            $(".show").fadeIn(800);
            $("#search-box").css({"transform": "scale(1)", "opacity": "1"});

            $(".show").click(function (e) { 
                e.preventDefault();
                $(this).hide();
                $("#search-box").css({"transform": "scale(0)", "opacity": "0"});
                $(".sear").fadeIn(500);
                $(".sear").toggleClass("add2");
            });
        });

        var dw = $(document).width();

        if ( dw <= 1200 ) {
            $(".slide").show();
        } else {
            $(".slide").hide();
        }

        $(".slide").click(function (e) { 
            e.preventDefault();
            $(".left").toggleClass("add3")
        });
});


