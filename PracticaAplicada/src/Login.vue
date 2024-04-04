<script setup>

/* LOGIN*/ 

import { ref } from 'vue';
import { useRouter } from 'vue-router';


/*Se crea una función para probar la funcionalidad, se crean dos variables para almacenar los 
datos que se optienen de HTLM y se compara en los condicionales */ 
const usuario = ref('');
const clave = ref('');
function buscarEnBaseDeDatos() {
  if (usuario.value === 'jancaicedo' && clave.value === '123') {
    window.confirm('Ingreso exitoso');
    
  } else {
    window.confirm('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
  }
}
</script>

<template>
  <!-- Para poder ver los enrutadores -->
  <RouterView>
  <!-- Logica del login-->

  <div class="container" id="login" style="width: 1000px">
    <div class="row hidden">
      <div class="col d-flex align-items-center justify-content-center">
        <div class="card col-5">
          <div class="card-header main"><i class="fa-solid fa-user-lock"></i> Iniciar sesión</div>
          <div class="card-body pt-3 pb-4">
            <div class="row">
              <div class="form-group">
                <label class="form-label color-main font-weight-semibold">Usuario: <span class="text-color-danger">*</span></label>
                <div class="form-icon position-relative">
                  <i class="fa-solid fa-envelope text-4 color-main position-absolute left-15 top-50pct transform3dy-n50"></i>
                  <input required type="text" v-model="usuario" placeholder="Usuario" class="form-control form-control-lg text-4 has-icon" id="txt-email" name="txt-email" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-group m-0">
                <label class="form-label color-main font-weight-semibold">Contraseña: <span class="text-color-danger">*</span></label>
                <div class="form-icon position-relative">
                  <i class="fa-solid fa-key text-4 color-main position-absolute left-15 top-50pct transform3dy-n50"></i>
                  <input required minlength="5" autocomplete="off" type="password" v-model="clave" placeholder="Contraseña" class="form-control form-control-lg text-4 has-icon" id="txt-password" name="txt-password" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button @click="buscarEnBaseDeDatos" style="background-color:white" class="btn btn-main" title="Ingresar">INGRESAR <i class="fa-solid fa-caret-right ms-1"></i></button>
    <div>{{ mensaje }}</div>
  </div>
</RouterView>
</template>
