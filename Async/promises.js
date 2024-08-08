// Promise = An object that manages asynchronous operations. 
//        Wrap a Promise Object around {asynchronous code}
//        " I promise to return a value "
//        PENDING -> RESOLVED or REJECTED
//        new Promise((resolve, reject) => { asynchronous code })


// DO these CHORES in ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH


function walkTheDog() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const dogWalked = true;

            if (dogWalked) {
            resolve("You walked the dog");
            } else {
                reject("You DID NOT walk the dog.")
            }}, 1800)
    })
}

function cleanTheKitchen() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = false;

            if (kitchenCleaned) {
            resolve("You cleaned the Kitchen")
            } else {
                reject("you DID NOT clean the kitchen")
            }
        }, 2000)
    })
}

function takeOutTrash() {
 
    return new Promise((resolve, reject) => {

        setTimeout(() => {
                
            const trashTaken = true;

            if (trashTaken) {
                resolve("You took out the trash")
            } else {
                reject("You DIDNOT Take the trash out")
            }
        }, 1500)
    })
}

walkTheDog().then(
    (value) => {

        console.log(value);
         return cleanTheKitchen()
         }).then(

            (value) => {

            console.log(value);
             return takeOutTrash()
             }).then(

                (value) => {
                    console.log(value); 
                    console.log("You completed all the tasks.")
                    }).catch(error => console.log("Error : " , error))



