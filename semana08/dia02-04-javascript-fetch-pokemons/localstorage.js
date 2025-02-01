// Escritura en localstorage

// localStorage.setItem('nombre', 'victor')
// localStorage.setItem('apellido', 'villazon')

const nombreDesdeLocalstorage = localStorage.getItem('nombre')

console.log(nombreDesdeLocalstorage)

localStorage.removeItem('fruta')


// localStorage.setItem('curso', JSON.stringify({ name: 'Lógica', nota: 20 }))

console.log(localStorage.getItem('curso'))
console.log(JSON.parse(localStorage.getItem('curso')))

// sessionStorage - Esta api es más volátil se pierden cuando usuario cierra el navegador, cierra la pestaña, reinicia su computador.