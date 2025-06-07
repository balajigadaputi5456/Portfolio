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
    gotoclick("abt");
});

function gotoclick(choice)
{
    document.getElementById(choice).scrollIntoView({behavior: "smooth"});
}