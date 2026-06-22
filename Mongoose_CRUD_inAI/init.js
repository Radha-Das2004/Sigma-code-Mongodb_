const mongoose = require('mongoose');
const Chat= require("./models/chat");

main()
    .then(()=>{
        console.log("Connection  Successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
        from: "Lalita",
        to: "Radha",
        msg: "Radhe Radhe! Kripa barsaye rakhna.",
        created_at: new Date(),
    },
    {
        from: "Vishakha",
        to: "Krishna",
        msg: "Shree Ji ki seva me hi param Anand hai.",
        created_at: new Date(),
    },
    {
        from: "Chitra",
        to: "Lalita",
        msg: "Aao, Vrindavan ki kunj galiyon me chalein.",
        created_at: new Date(),
    },
    {
        from: "Champaklata",
        to: "Vishakha",
        msg: "Shree Radha Raman Lal Ju ki jai ho!",
        created_at: new Date(),
    },
    {
        from: "Sudevi",
        to: "Radha",
        msg: "Aapki seva me hi mera poora jeevan beete.",
        created_at: new Date(),
    },
    {
        from: "Indulekha",
        to: "Krishna",
        msg: "Hey Govind! Apni bhakti ka daan dijiye.",
        created_at: new Date(),
    },
    {
        from: "Rangdevi",
        to: "Champaklata",
        msg: "Shree Hit Harivansh Mahaprabhu ki jai!",
        created_at: new Date(),
    },
    {
        from: "ShreehitRadha_dashi",
        to: "Radha",
        msg: "Jay jay Shree Hit Harivansh, Radhe Meri Swamini.",
        created_at: new Date(),
    },
    {
        from: "ShreeHitPrivadini",
        to: "ShreehitRadha_dashi",
        msg: "Nitya Vihar ki Chhavi sabse nyari hai.",
        created_at: new Date(),
    },
    {
        from: "Radha",
        to: "ShreeHitPrivadini",
        msg: "Shree Kunjbihari Shri Haridas, sada sahay font.",
        created_at: new Date(),
    }
];


Chat.insertMany(allchats);