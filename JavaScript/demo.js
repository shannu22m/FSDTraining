function fetchUserName(){
    return new Promise((resolve,reject)=>{
        const userName = "shanmukha";
        resolve(userName);
    })
}
function fetchUserDetails(userName){
    const user={
        name:"M.Shanmukha",
        roll:"23B81A6646"
    };
    return new Promise((resolve,reject)=>{
        resolve(user);
    })
}
fetchUserName(1)
.then(response=>{
    console.log(response);
    return fetchUserDetails(response);
}).then(result=>console.log(result))
.catch(error=>console.log(error));