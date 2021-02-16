function change(){

    let a = document.getElementById('uname').value;
    let b = document.getElementById('pass').value;
    if (a === "luka" && b === "luka") {
        window.location.href='/';

    }else{
        document.getElementById("pass").style.borderColor = "red";
        document.getElementById("uname").style.borderColor = "red";
    }

}




