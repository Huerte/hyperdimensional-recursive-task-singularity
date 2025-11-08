function walkdog(){
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const iswalkdog = true;

            if (walkdog){
                resolve("I walk the dog!");
            } else {
                reject("I forgot to walk the dog");
            }

        }, 1000)

    });
}

function cleanHouse(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const isclean = true;

            if (isclean){
                resolve("I clean the house");
            } else {
                reject("I forgot to clean the house!");
            }

        }, 800);
    });
}

function waterPlants(){
    return new Promise((resolve, reject) => {
        const iswatered = true;
        setTimeout(() => {
            if (iswatered){
                resolve("I water the plan!");
            } else {
                reject("I forgot to water the plant");
            }
        }, 500);
    });
}

async function doChores(){

    try{
        const result1 = await walkdog();
        console.log(result1)

        const result2 = await cleanHouse();
        console.log(result2);

        const result3 = await waterPlants();
        console.log(result3)

        
        setTimeout(() => {
            console.log("Finished all chores!");
        }, 1000);

    } catch(error) {
        console.error(error);
    }
    
}

doChores();