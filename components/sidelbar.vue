<template>
  <div class="sidelbar-container" v-bind:class="rootClassName">
    <div class="sidelbar-container1">
      <div class="sidelbar-sidebar">
        <nav class="sidelbar-nav">
          <div class="sidelbar-container-logo">
            <img alt="image"
              src="../static/Icons/copia_de_captura_de_pantalla_2022-11-06_a_la_s__16.58.26_2-removebg-preview.png"
              class="sidelbar-image" />
            <span class="sidelbar-text">Help Travel</span>
          </div>
          <div class="sidelbar-separador"></div>
          <div class="sidelbar-container-opcion">
            <div class="sidelbar-opcion02" :class="{ 'active': isActive(['/envio01', '/envio03', '/envio04', '/cotizacion', '/pago']) }" @click="navigateToPage('/envio01')">
              <div class="sidelbar-container2">
                <svg viewBox="0 0 1024 1024" class="sidelbar-icon">
                  <path
                    d="M768 639.968l-182.82-182.822 438.82-329.15-128.010-127.996-548.52 219.442-172.7-172.706c-49.78-49.778-119.302-61.706-154.502-26.508-35.198 35.198-23.268 104.726 26.51 154.5l172.686 172.684-219.464 548.582 127.99 128.006 329.19-438.868 182.826 182.828v255.98h127.994l63.992-191.988 191.988-63.996v-127.992l-255.98 0.004z">
                  </path>
                </svg>
              </div>
              <span class="sidelbar-text1">Hacer un Envio</span>
            </div>
            <div class="sidelbar-opcion01" :class="{'active': isActive('/historialEnvio')}" @click="navigateToPage('/historialEnvio')">
              <div class="sidelbar-container3">
                <svg viewBox="0 0 1088 1024" class="sidelbar-icon2">
                  <path
                    d="M640 64c247.424 0 448 200.576 448 448s-200.576 448-448 448v-96c94.024 0 182.418-36.614 248.902-103.098s103.098-154.878 103.098-248.902c0-94.022-36.614-182.418-103.098-248.902s-154.878-103.098-248.902-103.098c-94.022 0-182.418 36.614-248.902 103.098-51.14 51.138-84.582 115.246-97.306 184.902h186.208l-224 256-224-256h164.57c31.060-217.102 217.738-384 443.43-384zM832 448v128h-256v-320h128v192z">
                  </path>
                </svg>
              </div>
              <span class="sidelbar-text2">Historial Envios</span>
            </div>
            <div class="sidelbar-opcion03" :class="{'active': isActive('/lineaTiempo')}" @click="navigateToPage('/lineaTiempo')">
              <div class="sidelbar-container4">
                <svg viewBox="0 0 1024 1024" class="sidelbar-icon4">
                  <path
                    d="M512 85.333c-212.096 0-384 171.904-384 384s171.904 384 384 384 384-171.904 384-384-171.904-384-384-384zM597.333 170.667c0 42.667-21.333 85.333-64 85.333s-64 42.667-64 85.333 0 128 0 128 42.667 0 42.667-128c0-23.595 19.072-42.667 42.667-42.667s42.667 19.072 42.667 42.667v128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667c23.595 0 42.667-19.115 42.667-42.667h42.667v-85.333l42.667 42.667-42.667 42.667c0 128 0 128-85.333 170.667 0-42.667-42.667-42.667-128-42.667v-85.333l-85.333-85.333v-85.333c-42.667 0-42.667 42.667-42.667 42.667l-23.936-23.936-101.973-101.973c4.693-8.192 9.6-16.299 14.933-24.064l22.315-28.928c62.635-73.216 155.477-119.765 259.328-119.765 29.483 0 57.984 4.181 85.333 11.179v31.488z">
                  </path>
                </svg>
              </div>
              <span class="sidelbar-text3">Seguir envios</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidelbar',
  props: {
    rootClassName: String,
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text1: {
      type: String,
      default: 'Link',
    },
    image_src11: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    image_src111: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text: {
      type: String,
      default: 'HelpTravel',
    },
    image_alt111: {
      type: String,
      default: 'image',
    },
    image_alt11: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    link_text: {
      type: String,
      default: 'https://example.com',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
  },
  
  mounted() {
  },

  methods: {
    isActive(pages) {
      //return this.$route.path === page;
      return pages.includes(this.$route.path);
    },
    navigateToPage(page) {
      this.$router.push(page);
    }
  },

  watch: {
    "$route.path"(newValue) {
      console.log(newValue);
    }
  },

}
</script>

<style scoped>
.sidelbar-container {
  width: 192px;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: flex-start;
  flex-direction: column;
}

.sidelbar-container1 {
  flex: 0 0 auto;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  border-top-left-radius: 0;
}

.sidelbar-sidebar {
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  flex-direction: column;
  padding-bottom: 0px;
  justify-content: space-between;
}

.sidelbar-nav {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 16px;
  flex-direction: column;
  letter-spacing: -.025rem;
  -webkit-font-smoothing: antialiased;
}

.sidelbar-container-logo {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  z-index: 4;
  position: relative;
  align-self: center;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: center;
  margin-left: var(--dl-space-space-unit);
  padding-top: 11.2px;
  margin-right: var(--dl-space-space-unit);
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: column;
  padding-bottom: 8px;
  justify-content: flex-start;
}

.sidelbar-image {
  width: auto;
  height: 60px;
  padding: 5px;
}

.sidelbar-text {
  color: #292524;
  font-size: 16px;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  text-transform: capitalize;
}

.sidelbar-separador {
  width: 120px;
  height: 1px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: solid;
  border-width: 2px;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}

.sidelbar-container-opcion {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  margin-top: 80px;
  align-items: center;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 80px;
  flex-direction: column;
}

.sidelbar-opcion02 {
  width: auto;
  height: auto;
  display: flex;
  transition: 0.3s;
  align-items: center;
  padding-left: 16px;
  border-radius: 16px;
  padding-right: 16px;
  flex-direction: row;
  justify-content: center;

}

.active {
  box-shadow: 0px 0px 10px 0px #a3a3a3;
  background-color: #EEEEEE;
}

.active .sidelbar-container2 {
  box-shadow: 0 .25rem .375rem -.0625rem rgba(20, 20, 20, .12), 0 .125rem .25rem -.0625rem rgba(20, 20, 20, .12) !important;
  background: #ff983f;
}

.active .sidelbar-icon{
  fill: #ffffa1;
}

.active .sidelbar-text1{
  color: #292524;
}


.active .sidelbar-container3 {
  box-shadow: 0 .25rem .375rem -.0625rem rgba(20, 20, 20, .12), 0 .125rem .25rem -.0625rem rgba(20, 20, 20, .12) !important;
  background: #ff983f;
}

.active .sidelbar-icon2{
  fill: #ffffa1;
}

.active .sidelbar-text2{
  color: #292524;
}



.active .sidelbar-container4 {
  box-shadow: 0 .25rem .375rem -.0625rem rgba(20, 20, 20, .12), 0 .125rem .25rem -.0625rem rgba(20, 20, 20, .12) !important;
  background: #ff983f;
}

.active .sidelbar-icon4{
  fill: #ffffa1;
}

.active .sidelbar-text3{
  color: #292524;
}

.sidelbar-container2 {
  flex: 0 0 auto;
  width: 32px;
  height: 32px;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  box-shadow: 0 .25rem .375rem -.0625rem rgba(20, 20, 20, .12), 0 .125rem .25rem -.0625rem rgba(20, 20, 20, .07) !important;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  background-image: linear-gradient(310deg, #e9ecef, #e9ecef);
}

.sidelbar-icon {
  fill: #78716c;
  width: 24px;
  height: 24px;
}

.sidelbar-text1 {
  color: #78716c;
  font-size: 14px;
  align-self: center;
  font-style: normal;
  text-align: left;
  font-family: Open Sans;
  font-weight: 500;
  margin-right: 0px;
  margin-bottom: 0px;
}

.sidelbar-opcion01 {
  width: auto;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-fourunits);
  transition: 0.3s;
  align-items: center;
  padding-left: 16px;
  border-radius: 16px;
  margin-bottom: var(--dl-space-space-fourunits);
  padding-right: 16px;
  flex-direction: row;
}

.sidelbar-opcion01:focus {
  box-shadow: 0px 0px 10px 0px #a3a3a3;
  background-color: #EEEEEE;
}

.sidelbar-opcion01:active {
  box-shadow: 0px 0px 10px 0px #a3a3a3;
  background-color: #EEEEEE;
}

.sidelbar-container3 {
  flex: 0 0 auto;
  width: 32px;
  height: 32px;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  box-shadow: 0 .25rem .375rem -.0625rem rgba(20, 20, 20, .12), 0 .125rem .25rem -.0625rem rgba(20, 20, 20, .07) !important;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  background-image: linear-gradient(310deg, #e9ecef, #e9ecef);
}

.sidelbar-icon2 {
  fill: #78716c;
  width: 24px;
  height: 24px;
}

.sidelbar-text2 {
  color: #78716c;
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}

.sidelbar-opcion03 {
  width: auto;
  height: auto;
  display: flex;
  transition: 0.3s;
  align-items: center;
  padding-left: 16px;
  border-radius: 16px;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  padding-right: 16px;
  flex-direction: row;
}

.sidelbar-opcion03:focus {
  box-shadow: 0px 0px 10px 0px #a3a3a3;
  background-color: #EEEEEE;
}

.sidelbar-opcion03:active {
  box-shadow: 0px 0px 10px 0px #a3a3a3;
  background-color: #EEEEEE;
}

.sidelbar-container4 {
  flex: 0 0 auto;
  width: 32px;
  height: 32px;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  box-shadow: 0 .25rem .375rem -.0625rem rgba(20, 20, 20, .12), 0 .125rem .25rem -.0625rem rgba(20, 20, 20, .07) !important;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  background-image: linear-gradient(310deg, #e9ecef, #e9ecef);
}

.sidelbar-icon4 {
  fill: #78716c;
  width: 24px;
  height: 24px;
}

.sidelbar-text3 {
  color: #78716c;
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 500;
}

.sidelbar-opcion04 {
  width: auto;
  height: 70px;
  display: none;
  transition: 0.3s;
  align-items: center;
  margin-left: 0px;
  padding-top: 10.8px;
  margin-right: 0px;
  padding-left: 16px;
  border-radius: 16px;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  padding-right: 16px;
  flex-direction: row;
  padding-bottom: 10.8px;
}

.sidelbar-opcion04:focus {
  outline: none;
  box-shadow: 0px 0px 20px 0px #d4d4d4;
}

.sidelbar-container5 {
  flex: 0 0 auto;
  width: 32px;
  height: 32px;
  margin: var(--dl-space-space-unit);
  display: flex;
  padding: var(--dl-space-space-halfunit);
  box-shadow: 0 .25rem .375rem -.0625rem rgba(20, 20, 20, .12), 0 .125rem .25rem -.0625rem rgba(20, 20, 20, .07) !important;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  background-image: linear-gradient(310deg, #e9ecef, #e9ecef);
}

.sidelbar-icon6 {
  fill: #344767;
  width: 24px;
  height: 24px;
}

.sidelbar-text4 {
  color: #344767;
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 500;
  margin-right: 22px;
  margin-bottom: 0px;
}

.sidelbar-root-class-name {
  height: 100%;
}

@media(max-width: 767px) {
  .sidelbar-sidebar {
    height: 70vh;
  }
}
</style>