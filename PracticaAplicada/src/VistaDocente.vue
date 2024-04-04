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
/*Función para el botón de confirmar, muestra una ventana de windows para que el usuario sepa que ya va a enviar
la confirmación del plan docente creado*/
function confirmar() {
  // PONER LA RUTA DEL CODIGO DE LA LISTA DE PLANES REALIZADOS O MIRAR A DONDE REDIRIGIR
  const confirmacion = window.confirm('Vas a enviar el plan docente actual, ¿Estás seguro?');
  if (confirmacion) {
    window.location.href = '/';
  }
}
function subirDocumento() {
//Logoca para subir documento
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
  <!-- Es el botón para enviar el  del plan docente-->
  <nav class="botonConfirmacion">
    <button type="button" @click="confirmar()">Enviar</button>
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
      <li class="breadcrumb-item"><a href="#">Mi plan docente</a></li>
    </ol>
  </nav>
  <!-- Es la linea separadora para poder ponerle color a la parte superior de la página -->
  <div class="LineaSeparadora"></div>
  <!-- Son las Salidas, se tomo en forma de formulario -->
  <div class="input-group mb-3">
    <input :value="nombreDocente" style="left: 500px" id="EntradaCedula" type="number" class="form-control" placeholder="Código/cédula"
      aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
  </div>
  <!-- Es el formato para indicar la caja de nombre -->
  <div class="input-group mb-3">
    <input :value="nombreDocente" style="left: 500px"id="SalidaNombre" type="text" class="form-control" placeholder="Nombre del docente"
      aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
  </div>
  <!-- Es el formato para indicar la caja de cargo -->
  <div class="input-group mb-3">
    <input :value="Cargo" id="Cargo" type="text" class="form-control" placeholder="Cargo"
      aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
  </div>
  <!-- Es el formato para indicar la caja de Horas directas -->
  <div class="input-group mb-3">
    <input :value="HorasDirectas" id="HorasDirectas" type="number" class="form-control" placeholder="Horas directas"
      aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
  </div>
  <!-- Es el formato para indicar la caja de Horas Preparación -->
  <div class="input-group mb-3">
    <input :value="HorasPreparacion" id="HorasPreparacion" type="number" class="form-control" placeholder="Horas preparación"
      aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
  </div>
  <!-- Es el formato para indicar la caja de Horas labor -->
  <div class="input-group mb-3">
    <input :value="HorasLabor" id="HorasLabor" type="number" class="form-control" placeholder="Horas labor"
      aria-label="Recipient's username" aria-describedby="basic-addon2" readonly>
  </div>
  <!--Es el txt que esta en la mitad de la pantalla-->
  <div class="text">
    <span class="textV" style="top: 270px">Mi plan docente actual 2024-01: </span>
  </div>
  <!-- Es el contenedot tabla para almacenar los codigo asignsados a cada plan docente -->
  <div class="tabla-container" style="top: 300px">
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
              <nav class="button">
                <button type="button" @click="subirDocumento(index)">Subir</button>
              </nav>
            </td>
        <td>LINK SHAREPOINT</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>