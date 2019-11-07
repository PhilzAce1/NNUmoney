require('dotenv').config()
import {login, getBal} from './lib/login';
import cron from 'node-cron'
import express from 'express';
const app =express()

// import {sharePos t} from './lib/sharePost';
import db from './lib/db'
import { sharePost } from './lib/sharePost';
const go = async () => {
   try {
   const users = db.get('user').value()
  for (let user of users) {  
      await login(`${user.username}`, `${user.password}`)
  
    } 
   } catch (error) {
    console.error('Login Failed \n\n', error)   
    process.exit(1)

   }
}
const goShare= async () => {
  try {
  const users = db.get('user').value()
  for (let user of users) {  
      await sharePost(`${user.username}`, `${user.password}`,`${user.fbu}`,`${user.fbp}`)
    }
  } catch (error) {
      console.error('Login Failed \n\n', error)   
      process.exit(0)
    }
}

app.get("/",async (req, res) => {
  console.log('scrapping')
try {
  // res.send('working');
   await go()
  //  res.redirect('/done');
  res.send('something')
} catch (error) {
  res.status(400).json({
    message:error
  }).send('did not work oooo ... ');
}
});

// app.post("/user", async(req, res) => {
//   const username = req.body.username
//   const password = req.body.password
//   const addUser = async(username, password) => {
//     return (
//       db.get('user')
//     .push({ username, password})
//     .write()  
//     )
//   }
//   try {
//     await addUser(username, password)

//   } catch (error) {
//     res.send("User created ");

//   }
// });
// app.get("/lazy", async(req, res) => {
//   res.send('You are lazy ooo ... instead of you to do it one by one ... lol') 
//   await go()

// });

// app.get("/getbalance", async (req, res) => {
//   let bal = await getBalit()
//   res.send(bal);
// });

app.get("/done", (req, res) => {
  res.send('working ooo ')
});
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
 
// go()