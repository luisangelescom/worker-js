/* eslint-disable no-undef */

import { fromNtoElement } from './utils.js'

onmessage = function (message) {
  console.log('message')
  console.log(message)
  // const fac = factorialWorker(+message.data)
  const suma = fromNtoElement(+message.data)
  console.log('suma')
  // console.log(suma)
  postMessage(suma)
}

// const factorialWorker = (fact) => {
//   if (fact === 0) {
//     return 1
//   }
//   if (fact === 1) {
//     return 1
//   }

//   return fact * factorialWorker(fact - 1)
// }
