import { fromNtoElement } from './utils.js'

// eslint-disable-next-line no-undef
const worker = new Worker('worker.js', { type: 'module' })

const input = document.querySelector('input')
const text = document.querySelector('p')
const button = document.getElementById('chance-theme')

worker.onmessage = function (data) {
  console.log('Factorial data')
  console.log(data.data)
  text.innerHTML = `factorial ${data.data}`
  input.disabled = false
  input.focus()
}

console.log(button)

input.addEventListener('change', () => {
  console.log(input.value)
  // text.innerHTML = `factorial ${factorial(+input.value)}`
  factorial(+input.value)
})

button.addEventListener('click', () => {
  // alert('Chance theme')
  console.log('Hola')
  console.log(+input.value)
  const t = fromNtoElement(+input.value)
  console.log(t)
})

const factorial = async (fact) => {
  // let suma = 0

  // for (let i = 0; i < 1000000000000; i++) {
  //   suma += i
  // }

  // console.log('suma')
  // console.log(suma)
  console.log(`fact ${fact}`)
  worker.postMessage(`${fact}`)
  text.innerHTML = 'factorial cargando ...'
  input.disabled = true

  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     console.log(`Pass ${fact}`)
  //     resolve('ok')
  //   }, 1000)
  // })

  // if (fact === 0) {
  //   return 1;
  // }
  // if (fact === 1) {
  //   return 1;
  // }

  // return fact * factorial(fact - 1);
}
