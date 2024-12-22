var taskInput = document.getElementById("input")
var taskContainer = []

function addSiteName() {
    var taskInfo = taskInput.value
    if(taskInfo) {
        taskContainer.push(taskInfo)
        console.log(taskContainer);
    }
    else {
        window.alert("Task hhhhh")
    }
}
function diplayTask() {

    for(var i = 0; i < taskContainer.length ; i++) {

    
taskBox += `
<tr class="fw-normal">
                                        <td>1</td>
                                        <td>
                                            <span>${taskContainer[i]}</span>
                                        </td>
                                        <td>
                                            <a style="cursor: pointer;" class="update"><i
                                                    class="fas fa-pen-nib fa-lg text-warning me-3"></i></a>
                                        </td>
                                        <td>
                                            <a style="cursor: pointer;" class="delete"><i
                                                    class="fas fa-trash-alt fa-lg text-danger"></i></a>
                                        </td>
                                    </tr>
                                    `
                                }
                                document.getElementById("allTasks").innerHTML = taskBox
                                }
                                var x = 1
                                console.log(x);
                                x += 2
