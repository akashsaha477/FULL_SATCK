const allUsers=[
    {
        firstname: "Akash",
        gender: "Male",
        age: "21"
    },
    {
        firstname: "Swapnil",
        gender: "Male",
        age: "22"
    },
    {
        firstname: "Shouvik",
        gender: "Male",
        age: "23"
    },
    {
        firstname: "Prapti",
        gender: "Female",
        age: "25"
    }

]

for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="Male"){
        console.log(allUsers[i]["firstname"])
    }
}