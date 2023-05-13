<template>
  <div class="signin-container">
    <div class="signin-main">
      <div class="signin-section-one section-container">
        <div class="signin-max-width max-content-container">
          <div class="signin-container-form">
            <div class="signin-title">
              <h3 class="signin-text">Bienvenido de nuevo</h3>
              <p class="signin-text1">Introduzca su correo electrónico y contraseña para iniciar sesión</p>
            </div>
            <form @submit.prevent="login" class="signin-form">
              <label class="signin-label">Correo Electronico</label>
              <input type="email" id="usuario" v-model="email" placeholder="Correo Electronico" required autofocus class="signin-textinput input" />
              <label class="signin-label1">Contraseña</label>
              <input type="password" id="password" v-model="password" placeholder="Contraseña" required autofocus class="signin-textinput1 input" />
              <div class="signin-max-whidth-bottun">
                <button type="submit" class="signin-button button">Acceder</button>
              </div>
            </form>
            <div class="signin-container-link">
              <span class="signin-text2">¿ No tiene una cuenta ?</span>
              <span class="signin-text3">Registrese</span>
            </div>
          </div>
          <div class="signin-container-imagen">
            <div class="signin-container-img">
              <img src="../static/Imagenes/login-esperando.jpeg" alt="image" class="signin-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'login',
  props: {},

  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      await axios.post('http://localhost:3001/api/signin', {
        email: this.email,
        password: this.password,
      })
        .then((respuesta) => {
          const token = respuesta.data.token;
          localStorage.setItem('token', token);
          this.$router.replace('/envio01');
        })
        .catch(error => {
          this.$swal({
            title: 'ERROR',
            text: '¡Ingrese de nuevo las credenciales!',
            icon: 'warning',
            confirmButtonColor: 'red',
          });
        });
    },
  },
};
</script>

<style scoped>
.signin-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.signin-main {
  width: 100%;
  height: 751px;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  flex-direction: column;
}
.signin-section-one {
  height: 738px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  padding-top: 0px;
  flex-direction: column;
}
.signin-max-width {
  height: 842px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  padding-top: 0px;
  padding-left: 5px;
  padding-right: 2px;
  flex-direction: row;
  padding-bottom: var(--dl-space-space-fiveunits);
  justify-content: center;
}
.signin-container-form {
  width: 426px;
  display: flex;
  margin-top: var(--dl-space-space-fiveunits);
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.signin-title {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: column;
}
.signin-text {
  font-size: 30px;
  align-self: stretch;
  font-style: normal;
  text-align: left;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 1.375;
  margin-bottom: var(--dl-space-space-halfunit);
  background-image: linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0.00%,rgb(250, 121, 48) 63.00%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.signin-text1 {
  color: #292524;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 1.625;
}
.signin-form {
  width: 100%;
  height: 328px;
  display: flex;
  padding: 28px;
  flex-direction: column;
}
.signin-label {
  color: #292524;
  width: auto;
  height: auto;
  font-size: 12px;
  align-self: flex-start;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 800;
  margin-left: 4px;
  margin-bottom: var(--dl-space-space-halfunit);
}
.signin-textinput {
  color: #495057;
  height: 100%;
  display: block;
  font-size: 13px;
  appearance: none;
  transition: 0.3s;
  font-weight: 400;
  line-height: 22,4px;
  padding-top: var(--dl-space-space-halfunit);
  border-color: #afafaf;
  padding-left: 12px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  padding-right: 12px;
  padding-bottom: var(--dl-space-space-halfunit);
  background-clip: padding-box;
}
.signin-textinput:focus {
  box-shadow: 0px 0px 10px 0px #fa7930;
  border-color: var(--dl-color-backgrounds-primary);
  border-style: dotted;
}
.signin-label1 {
  color: #292524;
  width: auto;
  height: auto;
  font-size: 12px;
  align-self: flex-start;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 800;
  margin-left: 4px;
  margin-bottom: var(--dl-space-space-halfunit);
}
.signin-textinput1 {
  color: #495057;
  height: 100%;
  display: block;
  font-size: 13px;
  appearance: none;
  transition: 0.3s;
  font-weight: 400;
  line-height: 22,4px;
  padding-top: var(--dl-space-space-halfunit);
  border-color: #afafaf;
  padding-left: 12px;
  border-radius: var(--dl-radius-radius-radius8);
  padding-right: 12px;
  padding-bottom: var(--dl-space-space-halfunit);
  background-clip: padding-box;
}
.signin-textinput1:focus {
  box-shadow: 0px 0px 10px 0px #fa7930;
  border-color: var(--dl-color-backgrounds-primary);
  border-style: dotted;
}
.signin-max-whidth-bottun {
  flex: 0 0 auto;
  width: 367px;
  height: 100px;
  display: flex;
  align-self: stretch;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  justify-content: center;
}
.signin-button {
  color: var(--dl-color-grays-white100);
  width: 100%;
  height: 43px;
  font-size: 12px;
  font-style: normal;
  text-align: center;
  transition: 0.3s;
  font-family: Open Sans;
  font-weight: 600;
  border-radius: var(--dl-radius-radius-radius8);
  text-transform: uppercase;
  background-color: transparent;
  background-image: linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0.00%,rgb(250, 121, 48) 63.00%);
}
.signin-button:active {
  width: var(--dl-size-size-xxlarge);
}
.signin-container-link {
  width: 100%;
  height: 65px;
  display: flex;
  align-items: flex-start;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 24px;
  justify-content: center;
}
.signin-text2 {
  color: #67748e;
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 500;
  margin-bottom: 24px;
}
.signin-text3 {
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 500;
  margin-bottom: 24px;
  margin-left: 8px;
  background-image: linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0.00%,rgb(250, 121, 48) 63.00%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.signin-container-imagen {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.signin-container-img {
  width: 100%;
  height: 584px;
  display: flex;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: column;
  border-bottom-left-radius: 16px;
}
.signin-image {
  width: 705px;
  height: 100%;
  align-self: center;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius4);
  border-bottom-left-radius: 16px;
}
</style>