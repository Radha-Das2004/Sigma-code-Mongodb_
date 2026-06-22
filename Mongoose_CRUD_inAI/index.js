const express =require('express');
const app = express();
const Chat= require("./models/chat");
// Views Start
const path = require('path');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Put and Delete
const methodOverride = require("method-override");
app.use(methodOverride('_method'));

//  Url cha data json format madhe gya sahthi
app.use(express.urlencoded({extended : true}));

// Public 
app.use(express.static(path.join(__dirname,"public")));

// Mongoose ADD START
const mongoose = require('mongoose');

main()
    .then(()=>{
        console.log("Connection  Successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Mongoose ADD END
app.get("/", (req, res) => {
    res.send("root is Working");
});

//  Index Route All Data Shows
app.get("/chats", async (req,res) => {
    let chats = await Chat.find();
    res.render("index.ejs", {chats});
});

//  CREATE A NEW CHATs
app.get("/chats/new", (req,res) =>{
    res.render("newChat.ejs");
})


app.post("/chats", (req,res) =>{
    let {from, to ,msg} = req.body;
    let newChat =new Chat({
        from : from, 
        to :to,
        msg : msg,
        created_at: new Date()
    });
    newChat.save()
            .then( res => console.log("Chat was saved"))
            .catch(err => console.log(err.errors));
    res.redirect("/chats"); 
});


// Edit Update 
app.get("/chats/:id/edit", async (req,res) =>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});

app.put('/chats/:id',  async (req,res) => {
    let { id } = req.params;
    let { msg : newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg : newMsg, updated_at: new Date() },
        {runValidators  :true , returnDocument: 'after'}
    );

    res.redirect('/chats');
});

// DELETE DESTROY 
app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let deleteChat =await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});



app.listen(8080, () => {
    console.log("Server is Listening on port 8080");
});
