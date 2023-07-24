import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import './topics/01-basic-types.ts'
// import './topics/02-object-interfaces.ts'
// import './topics/03-functions.ts'
// import './topics/04-homework-types.ts'
import './topics/05-basic-desestructuring.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1> 
    Hello world!!
    </h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
console.log('hola mundo')
