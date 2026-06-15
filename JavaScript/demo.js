function fetchUserName() {
    return new Promise((resolve, reject) => {
        const userName = "shanmukha";
        resolve(userName);
    })
}
function fetchUserDetails(userName) {
    const user = {
        name: "M.Shanmukha",
        roll: "23B81A6646"
    };
    return new Promise((resolve, reject) => {
        resolve(user);
    })
}

function displayDetails(userDetails){
    return new Promise((resolve,reject)=>{
        console.log(userDetails.name);
        console.log(userDetails.roll);
        resolve("Success");
    })
}
fetchUserName(1)
    .then(response => {
        console.log(response);
        return fetchUserDetails(response);
    }).then(result => {
        console.log(result);
        return displayDetails(result);
    }).then((output)=>console.log(output))


arr=[1,2,3,4,5]
arr.map((ele)=>console.log(ele))