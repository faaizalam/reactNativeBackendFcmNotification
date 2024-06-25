const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const {getMessaging}=require("firebase-admin/messaging")
const bodyParser =require("body-parser")
const cors =require("cors")

const app = express();
console.log("ll")
app.use(bodyParser.json());
app.use(cors());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.post("/notify",(req,res)=>{
  console.log("hi")
  let message={
    notification:{
      title:"i m best",
      body:"sent a friend requets"
    },
   token:"fG5ikgd-SuiXlmQf3-5eXS:APA91bGBiMjzjeA-HYdKlluXhD11BZzrq-UqINe5UoVS3cyHzcZfy8IOJe6R3lTSAFRxgNBRPCrlgEsraNPTvoomxSWw-nLKALlPzCzsPLpu_f7b7hTp0Ar6t0Uj1AGnyP1WzmAdaUkO"
  }

  getMessaging().send(message).then(()=>{
    res.status(200).send("sucessfully")

  }).catch((err)=>{
    res.status(400).send(err)
  })

})


app.listen(5000, () => {
    console.log("http://localhost:5000")
});
