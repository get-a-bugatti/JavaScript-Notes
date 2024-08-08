function task1(callback) {
    setTimeout(() => {
            console.log("Task 1 completed");
            callback();
    }, 1500)
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 completed");
        callback();
    }, 2000)
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 completed");
        callback();
    }, 500)
}

function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 completed");
        callback();
    }, 1800)
}

function task5(callback) {
    setTimeout(() => {
        console.log("Task 5 completed");
        callback();
    }, 1000)
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    console.log("All Tasks Completed");
                })                
            })
        })
    })
})
