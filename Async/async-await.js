// Async / Await => Async = makes a function return a promise
//                  Await = makes an async function wait for a promise

//      Allows you write asynchrnous code in a synchronous manner.
//      Async doesn't have resolve or reject parameters.
//      Everything after Await placed in an event queue.



async function walkTheDog() {
    
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

async function cleanTheKitchen() {
    
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

async function takeOutTrash() {
 
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

async function doChores() {
    
    try {
        const walkTheDogResult = await walkTheDog();
        console.log(walkTheDogResult);

        const cleanTheKitchenResult = await cleanTheKitchen();
        console.log(cleanTheKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores. Congratulations!!");
        }

    catch(error) {
        console.log("ERROR !!", error);
    }
}

doChores();

