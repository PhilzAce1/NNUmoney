import {login} from './lib/login';
import cron from 'node-cron'

// import {sharePost} from './lib/sharePost';
import db from './lib/db'

const go = async () => {
   try {
   const users = db.get('user').value()
  for (let user of users) {  
      await login(`${user.username}`, `${user.password}`)
  
    }
//     // await sharePost()
//     process.exit()
   } catch (error) {
    console.error('Login Failed \n\n', error)   
    process.exit(0)

   }
}

go()
 
var task = cron.schedule('* * */5 * * *', () =>  {
  go()
});
 