$(document).ready(function () {
    setInterval(
        function () {
            $.ajax({
                type: "GET",
                url: "/getUser",
                success: function (response) {
                    user = response.users;
                    var li = document.querySelector(".wel");
                    var li2 = document.querySelector(".sign");
                    var log = false;
                    for (let i = 0; i < user.length; i++) {
                        if (user[i].Login) {
                            li.innerHTML = `${user[i].User_name}`;
                            li2.innerHTML = "Sign out";
                            log = true;
                            break;
                        }
                    }
                    if (!log) {
                        li.innerHTML = "Login";
                        li2.innerHTML = "Sign up";
                    }
                }
            }), 5000,
            $.ajax({
                type: "GET",
                url: "/getTask",
                success: function (response) {
                    var Tasks = response.tasks;
                    Tasks.forEach(task => {
                        var t = document.getElementById(`t${task.TaskID}`);
                        if (task.Complete == false && !t) {
                            var parent = document.querySelector(".ava_tasks");
                            var NewTask = document.createElement("div");
                            NewTask.className = "task";
                            NewTask.id = `t${task.TaskID}`;
                            NewTask.innerHTML = `
                            <h4>${task.Title}${task.TaskID}</h4>
                            <p>${task.Description}</p>`;
                            parent.appendChild(NewTask);
                        }
                        else if (task.Complete == true && !t) {
                            var parent = document.querySelector(".com_tasks");
                            var NewTask = document.createElement("div");
                            NewTask.className = "task";
                            NewTask.id = `t${task.TaskID}`;
                            NewTask.innerHTML = `
                            <h4>${task.Title}${task.TaskID}</h4>
                            <p>${task.Description}</p>`;
                            parent.appendChild(NewTask);
                        }
                    });
                }
            })
        }, 1000)
});