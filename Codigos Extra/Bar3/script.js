function marcarSeccion(idSeccion) {
    const seccion = document.getElementById(idSeccion);
    seccion.classList.add('seccion-activa');
  }
  
  function desmarcarSeccion(idSeccion) {
    const seccion = document.getElementById(idSeccion);
    seccion.classList.remove('seccion-activa');
  }
  