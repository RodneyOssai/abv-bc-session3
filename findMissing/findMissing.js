module.exports = {
findMissing: (a1, a2) => { 

     let testerArray = [];
     let  diff;

    for (let i = 0; i < a1.length; i++) { //Loop through a1 and making testerArray true in each position 
        testerArray[a1[i]] = true;
    }

    for (let i = 0; i < a2.length; i++) { // Loop through a2 ,Any position that is true in testerArray represents a value in a1 
        if (testerArray[a2[i]]) {  // If a position in the testerArray is true , delete it 
            delete testerArray[a2[i]];
        } else {
            testerArray[a2[i]] = true; //Afer deleting , make any remaining position true because it represents the value in a2 that is not in a1
        }
    }

    for (let j in testerArray) { //Loop through testerArray array and push the value of the position that is true into diff.
        diff = parseInt(j); 
    }

      if (typeof diff === 'undefined'){ 
      diff = 0;
    }
  return diff;

}

};