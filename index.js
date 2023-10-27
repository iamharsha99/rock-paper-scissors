
var started=false;
var us=0;
var cs=0;
var user;
var comp;
function check()
{
        if(user=="rock" && comp=="scissors")
            {
                us+=1;
                return "user";
            }
            else if(user=="scissors" && comp=="paper")
            {
                us+=1;
                return "user";
            }
            else if(user=="paper" && comp=="rock")
            {
                us+=1;
                return "user";
            }
            else if(user=="scissors" && comp=="rock")
            {
                cs+=1;
                return "comp";
            }
            else if(user=="rock" && comp=="paper")
            {
                cs+=1;
                return "comp";
            }
            else if(user=="paper" && comp=="scissors")
            {
                cs+=1;
                return "comp";
            }
        
            
}
$(document).keypress(function(){

    if(!started)
    {
        $("h4").text("Make your move !!");
        started=true;

        $(".choice").click(function(){

            user=$(this).attr("id");
           $("#user-img").attr("src","./images/user_"+user+".png");
        
            var options=["rock","paper","scissors"];
            comp=options[Math.floor(Math.random()*3)];
           $("#comp-img").attr("src","./images/comp_"+comp+".png");

            console.log(user+" "+comp);
            var x=check();
            if(x=="user")
                {


                    $("#user-score").text(us);
                    $("#comp-score").text(cs);

                    $("#user").addClass("user");
                    $("#comp").removeClass("comp");

                 

                }
            else if(x=="comp"){


                $("#user-score").text(us);
                $("#comp-score").text(cs);

                $("#user").removeClass("user");
                $("#comp").addClass("comp");


            }
           
            
            

        });
    }
});