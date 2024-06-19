$(document).ready(function () {
    setInterval(
        function () {
            $.ajax({
                type: "GET",
                url: "/getUser",
                success: function (response) {
                    window.localStorage.user = JSON.stringify(response.users);
                }
            })
        }, 2000);
});

function Login() {
    var username = document.getElementById("user").value;
    if (username == '')
        alert("User name is empty");
    var password = document.getElementById("pass").value;
    if (password == '')
        alert("Password is empty");
    var radio = document.getElementsByName("as");
    var as = "";
    if (radio[0].checked && radio[0].value != '') {
        as = "Admin";
    }
    else if (radio[1].checked && radio[1].value != '') {
        as = "Teacher";
    }
    else {
        alert("Choose 'Admin' or 'Teacher'!");
        chk = false;
    }
    let bool = false;
    let storedUsers = JSON.parse(window.localStorage.user);
    for (let i = 0; i < storedUsers.length; i++) {
        if (storedUsers[i].User_name == username && storedUsers[i].Password == password && storedUsers[i].Type_of_profile == as) {
            window.localStorage.IndexOfLogin = i;
            bool = true;
            const csrftoken = getCookie('csrftoken');
            $.ajax({
                type: 'POST',
                url: "/loginProfile",
                data: {
                    user: $('#user').val(),
                    pass: $('#pass').val(),
                    as: $('input[name="as"]:checked').val(),
                    csrfmiddlewaretoken: $('input[name="csrfmiddlewaretoken"]').val()
                },
                dataType: 'json',
                headers: { 'X-CSRFToken': csrftoken },
                success: function (response) {
                    alert(response.msg);
                    if (as == "Admin")
                        window.location.href = "http://127.0.0.1:8000/signup/Login.html/AdminHome.html";
                    else
                        window.location.href = "http://127.0.0.1:8000/signup/Login.html/TeacherPage.html";
                }
            });
            break;
        }
    }
    if (!bool) {
        alert("Incorrect user name or password, try again please!");
    }
};

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}