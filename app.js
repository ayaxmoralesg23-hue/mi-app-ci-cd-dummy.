function saludar() {
  document.getElementById('resultado').textContent = '¡Hola desde CI/CD! 🎉';
}

function sumar(a, b) {
  return a + b;
}

// Obligatorio para Jest
module.exports = { sumar };
