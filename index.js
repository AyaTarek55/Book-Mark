var taskNameInput = document.getElementById("inputBookmarkName");
var taskUrlInput = document.querySelector(".bookmarkURL input");
var submitTaskBtn = document.getElementById("Submit");
var updateTaskBtn = document.getElementById("update");
var updatedIndex;
var taskContainer = [];

if (localStorage.getItem("bookmarks") !== null) {
    taskContainer = JSON.parse(localStorage.getItem("bookmarks"));
    displayTask();
}

function submitTask() {
    var siteName = taskNameInput.value.trim();
    var siteURL = taskUrlInput.value.trim();

    // التحقق من صحة البيانات
    if (siteName && siteURL) {
        var newBookmark = {
            name: siteName,
            url: siteURL,
        };
        taskContainer.push(newBookmark);
        localStorage.setItem("bookmarks", JSON.stringify(taskContainer));
        console.log(taskContainer);
        displayTask();
        taskNameInput.value = "";
        taskUrlInput.value = "";
    } else {
        alert("Please Enter The Book Info");
    }
}

function displayTask() {
    var taskBox = "";
        for (var i = 0; i < taskContainer.length; i++) {
            taskBox += `
                <tr class="fw-normal">
                    <td>${i + 1}</td>
                    <td><span>${taskContainer[i].name}</span></td>
                    <td>
                    <a href="${taskContainer[i].url}" target="_blank" class="btn btn-sm  " 
                    style="background-color: #8a9e23; color: #ffffff; border: #6e8018;">
                    <i class="fa-solid fa-eye" style="color: #ffffff;"></i>
                      Visit
                    </a>
                    </td>
                    <td>
                        <a style="cursor: pointer;" class="update" onclick="getTaskToUpdate(${i})">
                        </a>
                       
                        <button class="delete" onclick="deleteTask(${i})">
                        <i class="fas fa-trash-alt fa-lg style="color: #ffffff"></i> Delete
                        </button>
                    </td>
                </tr>
            `;
        }
        document.getElementById("allTasks").innerHTML = taskBox;
    }


function deleteTask(index) {
    taskContainer.splice(index, 1);

    localStorage.setItem("bookmarks", JSON.stringify(taskContainer));

    displayTask();
}

