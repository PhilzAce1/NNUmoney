// import {sharePost} from './lib/sharePost';

// const go = async() => {
//   try {
//     await sharePost()
//   } catch (error) {
//     console.log(error)
//   }
// }

// go()

// console.log((isPalindrome = (word) => (((word.split('').reverse().join('').toLowerCase()) === (word.toLowerCase())))
// )('wow'))

// const dummy = () => {let feeback ="Naza is a girl" ; return feeback}
// console.log(dummy())
const genericFunction = () => {
  let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
  let [firstLang, secondLang, ...otherLanguages] = languages; //otherLanguages will be equal to ['Java', 'C#', 'C++'] 
  return `First language is ${firstLang} and the second is ${secondLang}. The rest are ${otherLanguages}`}
console.log(genericFunction());
