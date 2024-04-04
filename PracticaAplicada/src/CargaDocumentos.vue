<script setup>


/*

VISTA DOCENTE

*/
import { ref } from 'vue';
import { useRouter } from 'vue-router';

/*Función para mostrar una ventana emergente de Windows al usuario y preguntar si está seguro del redireccionamiento*/
function InicioMensaje() {
  const confirmacion = window.confirm('¿Estás seguro de que quieres volver al inicio de la página?');
  if (confirmacion) {
    // PONER LA RUTA DEL CODIGO DEL INICIO DE LA PÁGINA
    window.location.href = '/';
  }
}

function Solicitar() {
  // PONER LA RUTA DEL CODIGO DE LA LISTA DE PLANES REALIZADOS O MIRAR A DONDE REDIRIGIR
  const Solicitar = window.confirm('Solicitaste la carga de este código: 102');
  if (Solicitar) {
    window.location.href = '/';
  }
}
function Editar() {
  // PONER LA RUTA DEL CODIGO DE LA LISTA DE PLANES REALIZADOS O MIRAR A DONDE REDIRIGIR
  const Editar = window.confirm('Vas a redirigirte para editar el plan docente acutal ¿Estás seguro?');
  if (Editar) {
    window.location.href = '/';
  }
}
function Actualizacion() {
  // PONER LA RUTA DEL CODIGO DE LA LISTA DE PLANES REALIZADOS O MIRAR A DONDE REDIRIGIR
  const Actualizacion = window.confirm('Vas a enviar la actualización del plan docente actual ¿Estás seguro?');
  if (Actualizacion) {
    window.location.href = '/';
  }
}
</script>

<!-- Empieza HTML: lo que el usuario puede ver  -->

<template>
    <RouterView>
  <!--Muestra el logo de la universidad-->
  <div>
    <img src="C:\Users\Juliana\OneDrive\Escritorio\Adelanto\PracticaAplicada\src\Img.logoPoli.webp" class="logo"
      alt="logo Poli" />
  </div>
  <nav class="BotonActualizar"  >
    <button  type="button" @click="Actualizacion()">Actualizar</button>
  </nav>
  
  <!-- Son los text para indicar los elementos del formato-->
  <div class="text">
    <span class="textNombre"style="left: 430px">Nombre</span>
    <span class="textCC" style="left: 430px">Código</span>
    <span class="textCargo">Cargo</span>
    <span class="textHorasDirectas">Horas directas</span>
    <span class="textHorasPreparacion">Horas preparación</span>
    <span class="textHorasLabor">Horas labor</span>
  </div>
  <!-- Es una especie de menú que redirige al inicio de la página y muestra que estamos en la sección de Mi plan docente-->
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#" @click="InicioMensaje()">Inicio</a></li>
      <li class="breadcrumb-item"><a href="#">Solicitud de carga Docuentos</a></li>
    </ol>
  </nav>
  <!-- Es la linea separadora para poder ponerle color a la parte superior de la página -->
  <div class="LineaSeparadora"></div>
  <!-- Son las Salidas, se tomo en forma de formulario -->
  <div class="input-group mb-3">
    <input :value="nombreDocente" style="left: 500px" id="EntradaCedula" type="number" class="form-control" placeholder="1013100917"
      aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
  </div>
  <!-- Es el formato para indicar la caja de nombre -->
  <div class="input-group mb-3">
    <input :value="nombreDocente" style="left: 500px"id="SalidaNombre" type="text" class="form-control" placeholder="Juliana Andrea Caicedo Avila"
      aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
  </div>
  <!-- Es el formato para indicar la caja de cargo -->
  <div class="input-group mb-3">
    <input :value="Cargo" id="Cargo" type="text" class="form-control" placeholder="Docente"
      aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
  </div>
  <!-- Es el formato para indicar la caja de Horas directas -->
  <div class="input-group mb-3">
    <input :value="HorasDirectas" id="HorasDirectas" type="number" class="form-control" placeholder="25"
      aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
  </div>
  <!-- Es el formato para indicar la caja de Horas Preparación -->
  <div class="input-group mb-3">
    <input :value="HorasPreparacion" id="HorasPreparacion" type="number" class="form-control" placeholder="15"
      aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
  </div>
  <!-- Es el formato para indicar la caja de Horas labor -->
  <div class="input-group mb-3">
    <input :value="HorasLabor" id="HorasLabor" type="number" class="form-control" placeholder="40"
      aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
  </div>
  <!--Es el txt que esta en la mitad de la pantalla-->
  <div class="text">
    <span class="textV" style="top: 340px">Plan docente actual: </span>
  </div>
  <!-- Es el contenedot tabla para almacenar los codigo asignsados a cada plan docente -->
  <div class="tabla-container" style="top: 410px">
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
        <tr>
        <td>102</td>
        <td>Líder formulación proyecto Investigación institucional con financiación institucional</td>
        <td>Formulación de proyecto de investigación </td>
        <td>Proyecto Formulado y presentado en convocatoria institucional</td>
        <td>
<!-- Se crea un botón para que los docente suban los documentos
en el usuario Admin no tienen funcionalidad, en el usuario docente si -->
<td>Cargado</td>

            </td>
        <td>LINK SHAREPOINT</td>
      </tr>
    </tbody>
    <tbody>
        <tr>
        <td>102A</td>
        <td>Líder formulación proyecto Investigación institucional con financiación institucional</td>
        <td>Formulación de proyecto de investigación </td>
        <td>Proyecto Formulado y presentado en convocatoria institucional</td>
        <td>
<!-- Se crea un botón para que los docente suban los documentos
en el usuario Admin no tienen funcionalidad, en el usuario docente si -->
              <nav class="button">
                <button type="button" @click="Solicitar()">Solicitar</button>
              </nav>
            </td>
      </tr>
    </tbody>
    <tbody>
        <tr>
        <td>102B</td>
        <td>Líder formulación proyecto Investigación institucional con financiación institucional</td>
        <td>Formulación de proyecto de investigación </td>
        <td>Proyecto Formulado y presentado en convocatoria institucional</td>
        <td>
<!-- Se crea un botón para que los docente suban los documentos
en el usuario Admin no tienen funcionalidad, en el usuario docente si -->
              <nav class="button">
                <button type="button" @click="Solicitar()">Solicitar</button>
              </nav>
            </td>
      </tr>
    </tbody>
    </table>
  </div>
<!-- Ingresar Comentarios -->
  <div class="input-group mb-3 ">
    <input v-model="Comentario" id="Comentario" type="text" class="form-control"
      placeholder="Comentario opcional" aria-label="Recipient's username" aria-describedby="basic-addon2">
  </div>
  <nav class="botonConfirmacion" style="left: -1300px">
      <button type="button" @click="Editar()">Editar tabla</button>
  </nav>
  <div class="text" style="top: 285px;left: 215px">
    <span>Comentar:</span>
  </div>
</RouterView>
</template>