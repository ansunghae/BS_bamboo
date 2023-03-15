var register = document.getElementById('register');
register.addEventListener('click', function() {
    var user_Password = document.getElementById('user_Password').value;
    var Password_Check = document.getElementById('Password_Check').value;
    var user_ID = document.getElementsByClassName('user_ID')[0].value;
    var user_email = document.getElementById('user_email').value;
    if(user_Password.length < 7) {
        alert("비밀번호는 7자리 이상이어야 합니다.");
        return false;
    }
    if (user_Password != Password_Check) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    } else {
        $.ajax({
            url : "/register",
            type : "POST",
            data : {
                pw : user_Password,
                id : user_ID,
                email : user_email
            },
            success : function (data) {
                if (data === "중복ID"){
                    alert("이미 존재하는 아이디 입니다.");
                } else if(data === "성공") {
                    alert("회원가입이 정상적으로 완료되었습니다.");
                }
            }
        })
    }});