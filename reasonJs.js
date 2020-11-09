var number = 0;

function clicked(tagNr){
    if (tagNr.style.border == "1px solid black"){
        tagNr.style.border = "";
        number = number-1;
    }
    else{
        tagNr.style.border = "1px solid black";
        number = number+1;
    }
    if (number > 0 ){
        document.getElementById("pwBtn2").style.display="block";
    }
    else{
        document.getElementById("pwBtn2").style.display="none";
    }
}