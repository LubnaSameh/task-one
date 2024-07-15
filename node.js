//to run node "name of file"
// create node.js => ryan dahl and used by c++
// in file.json=>data array of objects
// engine in js => v8
// node -v  => check installed node version

// filter use to get many object have same conditions or delete

// 1- core modules=> built in nodeJS
//file system
// const fs = require("fs")
//Overwrites the file if it already exists.
// fs.writeFileSync("data1.txt", "lubnaSameh")

//appendFileSync => Appends data to the end of the file if it already exists.

// console.log(fs.readFileSync("data1.txt")) // data type= buffer
// fs.appendFileSync("data1.txt", " + lubna Sameh")

// console.log(fs.readFileSync("data1.txt").toString()) // turn buffer to string

/////////////////////////////////////////////////////

// const x=require("./allData.js")

// console.log(x.fname)
// console.log(x.fun(5,7))
//////////////////////////////////////////////////
// 2- NPM => Node package manager => creator is isaac z. schlueter

//outside  packages => step 1- basic) npm init -y

// step 2- option) npm i validator

// if file modules-node and validator deleted => npm i = installed => to retrieve file
// const validator = require("validator")

// console.log(validator.isEmail("lubna@gmail.com"))
///////////////////////
// i take from user obj and i turn it into json
// process.argv [0,1] =[url for  node installed, url for my file(node.js)]

// console.log(process.argv[2]) //lubna
//in terminal=> node node.js lubna

//1- npm in google
//2- npm init -y
//3- npm i yargs => 3l4an yfhm object in terminal, interactive command and parssing arguments
// to make sure packaged installed, open package.json

//                 key    value
// node node.js --fname="lubna"
// const yargs = require("yargs")
// console.log(yargs.argv)
//////
// yargs.command({
//     command:"add", // write add in terminal
//     describe:"to an item",
//     handler:()=>{ // when write add , show this sentence
//         console.log("u have already added an item")
//     }
// })

// // in terminal=> node node.js add or node node.js add lubna
// console.log(yargs.argv)

//////////
//const yargs = require("yargs")
// this code do, must write fname and lname cuz  => demandOption:true
// yargs.command({
//     command: "add", // write add in terminal
//     describe: "to an item",
//     builder: { // conditions
//         fname: {
//             describe: "first name",
//             demandOption: true, // = require
//             type: "string"
//         },
//         lname: {
//             describe: "last name",
//             demandOption: true, // = require
//             type: "string"
//         }
//     },
//     handler : () => { // when write add , show this sentence
//         console.log("u have already added an item")
//     }
// })

// // in terminal=>  node node.js add --fname="lubna" --lname="lubna"
// console.log(yargs.argv)

///////////////////////////////////////////////////////////////
const yargs = require("yargs")

//step 6
const data10 = require("./data10")

// step 7
yargs.command({
    command: "add", // write add in terminal
    describe: "to an item",
    builder: { // conditions
        fname: {
            describe: "first name",
            demandOption: true,// Make the argument required
            type: "string"//Specify the type of the argument
        },
        lname: {
            describe: "last name",
            demandOption: true, // = require
            type: "string"
        }
        // city not require so i didn`t in builder
    },

    handler: (x) => { // action // carry all data of object
        data10.addperson(x.id, x.fname, x.lname, x.city)// display from all object only fname and lname
        //node node.js add --fname="lubna" --lname="sameh" --id="2" --city="benha"
    }
})

yargs.command({
    command: "delete",
    describe: "delete an item",
    handler: (x) => { /// action
        data10.deleteData(x.id)
        //node node.js delete --id="2"
    }
})

yargs.command({
    command: "list",
    describe: "list data",
    handler: () => {
        data10.listData()

        //node node.js list
    }
})

yargs.command({
    command: "read",
    describe: "read an item",
    builder: {
        id: {
            describe: "this is id",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data10.readData(x.id)
        //node node.js read --id="1"
    }
})


// in terminal=> 
yargs.parse() // display only handler

//WHEN I ADD ANY COMMANDS LIKE A FNAME OR LNAME=> push , parameter , handler







