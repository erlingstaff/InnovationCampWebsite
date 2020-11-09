function checkbox() {

    if (document.getElementById("check").checked == true){
        document.getElementById("pw").type="text";
    }
    else{
        document.getElementById("pw").type="password";
    }
}