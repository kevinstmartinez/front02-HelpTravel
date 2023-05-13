<template>
  <div class="home-container">
    <main class="home-main">
      <div id="Seccion-hero" class="home-hero section-container">
        <app-navbar rootClassName="navbar-root-class-name" image_src="../static/Icons/icon-logoHorizontal.png"></app-navbar>
        <div class="home-max-width max-content-container">
          <div class="home-content-container">
            <div class="home-input-container">
              <h1 class="home-text">
                <span class="home-text01">
                  Si su equipaje no puede viajar con usted, nosotros le ayudamos a
                  ponerle
                </span>
                <br class="home-text02" />
                <span class="home-text03">alas</span>
                <span class="Heading1"> </span>
                <span class="home-text05 Heading1">HelpTravel</span>
                <br />
              </h1>
              <button type="button" class="home-button button-primary button" @click="login">
                Empieza Tu Viaje 
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="home-section-one section-container">
        <div class="home-max-width1 max-content-container">
          <h2 class="home-text07">
            <span>Envia, guarda y recibe, </span>
            <span class="home-text09">todo en un mismo lugar</span>
            <span> y nunca deje nada atras</span>
          </h2>
          <div class="home-cards-container">
            <feature-card text="Más  de 2000 opiniones  de clientes que prefieren y recomendarian nuestro servicio"
              text1="More Info &gt;" heading="Gran cantidad de clientes satisfechos"
              image_src="/Icons/icon-corazon.png" rootClassName="feature-card-root-class-name1"></feature-card>
            <feature-card
              text="Puede darle seguimiento a los envios que haga, ademas llegamos a cualquier parte en donde haya cobertura "
              text1="More Info &gt;" heading="Entrega en cualquier parte" image_src="/Icons/icon-mapa.png"
              rootClassName="feature-card-root-class-name2"></feature-card>
            <feature-card text="Somos aliados de las mejores empresas de envios en LATAM" text1="More Info &gt;"
              heading="Multiples opciones" image_src="/Icons/icon-camion.png"
              rootClassName="feature-card-root-class-name"></feature-card>
            <feature-card text="Certificado en empaques y embalajes de maxima calidad y durabilidad "
              heading="Con los mejores materiales" image_src="/Icons/icon-caja.png"
              rootClassName="feature-card-root-class-name9"></feature-card>
          </div>
        </div>
      </div>
      <div id="Seccion-two" class="section-container">
        <div class="home-max-width2 max-content-container">
          <div class="home-image-container">
            <img alt="image" src="../static/Imagenes/portada01.png" class="home-image" />
          </div>
          <div class="home-content-container1">
            <h1 class="home-text11">
              <span>
                La mejor alternativa para tu equipaje al alcance de tu mano.
                <span v-html="rawcbn7"></span>
              </span>
              <span class="home-text13">Siempre.</span>
            </h1>
          </div>
        </div>
      </div>
      <div class="section-container">
        <div class="home-max-width3 max-content-container">
          <div class="home-content-container2">
            <h1 class="home-text14">
              <span>
                Los mejores precios cuidadosamente seleccionados para ti.
              </span>
              <br />
              <span><span v-html="raw1ej9"></span></span>
              <span class="home-text18">En todo momento.</span>
            </h1>
          </div>
          <div class="home-image-container1">
            <img alt="image" src="../static/Imagenes/portada02.jpeg"
              class="home-image1" />
          </div>
        </div>
      </div>
      <div id="Seccion-four" class="home-section-four section-container">
        <div class="home-max-width4 max-content-container">
          <div class="home-heading-container">
            <h2 class="home-text19">
              <span>
                Si amas la eficiencia, comodidad y tranquilidad al viajar
                simplemente te encantara
              </span>
              <span> </span>
              <span class="home-text22">TravelHelp.</span>
            </h2>
            <span class="home-text23">
              <span>
                ! Ve a la App Store, instala TravelHelp y comienza a viajar sin
                preocupaciones por tu equipaje
              </span>
              <span>!</span>
            </span>
          </div>
          <div class="home-get-the-app">
            <img alt="image" src="../static/Icons/icon-googleStore.png" class="home-image2" />
            <img alt="image" src="../static/Icons/icon-appStore.png" class="home-image3" />
          </div>
          <div class="home-cards-container1">
            <grid-card text="Viaja sin preocupacion" image_src="/Icons/icon-manos.png"></grid-card>
            <grid-card text="Sigue tus envios" image_src="/Icons/icon-mapa.png"></grid-card>
            <grid-card text="Tu dinero rinde mas " image_src="/Icons/icon-check.png"></grid-card>
            <grid-card text="Menos aplicaciones, mas espacio" image_src="/Icons/icon-smartPhone.png"></grid-card>
          </div>
        </div>
      </div>
      <div class="home-section-five section-container">
        <div class="home-max-width5 max-content-container">
          <div class="home-content-container3">
            <h1 class="home-text26">
              <span>Empiece hoy.</span>
              <br class="home-text28" />
              <span class="home-text29">
                Pruebelo totalmente gratis, descarga la App o en la paguina web.
              </span>
            </h1>
            <span class="home-text30 Content-Light">
              Ve a la App Store o a la paguina Web, utiliza HelpTravel y comienza
              a viajar sin preocupaciones por tu equipaje!
            </span>
            <div class="home-input-container1">
              <div class="home-container1 input">
                <svg viewBox="0 0 1024 1024" class="home-icon">
                  <path
                    d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z">
                  </path>
                </svg>
              </div>
              <a href="" target="_blank" rel="noreferrer noopener"
                class="home-link button-primary button">
                Empezar
              </a>
            </div>
          </div>
          <div class="home-image-container2">
            <img alt="image" src="../static/Imagenes/browser.png" class="home-image4" />
            <img alt="image" src="../static/Imagenes/movil.png" class="home-image5" />
          </div>
        </div>
      </div>
    </main>
    <footer class="home-footer section-container">
      <div class="home-max-width6 max-content-container">
        <div class="home-links">
          <div class="home-container2">
            <span class="home-text31">Product</span>
            <a href="#Seccion-two" class="home-link1 footer-link">
              Sobre nosotros
            </a>
          </div>
          <div class="home-container3">
            <span class="home-text32">Resources</span>
            <span class="home-text32">Download HelpTravel</span>
            <div class="home-container4"></div>
            <span class="footer-link">iOS Version</span>
            <span class="home-text35 footer-link">Android Version</span>
          </div>
        </div>
        <div class="home-container5">
          <img alt="image"
            src="../static/Icons/icon-logoVertical.png"
            class="home-image6" />
          <span class="home-text36">
            <span class="Content-Light">
              Si su equipaje no puede viajar con usted, 
              nosotros le ayudamos a ponerle alas
              HelpTravel
            </span>
          </span>
          <div class="home-social-media">
            <span class="home-text43">Follow us</span>
            <div class="home-container6">
              <svg viewBox="0 0 1024 1024" class="home-icon02">
                <path
                  d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z">
                </path>
                <path d="M64 384h192v576h-192v-576z"></path>
                <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z">
                </path>
              </svg><svg viewBox="0 0 1024 1024" class="home-icon06">
                <path
                  d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z">
                </path>
                <path
                  d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z">
                </path>
                <path
                  d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z">
                </path>
              </svg><svg viewBox="0 0 1024 1024" class="home-icon10">
                <path
                  d="M920.021 283.179c12.245 65.237 19.115 140.587 18.645 218.667 0.811 65.195-5.248 139.392-18.645 214.229-2.432 8.875-6.4 17.195-11.605 24.533-9.685 13.696-23.808 24.107-40.491 28.8-25.771 6.869-91.989 11.733-165.419 14.549-95.147 3.669-190.507 3.669-190.507 3.669s-95.36 0-190.507-3.627c-73.429-2.816-139.648-7.637-164.949-14.421-8.747-2.432-16.896-6.315-24.149-11.435-13.269-9.387-23.509-22.869-28.587-39.381-12.16-65.109-18.944-140.203-18.475-218.027-0.896-65.707 5.163-140.459 18.645-215.893 2.432-8.875 6.4-17.195 11.605-24.533 9.685-13.696 23.808-24.107 40.491-28.8 25.771-6.869 91.989-11.733 165.419-14.549 95.147-3.627 190.507-3.627 190.507-3.627s95.36 0 190.549 3.328c73.344 2.56 140.032 6.955 164.523 12.928 9.344 2.688 17.963 7.040 25.515 12.757 13.099 9.899 22.955 23.936 27.435 40.875zM1003.093 263.552c-9.259-36.949-30.635-67.84-59.008-89.301-15.915-12.032-33.963-21.077-53.291-26.667-38.315-9.387-115.029-13.781-185.259-16.213-96.725-3.371-193.536-3.371-193.536-3.371s-96.939 0-193.749 3.712c-70.059 2.688-147.2 7.467-184.192 17.365-37.291 10.539-67.456 32.853-88.064 61.867-11.52 16.256-20.011 34.603-25.045 54.101-0.256 1.024-0.469 2.091-0.64 3.029-14.635 80.981-21.291 161.835-20.309 233.856-0.512 82.091 6.869 163.456 20.352 234.752 0.256 1.323 0.555 2.645 0.896 3.755 10.453 36.693 32.853 66.859 61.909 87.381 15.232 10.752 32.299 18.859 50.389 23.936 37.504 10.027 114.603 14.805 184.661 17.493 96.853 3.712 193.792 3.712 193.792 3.712s96.939 0 193.749-3.712c70.059-2.688 147.157-7.467 184.192-17.365 37.248-10.539 67.456-32.853 88.021-61.867 11.52-16.256 20.053-34.603 25.045-54.059 0.256-1.067 0.512-2.133 0.64-3.029 14.507-80.384 21.163-160.64 20.309-232.107 0.512-82.133-6.869-163.541-20.352-234.837-0.171-0.853-0.341-1.707-0.512-2.432zM458.667 567.509v-132.352l116.352 66.176zM437.077 677.931l245.333-139.52c20.48-11.648 27.648-37.717 16-58.197-3.968-6.997-9.643-12.459-16-16l-245.333-139.52c-20.48-11.648-46.549-4.48-58.197 16-3.84 6.741-5.632 14.080-5.589 21.077v279.040c0 23.552 19.115 42.667 42.667 42.667 7.765 0 15.019-2.091 21.077-5.589z">
                </path>
              </svg><svg viewBox="0 0 1024 1024" class="home-icon12">
                <path
                  d="M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar.vue'
import FeatureCard from '../components/feature-card.vue'
import GridCard from '../components/grid-card.vue'

export default {
  name: 'Home',
  props: {},
  components: {
    AppNavbar,
    FeatureCard,
    GridCard,
  },
  data() {
    return {
      rawcbn7: ' ',
      raw1ej9: ' ',
    }
  },
  methods: {
    login(){
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-backgrounds-gray);
}

.home-main {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}

.home-hero {
  height: 810px;
  display: flex;
  position: relative;
  background-size: cover;
  background-image: linear-gradient(90deg, rgba(189, 195, 199, 0.15) 2.00%, rgba(255, 255, 255, 0.1) 99.00%), url("../static/Imagenes/puesta-maleta.jpeg");
  background-position: bottom;
}

.home-max-width {
  height: 463px;
  align-items: stretch;
  padding-top: var(--dl-space-space-oneandhalfunits);
  padding-bottom: var(--dl-space-space-oneandhalfunits);
}

.home-content-container {
  flex: 1;
  display: flex;
  min-width: 50%;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.home-input-container {
  flex: 0 0 auto;
  width: 1077px;
  display: flex;
  align-self: center;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: row;
  justify-content: center;
}

.home-text {
  width: 823px;
  font-size: 35px;
  align-self: center;
  text-align: center;
  font-family: Lexend;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 0px;
  text-transform: none;
  text-decoration: none;
}

.home-text01 {
  color: var(--dl-color-backgrounds-gray);
}

.home-text03 {
  color: var(--dl-color-backgrounds-gray);
}

.home-text05 {
  color: var(--dl-color-backgrounds-primary);
}

.home-button {
  color: var(--dl-color-grays-white100);
  height: 59px;
  display: flex;
  align-self: flex-end;
  transition: 0.3s;
  align-items: center;
  line-height: 1;
  padding-top: 20px;
  white-space: nowrap;
  border-color: var(--dl-color-backgrounds-primary);
  border-width: 5px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 20px;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
}

.home-button:hover {
  color: var(--dl-color-backgrounds-primary);
  background-color: var(--dl-color-grays-white100);
}

.home-section-one {
  border-color: rgba(33, 33, 33, 0.1);
  border-width: 1px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}

.home-max-width1 {
  border-radius: 48px;
  flex-direction: column;
  background-color: var(--dl-color-grays-white100);
}

.home-text07 {
  width: 782px;
  font-size: 32px;
  font-style: normal;
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  font-family: Lexend;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: var(--dl-space-space-threeunits);
  text-transform: none;
  text-decoration: none;
}

.home-text09 {
  color: var(--dl-color-backgrounds-primary);
}

.home-cards-container {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}

.home-max-width2 {
  width: 1023px;
  flex-direction: row;
  justify-content: flex-start;
}

.home-image-container {
  flex: 1;
  margin-right: var(--dl-space-space-oneandhalfunits);
}

.home-image {
  width: 675px;
  max-width: 640px;
  object-fit: cover;
  margin-left: 0px;
  border-radius: 48px;
}

.home-content-container1 {
  flex: 1;
  display: flex;
  max-width: 446px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.home-text11 {
  font-size: 32px;
  font-style: normal;
  font-family: Lexend;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 24px;
  text-transform: none;
  text-decoration: none;
}

.home-text13 {
  color: var(--dl-color-backgrounds-primary);
}

.home-max-width3 {
  width: 1023px;
  border-radius: 48px;
  padding-right: 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: var(--dl-color-grays-white100);
}

.home-content-container2 {
  flex: 1;
  display: flex;
  max-width: 446px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.home-text14 {
  font-size: 32px;
  font-style: normal;
  text-align: right;
  font-family: Lexend;
  font-weight: 600;
  line-height: 1.3;
  margin-right: var(--dl-space-space-twounits);
  margin-bottom: 24px;
  text-transform: none;
  text-decoration: none;
}

.home-text18 {
  color: var(--dl-color-backgrounds-primary);
}

.home-image-container1 {
  flex: 1;
  margin-left: var(--dl-space-space-oneandhalfunits);
}

.home-image1 {
  width: 100%;
  max-width: 640px;
  object-fit: cover;
  margin-left: 0px;
  border-radius: var(--dl-radius-radius-radius4);
  border-top-right-radius: 48px;
  border-bottom-right-radius: 48px;
}

.home-section-four {
  padding-top: var(--dl-space-space-twounits);
}

.home-max-width4 {
  flex-direction: column;
  justify-content: center;
}

.home-heading-container {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: column;
}

.home-text19 {
  font-size: 32px;
  font-style: normal;
  text-align: center;
  font-family: Lexend;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: var(--dl-space-space-halfunit);
  text-transform: none;
  text-decoration: none;
}

.home-text22 {
  color: var(--dl-color-backgrounds-primary);
}

.home-text23 {
  font-size: 12px;
  font-style: normal;
  font-family: Lexend;
  font-weight: 300;
  line-height: 1.75;
  text-transform: none;
  text-decoration: none;
}

.home-get-the-app {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: row;
}

.home-image2 {
  width: 151px;
  height: var(--dl-size-size-small);
  object-fit: cover;
  margin-right: var(--dl-space-space-unit);
}

.home-image3 {
  width: 151px;
  height: var(--dl-size-size-small);
  object-fit: cover;
}

.home-cards-container1 {
  width: 722px;
  display: grid;
  grid-gap: var(--dl-space-space-twounits);
  align-self: center;
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  grid-template-columns: 1fr 1fr;
}

.home-section-five {
  height: 451px;
  padding-top: var(--dl-space-space-threeunits);
  padding-bottom: 0px;
  background-color: var(--dl-color-backgrounds-primary);
}

.home-max-width5 {
  height: 379px;
  align-items: stretch;
}

.home-content-container3 {
  flex: 1;
  display: flex;
  min-width: 60%;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}

.home-text26 {
  font-size: 32px;
  font-style: normal;
  font-family: Lexend;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: var(--dl-space-space-twounits);
  text-transform: none;
  text-decoration: none;
}

.home-text28 {
  color: var(--dl-color-grays-white100);
}

.home-text29 {
  color: var(--dl-color-grays-white100);
}

.home-text30 {
  color: var(--dl-color-grays-white80);
  margin-bottom: 36px;
}

.home-input-container1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
}

.home-container1 {
  width: 100%;
  height: 56px;
  display: none;
  max-width: 376px;
  align-items: center;
  line-height: 1.5;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  margin-right: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-oneandhalfunits);
  border-radius: 32px;
  padding-right: var(--dl-space-space-oneandhalfunits);
  padding-bottom: var(--dl-space-space-unit);
}

.home-icon {
  fill: var(--dl-color-grays-gray40);
  width: 24px;
  height: 24px;
}

.home-textinput {
  flex: 1;
  color: var(--dl-color-grays-gray40);
  border-width: 0px;
  padding-left: 12px;
  padding-right: 12px;
}

.home-link {
  display: flex;
  transition: 0.3s;
  align-items: center;
  line-height: 1;
  padding-top: 20px;
  white-space: nowrap;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 20px;
  justify-content: center;
  text-decoration: none;
  background-color: var(--dl-color-grays-dark100);
}

.home-link:hover {
  background-color: var(--dl-color-grays-white100);
}

.home-image-container2 {
  flex: 1;
  width: 503px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}

.home-image4 {
  top: 0px;
  left: 0px;
  width: 300px;
  height: 262px;
  position: absolute;
  object-fit: cover;
}

.home-image5 {
  right: 0px;
  width: 376px;
  bottom: 3px;
  height: 294px;
  margin: auto;
  position: absolute;
  max-width: auto;
  min-width: auto;
  object-fit: contain;
}

.home-footer {
  border-color: rgba(33, 33, 33, 0.1);
  border-width: 1px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}

.home-max-width6 {
  justify-content: space-between;
}

.home-links {
  flex: 0 0 auto;
  width: 40%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.home-container2 {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.home-text31 {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}

.home-link1 {
  text-decoration: none;
}

.home-container3 {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.home-text32 {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}

.home-container4 {
  flex: 0 0 auto;
  width: var(--dl-size-size-large);
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-grays-gray60);
  border-style: solid;
  border-width: 2px;
  margin-bottom: var(--dl-space-space-twounits);
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}

.home-text35 {
  margin-bottom: 0px;
}

.home-container5 {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.home-image6 {
  width: 132px;
  height: 125px;
  margin-bottom: var(--dl-space-space-twounits);
}

.home-text36 {
  color: var(--dl-color-grays-gray100);
  max-width: 350px;
  margin-bottom: 40px;
}

.home-social-media {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.home-text43 {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}

.home-container6 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}

.home-icon02 {
  width: 24px;
  height: 24px;
  transition: 0.3s;
  margin-right: var(--dl-space-space-twounits);
}

.home-icon02:hover {
  fill: var(--dl-color-backgrounds-primary);
  cursor: pointer;
}

.home-icon06 {
  width: 24px;
  height: 24px;
  transition: 0.3s;
  margin-right: var(--dl-space-space-twounits);
}

.home-icon06:hover {
  fill: var(--dl-color-backgrounds-primary);
  cursor: pointer;
}

.home-icon10 {
  width: 24px;
  height: 24px;
  transition: 0.3s;
  margin-right: var(--dl-space-space-twounits);
}

.home-icon10:hover {
  fill: var(--dl-color-backgrounds-primary);
  cursor: pointer;
}

.home-icon12 {
  width: 24px;
  height: 24px;
  transition: 0.3s;
}

.home-icon12:hover {
  fill: var(--dl-color-backgrounds-primary);
  cursor: pointer;
}

@media(max-width: 991px) {
  .home-max-width {
    flex-direction: column;
  }

  .home-content-container {
    margin-bottom: 42px;
    padding-right: 0px;
  }

  .home-input-container {
    width: auto;
  }

  .home-text {
    width: 100%;
  }

  .home-image {
    max-width: 100%;
    margin-left: 0px;
  }

  .home-content-container1 {
    margin-bottom: 42px;
    padding-right: 0px;
  }

  .home-max-width3 {
    width: auto;
  }

  .home-content-container2 {
    margin-bottom: 42px;
    padding-right: 0px;
  }

  .home-image1 {
    max-width: 100%;
    margin-left: 0px;
  }

  .home-section-five {
    height: 614px;
  }

  .home-max-width5 {
    height: 532px;
    flex-direction: column;
  }

  .home-image-container2 {
    width: 914px;
  }

  .home-image4 {
    left: 143px;
    bottom: -1px;
    height: 219px;
  }

  .home-image5 {
    top: -77px;
    right: 200px;
    max-width: 100%;
  }

  .home-max-width6 {
    flex-direction: column-reverse;
  }

  .home-links {
    width: 100%;
    margin-top: var(--dl-space-space-threeunits);
    align-items: center;
    margin-bottom: var(--dl-space-space-threeunits);
  }

  .home-container2 {
    align-items: center;
  }

  .home-container3 {
    align-items: center;
  }

  .home-container5 {
    width: 926px;
    align-items: center;
  }
}

@media(max-width: 767px) {
  .home-input-container {
    width: auto;
  }

  .home-cards-container {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .home-max-width2 {
    width: auto;
    flex-direction: column;
  }

  .home-image-container {
    width: 100%;
    margin-right: 0px;
  }

  .home-image {
    margin-bottom: var(--dl-space-space-twounits);
  }

  .home-content-container1 {
    max-width: 100%;
  }

  .home-max-width3 {
    width: auto;
    flex-direction: column-reverse;
  }

  .home-content-container2 {
    max-width: 100%;
  }

  .home-image-container1 {
    width: auto;
    margin-right: 0px;
  }

  .home-image1 {
    border-radius: 48px;
    margin-bottom: var(--dl-space-space-twounits);
  }

  .home-cards-container1 {
    width: auto;
    grid-template-columns: 1fr;
  }

  .home-section-five {
    height: 683px;
  }

  .home-max-width5 {
    width: auto;
    height: 616px;
  }

  .home-image-container2 {
    width: 710px;
  }

  .home-image4 {
    top: -6px;
    left: 40px;
  }

  .home-image5 {
    top: -11px;
    right: -147px;
    width: 300px;
    height: 269px;
    min-width: 100%;
    margin-right: 0px;
  }

  .home-max-width6 {
    width: 100%;
  }

  .home-links {
    align-items: center;
    justify-content: center;
  }

  .home-container2 {
    width: 163px;
    align-items: center;
  }

  .home-container3 {
    width: 195px;
    align-items: center;
  }

  .home-container5 {
    align-items: center;
    margin-bottom: var(--dl-space-space-threeunits);
  }
}

@media(max-width: 479px) {
  .home-max-width {
    height: 560px;
  }

  .home-content-container {
    height: 478px;
  }

  .home-input-container {
    width: 410px;
    height: 400px;
    flex-direction: column;
  }

  .home-text {
    width: 365px;
    height: 283px;
    font-size: 24px;
    font-style: normal;
    text-align: center;
    font-family: Lexend;
    font-weight: 500;
    line-height: 1.2;
    margin-right: 0px;
    text-transform: none;
    text-decoration: none;
  }

  .home-text01 {
    color: var(--dl-color-backgrounds-gray);
  }

  .home-text02 {
    color: var(--dl-color-backgrounds-gray);
  }

  .home-text03 {
    color: var(--dl-color-backgrounds-gray);
  }

  .home-text05 {
    color: var(--dl-color-backgrounds-primary);
    font-size: 42px;
    font-style: normal;
    font-family: Lexend;
    font-weight: 600;
    line-height: 1.2;
    text-transform: none;
    text-decoration: none;
  }

  .home-button {
    align-self: center;
  }

  .home-text07 {
    width: 479px;
    font-size: 24px;
  }

  .home-cards-container {
    justify-content: center;
  }

  .home-max-width2 {
    width: auto;
  }

  .home-text11 {
    font-size: 24px;
  }

  .home-max-width3 {
    width: auto;
  }

  .home-text14 {
    font-size: 24px;
  }

  .home-image1 {
    width: 406px;
    border-top-left-radius: 48px;
    border-bottom-left-radius: 48px;
  }

  .home-heading-container {
    margin-bottom: var(--dl-space-space-twounits);
  }

  .home-text19 {
    font-size: 24px;
  }

  .home-text23 {
    text-align: center;
  }

  .home-cards-container1 {
    width: auto;
  }

  .home-section-five {
    height: 767px;
    padding-bottom: var(--dl-space-space-threeunits);
  }

  .home-max-width5 {
    height: 719px;
    position: relative;
    flex-direction: column;
  }

  .home-input-container1 {
    flex-direction: column;
  }

  .home-container1 {
    max-width: 100%;
    margin-bottom: var(--dl-space-space-unit);
  }

  .home-image-container2 {
    width: auto;
    height: auto;
  }

  .home-image4 {
    top: 49px;
    left: 6px;
  }

  .home-image5 {
    top: -2px;
    right: -99px;
    height: 294px;
  }

  .home-links {
    flex-wrap: wrap;
    margin-top: var(--dl-space-space-fourunits);
    margin-bottom: 0px;
  }

  .home-container2 {
    width: 100%;
    align-self: flex-start;
    align-items: center;
    margin-bottom: var(--dl-space-space-threeunits);
  }

  .home-text31 {
    margin-bottom: var(--dl-space-space-twounits);
  }

  .home-container3 {
    width: 100%;
    align-items: center;
  }

  .home-text32 {
    margin-bottom: var(--dl-space-space-twounits);
  }

  .home-image6 {
    align-self: center;
  }

  .home-text36 {
    align-self: center;
    text-align: center;
  }

  .home-social-media {
    align-self: center;
  }

  .home-text43 {
    align-self: center;
    text-align: center;
  }
}</style>
