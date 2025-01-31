// Escritura en localstorage

localStorage.setItem('nombre', 'victor')
localStorage.setItem('apellido', 'villazon')

const nombreDesdeLocalstorage = localStorage.getItem('nombre')

console.log(nombreDesdeLocalstorage)

localStorage.removeItem('fruta')


localStorage.setItem('curso', JSON.stringify({ name: 'Lógica', nota: 20 }))

console.log(localStorage.getItem('curso'))
console.log(JSON.parse(localStorage.getItem('curso')))