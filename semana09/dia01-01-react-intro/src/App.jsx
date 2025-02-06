// COMPONENTE USANDO ARROW FUNCTION

// const App = () => {
//   return (
//     <h1>Hola React (JSX)</h1>
//   )
// }

// export default App // Exportación no nombrada

// COMPONENTE USANDO FUNCTION

// function App() {
//   return (
//     <h1>Hola React (JSX)</h1>
//   )
// }

// export default App // Exportación no nombrada


// COMPONENTE USANDO MULTIPLES LÍNEAS + FRAGMENT

// function App() {
//   return (
//     <>
//       <h1>Hola React (JSX)</h1>
//       <p>texto descriptivo</p>
//     </>
//   )
// }

// export default App // Exportación no nombrada

// EXTENSIÓN NECESARIAPARA USAR REACT EN VSCODE

// ES7+ React/Redux/React-Native snippets
// https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

// SNIPPETS PARA CREAR COMPONENTES

// rafce o rfc

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

// ANIDANDO COMPONENTES DENTRO DE OTROS

// function ComponenteSaludo() {
//   return <h4>Hola Alumnos</h4>
// }

// function ComponenteDespedida() {
//   return <h4>Adios Alumnos</h4>
// }

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>

//       <ComponenteSaludo />
//       <ComponenteDespedida />
//     </>
//   )
// }

// export default App

// IMPORTANDO COMPONENTES EXTERNOS Y USANDO EXPRESIONES CON JSX

import { ComponenteSaludo } from "./components/ComponenteSaludo"
import { ComponenteDespedida } from "./components/ComponenteDespedida"
import { LISTA_DE_FRUTAS, EDAD } from "./components/frutas"

const App = () => {
  const nombre = 'Victor'

  // Comentario en Reac dentro del cuerpo de la función

  /* Otro comentario */

  return (
    <>
      <h1>Hola React!</h1>
      <p>Estoy en el bootcamp!</p>

      {1 + 2 + 9 ** 2}
      {`Hola ${nombre}`}

      {LISTA_DE_FRUTAS}

      {EDAD}

      {/* Comentario en React dentro de JSX */}

      <ComponenteSaludo />
      <ComponenteDespedida />
    </>
  )
}

export default App