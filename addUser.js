import {sharePost} from './lib/sharePost';
import db from './lib/db'
const addUser = (username, password) => {
   return (
     db.get('user')
   .push({ username, password})
   .write()  
   )
 }

addUser('whittingtondavid3@gmail.com','12345678')