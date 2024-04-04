<script setup>
/*

CREACIÓN PLAN DOCENTE

*/
import { ref } from 'vue';
//Enrutador para cambiar de página
import { useRouter } from 'vue-router';

/*Función para mostrar una ventana emergente de Windows al usuario y preguntar si está seguro del redireccionamiento*/
function InicioMensaje() {
  const confirmacion = window.confirm('¿Estás seguro de que quieres volver al inicio de la página?');
  if (confirmacion) {
    // PONER LA RUTA DEL CODIGO DEL INICIO DE LA PÁGINA
    window.location.href = '/';
  }
}
/*Función para el botón de confirmar, muestra una ventana de windows para que el usuario sepa que ya va a enviar
la confirmación del plan docente creado*/
function confirmar() {
  // PONER LA RUTA DEL CODIGO DE LA LISTA DE PLANES REALIZADOS O MIRAR A DONDE REDIRIGIR
  const confirmacion = window.confirm('Vas a confirmar el plan docente creado ¿Estas seguro de guardarlo?');
  if (confirmacion) {
    window.location.href = '/';
  }
}
/*Función para colsultar en la base de datos el numero de cedula o codigo digitado 
y si está muestre el nombre y apellido correspondiente*/
//Provisionalmente mientras miro cómo se conecta a una API: MIRAR CÓMO SE CONECTA LA BD
function buscarEnBaseDeDatos(cedula) {
  if (cedula == '1013100917' ) {
    return 'Juliana Andrea Caicedo Avila';
  } else if (cedula == '52442042') {
    return 'Liliana Avila Jimenez';
  } else if (cedula == '1000708037') {
    return 'Carolina Cifuentes Ulloa';
  } else if (cedula == '1000065202') {
    return 'Andrea Martin Moreno';
  } else {
    return 'No se encontró la cédula y/o código digitado';
  }
}
/*Se crea una variable vacia para almacenar lo que se digito en el HTML, se crea una función para
llamar la función que interactua con la BD se le pasa el valor digitado y muestra en un
 componente la respuesta de la consulta */
const nombreDocente = ref('');
function buscarDocente() {
  const nombre = buscarEnBaseDeDatos(nombreDocente.value);
  nombreDocente.value = nombre;
}
//Se crea el arreglo para almacenar las nuevas filas y una variable para guardar la entrada en la salida de la tabla
const filas = ref([]);
const CodigoDigitado = ref('');
//Se crea la funcion para agregar las filas
function agregarFila() {
  // Obtener el valor de CodigoDigitado
  const codigo = CodigoDigitado.value.trim();
  //Se crean los condicionales para agregar las filas y que no se repitan los códigos digitados
  if (codigo) {
    // Verificar si el código ya existe en alguna fila
    if (filas.value.some(fila => fila.espacioCodigo == codigo)) {
      alert('Este código ya ha sido ingresado.');
    } else {
      // Agregar una nueva fila con el código ingresado
      filas.value.push({
        espacioCodigo: codigo,
        espacioFuncion: '',
        espacioAccionPrincipal: '',
        espacioEntregable: ''
      });
      // Limpiar el campo CodigoDigitado después de agregar la fila
      CodigoDigitado.value = '';
    }
  } else {
    // Mostrar un mensaje de error sino se ingreso nada
    alert('Por favor, ingresa un código válido.');
  }
}
// Función para eliminar una fila 
function eliminarFila(index) {
  // Elimina la fila del arreglo de filas
  filas.value.splice(index, 1);
}
</script>


<!-- Empieza HTML: lo que el usuario puede ver  -->


<template>
  <RouterView></RouterView>

  <!-- Muestra el logo de la universidad-->
  <div>
    <img src="C:\Users\Juliana\OneDrive\Escritorio\Adelanto\PracticaAplicada\src\Img.logoPoli.webp" class="logo"
      alt="logo Poli" />
  </div>
  <!-- Es el botón de la confirmación del plan docente-->
  <nav class="botonConfirmacion">
    <button type="button" @click="confirmar()">Confirmar</button>
  </nav>
  <!-- Son los text para indicar los elementos del formato-->
  <div class="text">
    <span class="textNombre">Nombre</span>
    <span class="textCC">Código</span>
    <span class="textCargo">Cargo</span>
    <span class="textHorasDirectas">Horas directas</span>
    <span class="textHorasPreparacion">Horas preparación</span>
    <span class="textHorasLabor">Horas labor</span>
  </div>
  <!-- Es una especie de menú que redirige al inicio de la página y muestra que estamos en la sección de plan docente-->
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#" @click="InicioMensaje()">Inicio</a></li>
      <li class="breadcrumb-item"><a href="#">Crear Plan docente</a></li>
    </ol>
  </nav>
  <!-- Es la linea separadora para poder ponerle color a la parte superior de la página -->
  <div class="LineaSeparadora"></div>
  <!-- Son las entradas se tomo en forma de formato -->
  <div class="input-group mb-3 ">
    <input v-model="nombreDocente" id="EntradaCedula" type="number" class="form-control"
      placeholder="Digita: cédula/código" aria-label="Recipient's username" aria-describedby="basic-addon2">
    <!-- Es el botón de buscar docente -->
    <div class="input-group-append botonBuscarCedula">
      <button type="button" @click="buscarDocente()" class="btn btn-outline-secondary">Buscar</button>
    </div>
  </div>
  <!-- Es el formato de salida para el anterior -->
  <div class="input-group mb-3">
    <input :value="nombreDocente" id="SalidaNombre" type="text" class="form-control" placeholder="Nombre del docente"
      aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
  </div>
  <!-- Es el formato para indicar la caja de cargo -->
  <div class="input-group mb-3">
    <input :value="Cargo" id="Cargo" type="text" class="form-control" placeholder="Cargo"
      aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
  </div>
  <!-- Es el formato para indicar la caja de Horas directas -->
  <div class="input-group mb-3 ">
    <input v-model="HorasDirectas" id="HorasDirectas" type="number" class="form-control" placeholder="Horas directas"
      aria-label="Recipient's username" aria-describedby="basic-addon2">
  </div>
  <!-- Es el formato para indicar la caja de Horas Preparación -->
  <div class="input-group mb-3 ">
    <input v-model="HorasPreparacion" id="HorasPreparacion" type="number" class="form-control"
      placeholder="Horas preparación" aria-label="Recipient's username" aria-describedby="basic-addon2">
  </div>
  <!-- Es el formato para indicar la caja de Horas labor -->
  <div class="input-group mb-3 ">
    <input v-model="HorasLabor" id="HorasLabor" type="number" class="form-control" placeholder="Horas labor"
      aria-label="Recipient's username" aria-describedby="basic-addon2">
  </div>
  <!--Es el txt que esta en la mitad de la pantalla-->
  <div class="text">
    <span class="textV">Visulización plan docente actual: </span>
  </div>
  <!-- Es el contenedot tabla para almacenar los codigo asignsados a cada plan docente -->
  <div class="tabla-container">
    <table>
      <thead>
        <!-- Se agregan los encabezados de la tabla -->
        <tr>
          <th>Código</th>
          <th>Función</th>
          <th>Acción principal</th>
          <th>Entregable</th>
          <th>Subir</th>
          <th>Enlace</th>
        </tr>
      </thead>
      <tbody>
        <!--Se crea un ciclo for para recorrer el arreglo filas con cada elemento
fila-->
        <template v-for="(fila, index) in filas" :key="index">
          <!-- tr es el comiezo de cada fila y td es el comienzo de cada celda -->
          <tr>
            <td>
              <div class="input-group mb-3">
                <input v-model="fila.espacioCodigo" :placeholder="'Código '" type="text" class="form-control"
                  aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
              </div>
            </td>
            <td>
              <div class="input-group mb-3">
                <input v-model="fila.espacioFuncion" :placeholder="'Función del código '" type="text"
                  class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
              </div>
            </td>
            <td>
              <div class="input-group mb-3">
                <input v-model="fila.espacioAccionPrincipal" :placeholder="'Acción a realizar '" type="text"
                  class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
              </div>
            </td>
            <td>
              <div class="input-group mb-3">
                <input v-model="fila.espacioEntregable" :placeholder="'Entregable correspondiente '" type="text"
                  class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
              </div>
            </td>
            <td>
              <!-- Se crea un botón para que los docente suban los documentos
en el usuario Admin no tienen funcionalidad, en el usuario docente si -->
              <nav class="button">
                <button type="button" @click="subirDocumento(index)">Subir</button>
              </nav>
            </td>
            <!-- Se crea la logica para generar el link del archivo subido por el docente -->
            <td>SE GENERA EL LINK</td>
          </tr>
          <td>
            <button type="button" @click="eliminarFila(index)">Eliminar</button>
          </td>
        </template>
      </tbody>
    </table>
  </div>
  <!-- Es un txt para indicar la entrada de datos -->
  <div class="text">
    <span class="textD">Digita el número del código:</span>
  </div>
  <!-- Es para ingregar datos: Ingresa el número del código para agregar a la tabla -->
  <div class="input-group mb-3 ">
    <input v-model="CodigoDigitado" id="CodigoDigitado" type="text" class="form-control" placeholder="Digitar código"
      aria-label="Recipient's username" aria-describedby="basic-addon2">
  </div>
  <!-- Botón de enviar que agrega las filas a la tabla -->
  <div class="input-group-append botonBuscarCedula">
    <button type="button" @click="agregarFila()" class="btn btn-outline-secondary"
      id="CodigoDigitadoBoton">Enviar</button>
  </div>
  <!-- Txt enlace para ver el documento de plan docentes  -->
  <nav aria-label="breadcrumb">
    <ol class="listadoCodigos">
      <li class="breadcrumb-item">
        <a href="https://docs.google.com/spreadsheets/d/1_pnJ8_-bi2E2MkkaHTXBaMVT-Bg4GJuV3YSqhMhxbhc/edit?usp=sharing"
          target="_blank">Ver listado de código</a>
      </li>
    </ol>
  </nav>
</template>