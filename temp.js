const { promisify } = require('util');
const https = require('https');
const cb = () => console.log(data);
let getData = (cb) => https.get("https://ghoapi.azureedge.net/api/DIMENSION/COUNTRY/DimensionValues", (res)=> {
    let data = "";
    res.on("data", (d) => data+=d);
    res.on("end", () => cb(null, data));
});

// let promiseGetData = () => {
//     return new Promise((resolve, reject) => {
//         getData(res => {
//             resolve(res);
//         });
//     })
// };

promiseGetData = promisify(getData);

promiseGetData().then((data) => {
    console.log("Got data successfully", data);
})
.catch((err) => {
    console.error(err)
});



const array1 = [{name: "foo"}, {name: "bar"}, {name: "baaz"}];
const array2 = new Array(array1.length).fill({});
array2.forEach((obj, idx) => {
    obj.name = array1[idx].name;
    obj.position = idx;
    console.log(obj);
});

console.log(array1);
console.log(array2[0] === array2[1]);



const data = {
    person: {
        name: {
            firstName: "Kuldeep"
        }
    }
}

const {person: {name: {firstName}}} = data;
console.log(firstName);


// any one satisfies the condition
const checkFooBool = array1.some((obj) => obj.name === "foo");

readmeGenerator = {};
readmeGenerator.init = () => {
    this.kk = "ll";
}

readmeGenerator.printProperties = () => {
    console.log(this.kk);
}
readmeGenerator.init();
readmeGenerator.printProperties();

