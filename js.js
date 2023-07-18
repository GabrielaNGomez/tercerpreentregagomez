function agregarAlCarrito() {
    const productosSelect = document.getElementById('productos');
    const productoSeleccionado = productosSelect.value;
    const nombreProducto = productosSelect.options[productosSelect.selectedIndex].text;
  
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  

    const productoExistente = carrito.find((producto) => producto.id === productoSeleccionado);
  
    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      carrito.push({
        id: productoSeleccionado,
        nombre: nombreProducto,
        cantidad: 1
      });
    }
  
    localStorage.setItem('carrito', JSON.stringify(carrito));
  
    actualizarCarritoEnDOM();
  }
  

  function actualizarCarritoEnDOM() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoElement = document.getElementById('carrito');
  
    carritoElement.innerHTML = '';
  
    carrito.forEach((producto) => {
      const li = document.createElement('li');
      li.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad}`;
      carritoElement.appendChild(li);
    });
  }
  
  const botonAgregarAlCarrito = document.getElementById('agregarAlCarrito');
  botonAgregarAlCarrito.addEventListener('click', agregarAlCarrito);
  

  actualizarCarritoEnDOM();
  