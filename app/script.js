const preguntas = [
    "Sensación de no vaciar completamente la vejiga al orinar",
    "Volver a orinar en las dos horas siguientes después de haber orinado",
    "Parar y comenzar varias veces al orinar",
    "Dificultad para aguantarse las ganas de orinar",
    "Chorro de orina poco fuerte",
    "Hacer fuerza para comenzar a orinar",
    "Levantarse para orinar durante la noche"
  ];
  
  function generarOpciones() {
    let opciones = '';
    for (let i = 0; i <= 5; i++) {
      opciones += `<option value="${i}">${i}</option>`;
    }
    return opciones;
  }
  
  function crearFormulario() {
    const form = document.getElementById('ipssForm');
    preguntas.forEach((pregunta, index) => {
      const preguntaHTML = `
        <label for="pregunta${index + 1}">${pregunta}</label>
        <select id="pregunta${index + 1}" name="pregunta${index + 1}">
          ${generarOpciones()}
        </select><br>
      `;
      form.innerHTML += preguntaHTML;
    });
  }
  
  function calcularPuntaje() {
    const respuestas = [];
    let puntajeTotal = 0;
  
    for (let i = 0; i < preguntas.length; i++) {
      const respuesta = parseInt(document.getElementById(`pregunta${i + 1}`).value);
      respuestas.push(respuesta);
      puntajeTotal += respuesta;
    }
  
    const resultado = document.getElementById('resultado');
    if (puntajeTotal >= 0 && puntajeTotal <= 7) {
      resultado.textContent = "Bajo riesgo de cáncer de próstata.";
    } else if (puntajeTotal >= 8 && puntajeTotal <= 19) {
      resultado.textContent = "Riesgo medio de cáncer de próstata. Se recomienda consultar a un médico.";
    } else {
      resultado.textContent = "Alto riesgo de cáncer de próstata. Es crucial consultar a un médico de inmediato.";
    }
  }
  
  crearFormulario();
  