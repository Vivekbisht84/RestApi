const express = require("express");
const app = express();
 
app.use(express.json())

const path = require("path");
const port = process.env.PORT || 3000;

//json data

let userList = [
  {
    id :1,
    name: "vivek",
    age: 23,
    status: "active",
  },
  {
    id:2,
    name: "Anuj",
    age: 25,
    status: "inactive",
  },

  {
    id:3,
    name: "Mayur",
    age: 23,
    status: "active",
  },
];

app.get("/users", (req, res) => {
  //res.send("hello world");
  res.status(200).json(userList);
  //console.log(userList)
});

//creating or adding elements to the database
app.post("/users", (req, res) => {
  // grab the data send by client
  //add data to userlist
  // return new list
  const newUser = req.body; // if we want to grab the whole data
    userList.push(newUser) // adding the new data
    res.json(userList)

});

//update the user or the value
app.put("/users" , (req,res)=>{
    // grab the new name
    //loop through list and update the names
    //return the new list

    const newName = req.body.newName;

    for(let i = 0 ; i < userList.length ;i++){
        userList[i].name = newName;
    }
    res.json(userList);

});

//delete the user
app.delete("/users/:id" , (req,res)=>{
    //Get the id
    //delete the user with id
    //return new list
    const id = req.params.id;
    const foundId = false;
    for(let i = 0 ; i< userList.length ; i++){
        if(userList[i].id == id){
            userList.splice(i,1) // i represents the no of element we want to remove
            foundId = true;
        }
    }
    //handling the error
    if(!foundId){
        res.status(404).json({error : "user id not found"})
    }
    else{
        res.json(userList);

    }

})

app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
