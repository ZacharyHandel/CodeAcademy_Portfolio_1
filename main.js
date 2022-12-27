const firstWord = "You";
const secondWord = ["will","are","can"];
const thirdWord = ["win", "succeed", "strong", "determined"];

function randomizeMessage(fW, sW, tW) {
    
   /* randomSW = sW[Math.floor(Math.random()*sW.length)];
    console.log(randomSW == "will");
    console.log(randomSW == "are");
    console.log(randomSW == "can");
    randomTW = tW[Math.floor(Math.random()*tW.length)];
    console.log(randomTW == "win!");
    console.log(randomTW == "succeed!");
    console.log(randomTW == "strong!");
    console.log(randomTW == "determined!");
    */

    //randomFW = fW[Math.floor(Math.random()*fW.length)];
    randomSW = sW[Math.floor(Math.random()*sW.length)];
    randomTW = tW[Math.floor(Math.random()*tW.length)];
    console.log("RandomSW: " + randomSW); 
    console.log("RandomTW BEFORE IF: ");
    console.log(randomTW);

    if(randomSW == "can" || randomSW == "will"){
        while(randomTW !== "succeed" && randomTW !== "win")
        {
        randomTW = tW[Math.floor(Math.random()*tW.length)];
        console.log("RandomTW INSIDE 1st IF: ");
        console.log(randomTW);
        }
    }
    else if(randomSW = "are")
    {
        while(randomTW !== "strong" && randomTW !== "determined")
        {
            randomTW = tW[Math.floor(Math.random()*tW.length)];
            console.log("RandomTW INSIDE 2nd IF: ");
            console.log(randomTW);
        }
    }
    console.log("RandomTW AFTER IF: ");
    console.log(randomTW);

    
    console.log(12);
    console.log(fW + " " + randomSW + " " + randomTW);
    console.log(13);
}

numOfTimes = 100;
randomizeMessage(firstWord, secondWord, thirdWord);

