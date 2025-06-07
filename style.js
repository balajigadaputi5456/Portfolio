$(".list li a").click(function()
{
    var userChosen=$(this).attr("id");
    $(".list li a").removeClass("active");
    $("#"+userChosen).addClass("active");

    if(userChosen === "about")
    {
        gotoclick("abt");
    }
    else if(userChosen === "home")
    {
        gotoclick("hme");
    }
    else if( userChosen === "services")
    {
        gotoclick("srv");
    }
    else if(userChosen === "Portfolio")
    {
        gotoclick("prt");
    }
    else if(userChosen === "contact")
    {
        gotoclick("cnt");
    }
})

$("#hireme").click(function() {
    $(".list li a").removeClass("active");
    $("#about").addClass("active");
    gotoclick("abt");
});

function gotoclick(choice) {
    
    $(".main-section").removeClass("active");
    
    $("#" + choice).addClass("active");
}

$(document).ready(function() {
    $(".main-section").removeClass("active");
    $("#hme").addClass("active");
});
