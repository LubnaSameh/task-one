// put anything from user in file
const fs = require("fs")

const addperson = (id, fname, lname, city) => {

    // step 1=> b load or read data w turn it into json
    const allData = loadInfo() // carry data and is object

    const duplicatedData = allData.filter((obj) => { // bdawr 3 haga dmn mgmo3t hagat
        return obj.id == id // yrg3 data elly repeated
    })

    if (duplicatedData.length == 0) { // lw mfe4 data repeated

        // step 2=>  turn json into obj for accessing on it
        // step 3=> add or any method 
        allData.push({
            id: id,
            fname: fname,
            lname: lname,
            city: city,

        })
        savaAlldata(allData)
    }
    else {
        console.log("error repeated data")
    }
    // step 4=> save data in file

}

// step 1=> b load or read data w turn it into json
const loadInfo = () => {
    try {
        const dataJson = fs.readFileSync("data10.json").toString()

        // step 2=>  turn json into obj for accessing on it
        return JSON.parse(dataJson)
    }
    // create empty file
    catch {
        return []
    }
}

// step 4=> save data in file , must again turn object to json
const savaAlldata = (allData) => {
    const saveAllDataJson = JSON.stringify(allData)
    fs.writeFileSync("data10.json", saveAllDataJson)

}

// to delete data, must load again data , access and save data
const deleteData = (id) => {
    const allData = loadInfo()

    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    })

    savaAlldata(dataToKeep) // return allData without item which deleted
}


//read data
const readData = (id) => {
    const allData = loadInfo();

    const itemNeeded = allData.find((obj) => obj.id == id);

    if (itemNeeded) {
        console.log(itemNeeded);
    } else {
        console.log("Not found");
    }
};

// read specialy fields or column from all data
const listData = () => {
    const allData = loadInfo();

    allData.forEach((obj) => {
        console.log(obj.fname, obj.city)
    });
}


// step 5
module.exports = {
    addperson,
    deleteData,
    readData,
    listData
}