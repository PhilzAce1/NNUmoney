require('dotenv').config()
import {login, getBal} from './lib/login';


// import {sharePos t} from './lib/sharePost';
import db from './lib/db'
import { sharePost } from './lib/sharePost';
const go = async () => {
   try{
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


go()
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
