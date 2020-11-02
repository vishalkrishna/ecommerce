function log() {
    if ($("#e1").val() == '') {
        alert("please enter email id");
    } else {
        if ($("#e1").val() == localStorage.getItem("email"))  {
            if ($("#p1").val( )=='') {
                alert("please enter password");
            }else{
                if($("#p1").val()==localStorage.getItem("password")){
                    alert("Login successfull");
                    window.location.href="welcome.html";
                }else{
                    alert("invalid password")
                }
            }
        }else{
            alert("invalid email id");
        }
        
    }
}

function submi(){
    if($("t1").val()==''|| $("#t2").val()=='' || $("#t3").val()==''){
        alert("please enter a valid name");
    }else{
        if($("#se1").val()==''){
            alert("please enter valid email id");
        }else{
            if($("#sp1").val()==''||$("#sp2").val()==''){
                alert("password required");
            }else{
                    if($("#sp1").val()!=$("#sp2").val()){
                        alert("password does not match");
                    }else{
                        localStorage.setItem("email",$("#se1").val());
                        localStorage.setItem("password",$("#sp1").val());
                        alert("signup successfull");
                        window.location.href="login.html";
                    }
                }
            }
        }
    }
