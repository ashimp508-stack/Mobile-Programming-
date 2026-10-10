$(document).ready(function() {

    /* 
       1. GET & SET
       */

    // Show Name
    $("#show-name").click(function() {

        let name = $("#student-name").text();

        $("#output").text("Student Name: " + name);

    });

    // Change Name
    $("#change-name").click(function() {

        $("#student-name").text("Ashim Poudel");

        $("#output").text("Name changed successfully!");

    });

    // Show Bio
    $("#show-bio").click(function() {

        let bio = $("#student-bio").html();

        $("#output").html(bio);

    });

    // Get Input
    $("#get-input").click(function() {

        let nickname = $("#nickname-input").val();

        if (nickname === "") {

            $("#output").text("Please enter a nickname.");

        } else {

            $("#output").text("Your nickname is: " + nickname);

        }

    });

    // Set Input
    $("#set-input").click(function() {

        $("#nickname-input").val("jQuery Pro");

        $("#output").text("Nickname has been set!");

    });

    /* 
       2. CSS CLASSES
        */

    // Highlight Card
    $("#highlight-card").click(function() {

        $("#profile-card").addClass("highlighted");

        $("#output").text("Profile card highlighted!");

    });


    // Remove Highlight
    $("#remove-highlight").click(function() {

        $("#profile-card").removeClass("highlighted");

        $("#output").text("Highlight removed!");

    });


    // Toggle Dark Mode
    $("#toggle-dark").click(function() {

        $("#profile-card").toggleClass("dark-mode");

        $("#output").text("Dark mode toggled!");

    });


    // Toggle Rounded Photo
    $("#toggle-rounded").click(function() {

        $("#profile-photo").toggleClass("rounded");

        $("#output").text("Photo shape changed!");

    });


    /* 
       3. CSS METHOD
       */

    // Red Background
    $("#red-background").click(function() {

        $("#profile-card").css(
            "background-color",
            "#e74c3c"
        );

        $("#output").text("Background changed to red!");

    });


    // Reset Background
    $("#reset-background").click(function() {

        $("#profile-card").css(
            "background-color",
            "white"
        );

        $("#output").text("Background reset!");

    });


    /* 
       4. HIDE & SHOW
       */

    // Hide Photo
    $("#hide-photo").click(function() {

        $("#profile-photo").hide("slow");

        $("#output").text("Profile photo hidden.");

    });


    // Show Photo
    $("#show-photo").click(function() {

        $("#profile-photo").show("slow");

        $("#output").text("Profile photo shown.");

    });


    // Toggle Bio
    $("#toggle-bio").click(function() {

        $("#student-bio").toggle();

        $("#output").text("Bio visibility changed.");

    });


    /* 
       5. FADE EFFECTS
       */

    // Fade Out Card
    $("#fade-out").click(function() {

        $("#profile-card").fadeOut(800);

    });


    // Fade In Card
    $("#fade-in").click(function() {

        $("#profile-card").fadeIn(800);

    });


    // Fade to 50%
    $("#fade-50").click(function() {

        $("#profile-card").fadeTo(
            "slow",
            0.5
        );

        $("#output").text("Card opacity changed to 50%.");

    });


    /* 
       6. SLIDE EFFECTS
       */

    // Slide Up Skills
    $("#slide-up").click(function() {

        $("#skills-list").slideUp(600);

    });


    // Slide Down Skills
    $("#slide-down").click(function() {

        $("#skills-list").slideDown(600);

    });


    // Slide Toggle Skills
    $("#slide-toggle").click(function() {

        $("#skills-list").slideToggle(600);

    });


    /* 
       7. ANIMATION
       */

    // Animate Card
    $("#animate-card").click(function() {

        $("#profile-card")
            .animate({
                marginLeft: "200px"
            }, 1000)
            .animate({
                marginLeft: "auto"
            }, 1000);

    });

    /* 
       8. MOUSE EVENTS
        */

    // Mouse Enter
    $("#profile-photo").mouseenter(function() {

        $("#profile-photo").addClass("shadow");

    });


    // Mouse Leave
    $("#profile-photo").mouseleave(function() {

        $("#profile-photo").removeClass("shadow");

    });

    /* 
       9. KEYBOARD EVENT
       */

    $("#nickname-input").keypress(function(event) {

        $("#output").text(
            "Pressed key: " + event.key
        );

    });

    /* 
       10. EXTRA CLICK EFFECT
        */

    $("#profile-card").click(function() {

        $(this).css(
            "transform",
            "scale(1.01)"
        );

        setTimeout(function() {

            $("#profile-card").css(
                "transform",
                ""
            );

        }, 150);

    });

});
