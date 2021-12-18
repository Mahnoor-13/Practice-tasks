import React from "react";

const Task1 = () => {
  // Task 1: Update second index object name
  // let myArray = [
  //   { name: "anc", no: 2 },
  //   { name: "bbb", no: 3 },
  //   { name: "ccc", no: 4 },
  // ];
  // const objIndex = myArray.findIndex((obj) => obj.no == 3);

  // console.log("Before update: ", myArray[objIndex]);

  // myArray[objIndex].name = "Mahnoor";

  // console.log("After update: ", myArray[objIndex]);

  // Task 2: Understand MultiDimentional Array concept and write a example with MultiDimentional Array

  // const array = [
  //   ["apple", "mango", "orange"],
  //   ["Winter", "Summer", "Fog"]
  // ]

  // console.log(array, "multi dimentional arrays");

  // Task 3: write below result with for loops

  for (let i = 1; i <= 5; i++) {
    for(let j = 1; j<=i; j++){
      console.log(j);
      if(j==i) {
        continue;
      }
      else{
        console.log('');
      }
    // console.log(<br />);
    }
  }

  return (
    <div>
      <h1>Weekly Task 1</h1>
    </div>
  );
};

export default Task1;
