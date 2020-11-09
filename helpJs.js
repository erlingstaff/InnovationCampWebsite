function help(page){
    document.getElementById("helpBlock").style.display="block";
    //var close = document.getElementById("helpBlock").innerHTML;
    //console.log(page);
    if (page == "reason"){
        document.getElementById("helpBlock").innerHTML = document.getElementById("helpBlock").innerHTML + "On this page, students pick one or more of the reasons as to why they have been gone. This page is shown regardless of how many days a student has been gone. If a student has not been gone previous days, this screen is not shown and they are put back at the pick-a-student page for the next student to use it";
    }
    else if (page == "login"){
        document.getElementById("helpBlock").innerHTML = document.getElementById("helpBlock").innerHTML + "On this page, students enter their password to log in to the system and show that they have attended school this day. For the purpose of this demo, you can enter whatever in the password box to get to the next page";
    }
    else if (page == "demo"){
        document.getElementById("helpBlock").innerHTML = document.getElementById("helpBlock").innerHTML + "On this page, whichever student is using the computer picks their avatar and name on the screen. For this demonstration, you can choose whichever picture you want to get to the next step";
    }
}

function closeHelp(){
    document.getElementById("helpBlock").style.display="none";
}