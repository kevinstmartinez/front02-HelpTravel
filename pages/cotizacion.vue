<template>
  <div class="cotizacion-container">
    <div class="cotizacion-max-width">
      <div class="cotizacion-container-sidelbar">
        <app-sidelbar></app-sidelbar>
      </div>
      <div class="cotizacion-cotiza-container">
        <app-navbar1 :menuItem="menuItem"></app-navbar1>
        <div class="cotizacion-content-container">
          <div class="cotizacion-text-container">
            <h1 class="cotizacion-text">
              <span class="cotizacion-text01">Escoge</span>
              <span>
                <span><span v-html="rawuvmg"></span></span>
                <span><span v-html="rawtyd7"></span></span>
              </span>
              <span class="cotizacion-text05">
                <span>
                  al que mas se adecue a tus
                  <span v-html="rawgi0i"></span>
                </span>
                <span><span v-html="raw7g02"></span></span>
              </span>
              <br class="cotizacion-text08" />
              <span class="cotizacion-text09">necesidades</span>
            </h1>
            <span class="cotizacion-text10">
              En HelpTravelte ofrece multiples opciones para tus envios 
            </span>
          </div>
          <div class="cotizacion-container-text-card">
            <div class="cotizacion-card-container">
              <div v-for="cotizacion in cotizaciones" :key="cotizacion.id" class="cotizacion-card">
                <img :src="cotizacion.deliveryCompanyImgUrl" alt="image" class="cotizacion-image" />
                <h4 class="cotizacion-text07 Heading4">{{ cotizacion.deliveryCompanyName }}</h4>
                <div class="cotizacion-info-shipping02">
                  <div class="cotizacion-price">
                    <span class="cotizacion-text08">Precio del Envio</span>
                    <span class="cotizacion-text09">{{ parseFloat(cotizacion.shippingCost) | currency }}</span>
                  </div>
                  <div class="cotizacion-duration">
                    <span class="cotizacion-text10">Entrega</span>
                    <span class="cotizacion-text11">{{ parseInt((cotizacion.shippingTime / 60) / 24) }} Dias</span>
                  </div>
                </div>
                <span class="cotizacion-text12">
                  Esta informacion es un estimado basado en envios anterirores con
                  caracteristicas similares, esto solo es un promedio
                </span>
                <button class="cotizacion-button button" @click="pasarData(cotizacion)">
                  <svg viewBox="0 0 1024 1024" class="cotizacion-icon">
                    <path
                      d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';

import AppSidelbar from '../components/sidelbar'
import AppNavbar1 from '../components/navbar1'

export default {
  name: 'Cotizacion',
  components: {
    AppSidelbar,
    AppNavbar1,
  },
  filters: {
    currency: function (value, currency, decimals) {
      const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      });
      return formatter.format(value);
    }
  },
  data() {
    return {

      menuItem: "Cotizacion",

      rawuvmg: ' ',
      rawtyd7: ' ',
      rawgi0i: ' ',
      raw7g02: ' ',

      cotizaciones: [],

      nombreCompany: '',
      costoShipping: '',
      duracion: '',
    }
  },

  async mounted() {

    const { ciudad } = this.$route.query

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

    await axios.get('http://localhost:8080/api/get-Cart')
      .then(respuesta => {
        this.height = respuesta.data.assigned_box.height
        this.width = respuesta.data.assigned_box.width
        this.length = respuesta.data.assigned_box.length
        this.pesoBox = respuesta.data.totalWeight
        this.totalValue = respuesta.data.totalValue
      })
      .catch(error => {
        this.$swal({
          title: 'ERROR',
          text: '¡Datos incompletos del Envio!',
          icon: 'warning',
          confirmButtonColor: 'red',
        });
      });

    await axios.post('http://localhost:8080/api/quote', {
      destiny: ciudad,
      height: this.height,
      width: this.width,
      length: this.length,
      weight: this.pesoBox,
      declaredValue: this.totalValue
    })
      .then(respuesta => {
        console.log(this.cotizaciones = respuesta.data.data);
      })
      .catch(error => {
        this.$swal({
          title: 'ERROR',
          text: '¡Fuera de Rango!',
          icon: 'warning',
          confirmButtonColor: 'red',
        });
      });
  },
  methods: {
    pasarData(data) {
      console.log(data);

      this.nombreCompany = data.deliveryCompanyName
      this.costoShipping = data.shippingCost
      this.duracion = parseInt((data.shippingTime / 60) / 24)

      const { ciudad } = this.$route.query

      this.$router.push({
        path: '/pago',
        query: {
          ciudad: ciudad,
          Company: this.nombreCompany,
          costo: this.costoShipping,
          dias: this.duracion
        }
      });
    }
  }
}
</script>
  
<style scoped>
.cotizacion-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-halfunit);
  background-color: #DDDDDD;
}

.cotizacion-max-width {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
}

.cotizacion-container-sidelbar {
  flex: 0 0 auto;
  width: 210px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.cotizacion-cotiza-container {
  width: 970px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.cotizacion-content-container {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-self: center;
  align-items: flex-start;
  border-radius: 16px;
  flex-direction: column;
  background-color: #EEEEEE;
}

.cotizacion-text-container {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-self: flex-start;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}

.cotizacion-text {
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-family: Open Sans;
  margin-bottom: var(--dl-space-space-unit);
}

.cotizacion-text01 {
  color: var(--dl-color-backgrounds-primary);
}

.cotizacion-text02 {
  color: #292524;
}

.cotizacion-text03 {
  color: #292524;
}

.cotizacion-text04 {
  color: #292524;
}

.cotizacion-text06 {
  color: #292524;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  margin-bottom: var(--dl-space-space-unit);
}

.cotizacion-container-text-card {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
}

.cotizacion-card-container {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding: var(--dl-space-space-unit);
  box-shadow: 0px 0px 10px 0px #d4d4d4;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius8);
  justify-content: space-between;
  background-color: var(--dl-color-gray-white);
}

.cotizacion-card {
  flex: 0 0 auto;
  width: 269px;
  height: auto;
  display: flex;
  max-width: 285px;
  align-items: center;
  padding-top: var(--dl-space-space-oneandhalfunits);
  margin-right: 0px;
  padding-left: var(--dl-space-space-unit);
  border-radius: 22px;
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-oneandhalfunits);
}

.cotizacion-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-bottom: var(--dl-space-space-twounits);
}

.cotizacion-text07 {
  color: #292524;
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}

.cotizacion-info-shipping02 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
}

.cotizacion-price {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.cotizacion-text08 {
  color: #292524;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
  text-transform: capitalize;
}

.cotizacion-text09 {
  color: var(--dl-color-backgrounds-green);
  align-self: center;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 700;
}

.cotizacion-duration {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 8px;
}

.cotizacion-text10 {
  color: #292524;
  align-self: center;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}

.cotizacion-text11 {
  color: var(--dl-color-backgrounds-green);
  font-style: normal;
  font-family: Open Sans;
  font-weight: 700;
}

.cotizacion-text12 {
  color: #78716c;
  font-size: 12px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 1.75;
  margin-bottom: var(--dl-space-space-unit);
  text-transform: none;
  text-decoration: none;
}

.cotizacion-button {
  color: var(--dl-color-gray-white);
  display: flex;
  transition: 0.3s;
  border-color: transparent;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  background-color: transparent;
}

.cotizacion-button:active {
  border: transparent;
  display: flex;
  border-radius: 16px;
  background-color: #ecd79b;
}

.cotizacion-icon {
  fill: var(--dl-color-success-300);
  width: 24px;
  height: 24px;
  transition: 0.3s;
}

.cotizacion-icon:hover {
  width: 34px;
  height: 34px;
}

@media(max-width: 767px) {
  .cotizacion-card {
    width: 50%;
  }
}

@media(max-width: 479px) {
  .cotizacion-card {
    width: 100%;
  }
}
</style>