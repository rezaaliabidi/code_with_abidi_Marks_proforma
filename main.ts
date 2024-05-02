#! /usr/bin/env node
//Generate Marks Proforma

import inquirer from "inquirer";
import chalk from "chalk";

console.log(`\n\t\t\tGENERATIVE AI CERTIFICATION FOR THE YEAR 2024-25\n`);
console.log(`\n\t\t\t________________________________________________\n`);
console.log(`\t\t\t\t\tConsolidated Marks Proforma \n`);
console.log(`\t\t\t____________________________________________________`);

//Roll Number

let studentid = await inquirer.prompt({
    type: "number",
    name: "rollnum",
    message:"Please enter your Roll number"
} )


let rollNum:number = studentid.rollnum

if(rollNum === 12345){

}

    

//Enter Marks for each

let marks = await inquirer.prompt([
{
    name:"TypeScript",
    type: "number",
    message: "Please enter your Typescript Marks"
},{ 
     name:"Nodejs",
     type: "number",
     message:"Please enter your Node.js Marks"

},{
    name:"Nextjs",
    type: "number",
    message:"Please enter your Next.js Marks"
}
])

//decalare variables (subject wise)

let tsc:number = marks.TypeScript
let node:number = marks.Nodejs
let next:number = marks.Nextjs



//Calculate percentage

let totalMarks:number = 300
let obtainMarks:number = tsc + node + next
let percentage = ((obtainMarks/totalMarks)*100)
let perc = Math.floor(percentage)

    //  grade based on percentage

    let grade = "";
    let remarks = "";
    if (perc >= 90) {
        grade = "A+";
        remarks = "Outstanding";
    } else if (perc >= 80) {
        grade = "A";
        remarks = "Excellent";
    } else if (perc >= 70) {
        grade = "B";
        remarks = "well done";
    } else if (perc >= 60) {
        grade = "C";
        remarks = "Good";
    } else if (perc >= 50) {
        grade = "D";
        remarks = "Keep it up";
    } else {

        grade = "F";
        remarks = "Need to work hard";
        
    }
    

console.log(studentid);
console.log("Name: Ali Raza");
console.log(`Typescript marks = ${tsc} out of 100`);
console.log(`Node.js marks = ${node} out of 100`);
console.log(`Next.js marks = ${next} out of 100`);


console.log(`Obtain Marks =  ${obtainMarks} Total Marks = ${totalMarks}`);
console.log(`Percentage = ${perc} %`);
console.log(`Grade: ${grade}`);
console.log(`Remarks: ${remarks}`);












    

