<template>
  <div class="pago-container">
    <div class="pago-max-width">
      <div class="pago-container-sidelbar">
        <app-sidelbar rootClassName="sidelbar-root-class-name"></app-sidelbar>
      </div>
      <div class="pago-payment-container">
        <app-navbar1 :menuItem="menuItem"></app-navbar1>
        <div class="pago-content-container">
          <div class="pago-text-container">
            <h1 class="pago-text">
              <span class="pago-text01">Escoge</span>
              <span>
                <span><span v-html="rawl7mv"></span></span>
                <span><span v-html="rawncfq"></span></span>
              </span>
              <span class="pago-text05">
                <span>
                  al que mas se adecue a tus
                  <span v-html="rawftbk"></span>
                </span>
                <span><span v-html="rawcaat"></span></span>
              </span>
              <br class="pago-text08" />
              <span class="pago-text09">necesidades</span>
            </h1>
            <span class="pago-text10">
              En HelpTravelte ofrece multiples opciones para tus envios 
            </span>
          </div>
          <div class="pago-container-max-width-cards">
            <div class="pago-card-container">
              <div class="pago-card-shipping-summary">
                <div class="pago-logo-back">
                  <div class="pago-container-back">
                    <svg viewBox="0 0 1024 1024" class="pago-icon">
                      <path
                        d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z">
                      </path>
                    </svg>
                  </div>
                  <div class="pago-container-back1">
                    <img alt="image" src="../static/Icons/copia_de_captura_de_pantalla_2022-11-06_a_la_s__16.58.26_2-removebg-preview.png" class="pago-image" />
                    <span class="pago-text11">HelpTravel</span>
                  </div>
                </div>
                <div class="pago-container-contenido">
                  <div class="pago-price-h1-total">
                    <span class="pago-text12">{{ Company }}</span>
                    <div class="pago-container-price">
                      <h1 class="pago-text13">$</h1>
                      <h1 class="pago-text14">{{total}}</h1>
                    </div>
                  </div>
                  <div class="pago-product-seccion">
                    <div class="pago-container-product">
                      <div class="pago-logo">
                        <img alt="image" src="https://play.teleporthq.io/static/svg/default-img.svg"
                          class="pago-image1" />
                      </div>
                      <div class="pago-name-product">
                        <span class="pago-text15">{{ciudad}}</span>
                        <div class="pago-cantidad">
                          <span class="pago-text16">Cantidad Pack:</span>
                          <span class="pago-text17"> [ 01 ]</span>
                        </div>
                      </div>
                      <div class="pago-price">
                        <div class="pago-price-h1-total1">
                          <div class="pago-container01">
                            <span class="pago-text18">$</span>
                            <span class="pago-text19">{{costo}}</span>
                          </div>
                          <div class="pago-container-price1">
                            <span class="pago-text20">$</span>
                            <span class="pago-text21">{{ valorPack }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pago-container-cotabili">
                  <div class="pago-container03">
                    <span class="pago-text29">Subtotal</span>
                    <div class="pago-container04">
                      <span class="pago-text30">$</span>
                      <span>{{costo}}</span>
                    </div>
                  </div>
                  <div class="pago-container05">
                    <span class="pago-text32">Comision (6.5%)</span>
                    <div class="pago-container06">
                      <span class="pago-text33">$</span>
                      <span class="pago-text34">{{comision}}</span>
                    </div>
                  </div>
                  <div class="pago-container07">
                    <span class="pago-text35">Total      </span>
                    <div class="pago-container08">
                      <span class="pago-text36">$</span>
                      <span class="pago-text37">{{total}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pago-card-stripe">
                <div class="pago-max-width1">

                  <div class="pago-container09"></div>

                  <div class="pago-container-card-info">
                    <span class="pago-text38">
                      <span>Informacion Tarjeta Credito</span>
                      <br />
                    </span>

                    <div id="card-number" class="pago-textinput input"></div>

                    <div class="pago-container10">

                      <div id="card-expiry" class="pago-textinput1 input"></div>
                      <div id="card-cvc" class="pago-textinput2 input"></div>

                    </div>
                  </div>
                  <div class="pago-container-info-card">
                    <span class="pago-text41">
                      <span>Correo Electronico</span>
                      <br />
                    </span>
                    <input type="text" placeholder="" class="pago-textinput3 input" v-model="email" />
                    <span class="pago-text44">
                      <span>Nombre del Titular</span>
                      <br />
                    </span>
                    <input type="text" placeholder="" class="pago-textinput4 input" v-model="nameHolder" />
                    <span class="pago-text47">
                      <span>País o región</span>
                      <br />
                    </span>
                    <select class="pago-select">
                      <option value="" disabled selected>Seleccion un Pais</option>
                      <option value="Option 2">Colombia</option>
                    </select>
                  </div>
                  <div class="pago-container-botton">
                    <button class="truck-button button" @click="tokenCard">
                      <span class="default">Complete la Orden</span>
                      <span class="success" v-if="statusBotton === true">
                        Orden Aceptada
                        <svg viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span class="success" v-else="statusBotton === false">
                        Orden Denegada
                        <svg viewBox="0 0 24 24">
                          <path fill="red"
                            d="M19.39,5.19l-.58-.58L12,10.83,5.19,4.02l-.58.58L10.83,12,4.02,18.81l.58.58L12,13.17l6.81,6.81.58-.58L13.17,12Z" />
                        </svg>
                      </span>
                      <div class="truck">
                        <div class="wheel"></div>
                        <div class="back"></div>
                        <div class="front"></div>
                        <div class="box"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

import axios from "axios";

import { loadStripe } from "@stripe/stripe-js";

import AppSidelbar from "../components/sidelbar";
import AppNavbar1 from "../components/navbar1";

export default {
  name: "Pago",
  props: {},
  components: {
    AppSidelbar,
    AppNavbar1,
  },
  data() {
    return {
      rawl7mv: " ",
      rawncfq: " ",
      rawftbk: " ",
      rawcaat: " ",

      menuItem: "Resumen Pago",

      statusBotton: null,

      stripe: null,

      email: '',
      nameHolder: '',
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
      card: null,

      ciudad: '',
      Company: '',
      costo: '',
      dias: '',

      valorPack: null,
      comision: null,
      total: null,
      amount: null,
  
      num_guia: ''

    };
  },
  async mounted() {

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

    this.stripe = await loadStripe(process.env.STRIPE_PUBLIC_KEY);

    const elements = this.stripe.elements();

    this.cardNumber = elements.create("cardNumber", {
      placeholder: '#### #### #### ####',
      style: {
        base: {
          fontFamily: 'inherit',
          "::placeholder": {
            color: "rgba(26, 26, 26, 0.22)",
          },
        },
      },
    });
    this.cardNumber.mount("#card-number");

    this.cardExpiry = elements.create("cardExpiry", {
      style: {
        base: {
          fontFamily: 'inherit',
          "::placeholder": {
            color: "rgba(26, 26, 26, 0.22)",
          },
        },
      },
    });
    this.cardExpiry.mount("#card-expiry");

    this.cardCvc = elements.create("cardCvc", {
      style: {
        base: {
          fontFamily: 'inherit',
          "::placeholder": {
            color: "rgba(26, 26, 26, 0.22)",
          },
        },
      },
    });
    this.cardCvc.mount("#card-cvc");

    /* - - - - - - - ANIMACION PARA EL BOTTON - - - - - - - - - */
    this.animateButton();
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

    const { ciudad, Company, costo, dias } = this.$route.query
    this.ciudad = ciudad;
    this.Company = Company;
    this.costo = costo;
    this.dias = dias;

    axios.get('https://backend-helptravel-production.up.railway.app/api/get-Cart')
            .then(respuesta => {
                this.valorPack = respuesta.data.totalValue
            })
            .catch(error => {
                this.$swal({
                    title: 'ERROR',
                    text: '¡Upss paso algo con el valor del Envio!',
                    icon: 'warning',
                    confirmButtonColor: 'red',
                });
            });
    
    this.comision = ((this.costo*6.5)/100)
    this.total = parseInt(this.comision) + parseInt(this.costo)

    this.amount = (( this.total / 4563.89) * 100 )
  },
  methods: {
    async tokenCard() {
      const { error, paymentMethod } = await this.stripe.createPaymentMethod({
        type: "card",
        card: this.cardNumber,
        billing_details: {
          name: this.nameHolder,
          email: this.email,
          address: {
            country: "CO"
          },
        },
        payment_method_data: {
          card: {
            cvc: this.cardCvc._complete ? this.cardCvc._value : undefined
          }
        }
      });

      if (error) {
        this.statusBotton = false;
        console.error(error);
      } else {
        //this.statusBotton = true;
        //console.log(paymentMethod.id);
        const { id } = paymentMethod;

        await axios.post('https://backend-helptravel-production.up.railway.app/api/payment', {
          id,
          amount: parseInt(this.amount),
        })
          .then((respu) => {
            this.statusBotton = true;
          })
          .catch(error => {
            this.statusBotton = false;
            console.log(error);
          });

        await axios.post('https://backend-helptravel-production.up.railway.app/api/envio', {
          origin: "Bogota", 
          destinoCiudad: this.ciudad, 
          destinoDir: "Cra 70 # 70 70", 
          precioTotal: this.total, 
          diasHabiles: this.dias, 
          companyName: this.Company, 
          num_guia: "abc123"
        })
        setTimeout(() => {
                this.$router.push('/loading')
            }, 2700)
      }
    },

    /* - - - - - - - ANIMACION PARA EL BOTTON - - - - - - - - - */

    animateButton() {
      document.querySelectorAll('.truck-button').forEach(button => {
        button.addEventListener('click', e => {

          e.preventDefault();

          let box = button.querySelector('.box'),
            truck = button.querySelector('.truck');

          if (!button.classList.contains('done')) {

            if (!button.classList.contains('animation')) {

              button.classList.add('animation');

              gsap.to(button, {
                '--box-s': 1,
                '--box-o': 1,
                duration: .3,
                delay: .5
              });

              gsap.to(box, {
                x: 0,
                duration: .4,
                delay: .7
              });

              gsap.to(button, {
                '--hx': -5,
                '--bx': 50,
                duration: .18,
                delay: .92
              });

              gsap.to(box, {
                y: 0,
                duration: .1,
                delay: 1.15
              });

              gsap.set(button, {
                '--truck-y': 0,
                '--truck-y-n': -26
              });

              gsap.to(button, {
                '--truck-y': 1,
                '--truck-y-n': -25,
                duration: .2,
                delay: 1.25,
                onComplete() {
                  gsap.timeline({
                    onComplete() {
                      button.classList.add('done');
                    }
                  }).to(truck, {
                    x: 10,
                    duration: .4
                  }).to(truck, {
                    x: 40,
                    duration: 1
                  }).to(truck, {
                    x: 20,
                    duration: .6
                  }).to(truck, {
                    x: 280,
                    duration: .4
                  });
                  gsap.to(button, {
                    '--progress': 1,
                    duration: 2.4,
                    ease: "power2.in"
                  });
                }
              });

            }

          } else {
            button.classList.remove('animation', 'done');
            gsap.set(truck, {
              x: 4
            });
            gsap.set(button, {
              '--progress': 0,
              '--hx': 0,
              '--bx': 0,
              '--box-s': .5,
              '--box-o': 0,
              '--truck-y': 0,
              '--truck-y-n': -26
            });
            gsap.set(box, {
              x: -24,
              y: -6
            });
          }
        });
      });
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  },
};
</script>

<style scoped>
.pago-container {
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

.pago-max-width {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-self: center;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
}

.pago-container-sidelbar {
  flex: 0 0 auto;
  width: 210px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.pago-payment-container {
  width: 970px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.pago-content-container {
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

.pago-text-container {
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

.pago-text {
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-family: Open Sans;
  margin-bottom: var(--dl-space-space-unit);
}

.pago-text01 {
  color: var(--dl-color-backgrounds-primary);
}

.pago-text05 {
  color: #344767;
}

.pago-text08 {
  color: #344767;
}

.pago-text09 {
  color: #344767;
}

.pago-text10 {
  color: #344767;
  font-family: Open Sans;
  margin-bottom: var(--dl-space-space-unit);
}

.pago-container-max-width-cards {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: var(--dl-space-space-halfunit);
}

.pago-card-container {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius8);
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}

.pago-card-shipping-summary {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  max-width: auto;
  align-items: center;
  padding-top: var(--dl-space-space-oneandhalfunits);
  margin-right: 120px;
  padding-left: 0px;
  border-radius: 22px;
  padding-right: 0px;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-oneandhalfunits);
}

.pago-logo-back {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}

.pago-container-back {
  flex: 0 0 auto;
  width: auto;
  height: 28px;
  display: flex;
  align-items: center;
  margin-right: 6px;
}

.pago-icon {
  width: 12px;
  height: 12px;
}

.pago-container-back1 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: center;
}

.pago-image {
  width: 28px;
  height: 28px;
  object-fit: cover;
  margin-right: var(--dl-space-space-halfunit);
  border-radius: var(--dl-radius-radius-round);
}

.pago-text11 {
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}

.pago-container-contenido {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.pago-price-h1-total {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  margin-top: 32px;
  align-items: flex-start;
  margin-left: var(--dl-space-space-oneandhalfunits);
  margin-bottom: 16px;
  flex-direction: column;
}

.pago-text12 {
  color: hsla(0, 0%, 10%, 0.5);
  color: hsla(0, 0%, 10%, 0.6);
  font-size: 16px;
  word-break: break-word;
  font-weight: 500;
}

.pago-container-price {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}

.pago-text13 {
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -0.03rem;
  font-variant-numeric: tabular-nums;
}

.pago-text14 {
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -0.03rem;
  font-variant-numeric: tabular-nums;
}

.pago-product-seccion {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-left: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
}

.pago-container-product {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  box-shadow: 0px 0px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  border-radius: 16px;
  margin-bottom: var(--dl-space-space-halfunit);
  justify-content: flex-start;
}

.pago-logo {
  flex: 0 0 auto;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: flex-start;
  margin-right: 16px;
  flex-direction: column;
}

.pago-image1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}

.pago-name-product {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  margin-right: var(--dl-space-space-fourunits);
  flex-direction: column;
}

.pago-text15 {
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}

.pago-cantidad {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}

.pago-text16 {
  color: hsla(0, 0%, 10%, 0.5);
  font-size: 12px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}

.pago-text17 {
  color: hsla(0, 0%, 10%, 0.5);
  font-size: 12px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}

.pago-price {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-end;
  margin-left: 0px;
  flex-direction: column;
}

.pago-price-h1-total1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  margin: 0px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
}

.pago-container01 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}

.pago-text18 {
  color: hsla(0, 0%, 10%, 0.6);
  font-size: 14px;
  font-size: 16px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  word-break: break-word;
  font-weight: 500;
}

.pago-text19 {
  color: hsla(0, 0%, 10%, 0.6);
  font-size: 14px;
  font-size: 16px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  word-break: break-word;
  font-weight: 500;
}

.pago-container-price1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}

.pago-text20 {
  font-size: 12px;
  font-family: Open Sans;
}

.pago-text21 {
  color: hsla(0, 0%, 10%, 0.5);
  font-size: 12px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}

.pago-container-product1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  box-shadow: 0px 0px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  border-radius: 16px;
  margin-bottom: var(--dl-space-space-halfunit);
  justify-content: flex-start;
}

.pago-logo1 {
  flex: 0 0 auto;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: flex-start;
  margin-right: 16px;
  flex-direction: column;
}

.pago-image2 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}

.pago-name-product1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  margin-right: var(--dl-space-space-fourunits);
  flex-direction: column;
}

.pago-text22 {
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}

.pago-cantidad1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}

.pago-text23 {
  color: hsla(0, 0%, 10%, 0.5);
  font-size: 12px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}

.pago-text24 {
  color: hsla(0, 0%, 10%, 0.5);
  font-size: 12px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}

.pago-price1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-end;
  margin-left: 0px;
  flex-direction: column;
}

.pago-price-h1-total2 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  margin: 0px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
}

.pago-container02 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}

.pago-text25 {
  color: hsla(0, 0%, 10%, 0.6);
  font-size: 14px;
  font-size: 16px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  word-break: break-word;
  font-weight: 500;
}

.pago-text26 {
  color: hsla(0, 0%, 10%, 0.6);
  font-size: 14px;
  font-size: 16px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  word-break: break-word;
  font-weight: 500;
}

.pago-container-price2 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}

.pago-text27 {
  font-size: 12px;
  font-family: Open Sans;
}

.pago-text28 {
  color: hsla(0, 0%, 10%, 0.5);
  font-size: 12px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}

.pago-container-cotabili {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: center;
  align-items: center;
  margin-left: 16px;
  margin-right: 16px;
  flex-direction: column;
}

.pago-container03 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-left: var(--dl-space-space-fiveunits);
  padding-top: 16px;
  border-color: hsla(0, 0%, 10%, 0.1);
  border-style: solid;
  border-width: 1px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}

.pago-text29 {
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  margin-right: var(--dl-space-space-fourunits);
}

.pago-container04 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-left: var(--dl-space-space-fourunits);
  padding-top: 0px;
  padding-bottom: 0px;
  justify-content: flex-end;
}

.pago-text30 {
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}

.pago-container05 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-left: var(--dl-space-space-fiveunits);
  padding-top: 16px;
  border-color: hsla(0, 0%, 10%, 0.1);
  border-width: 1px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}

.pago-text32 {
  color: hsla(0, 0%, 10%, 0.5);
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  margin-right: 40px;
}

.pago-container06 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-left: var(--dl-space-space-fourunits);
  padding-top: 0px;
  padding-bottom: 0px;
  justify-content: flex-end;
}

.pago-text33 {
  color: hsla(0, 0%, 10%, 0.5);
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}

.pago-text34 {
  color: hsla(0, 0%, 10%, 0.5);
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}

.pago-container07 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-left: var(--dl-space-space-fiveunits);
  padding-top: 16px;
  margin-bottom: 16px;
  padding-bottom: 16px;
}

.pago-text35 {
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  margin-right: var(--dl-space-space-fourunits);
}

.pago-container08 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-left: var(--dl-space-space-fourunits);
  padding-top: 0px;
  padding-bottom: 0px;
  justify-content: flex-end;
}

.pago-text36 {
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}

.pago-text37 {
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
}

.pago-card-stripe {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  margin: 0px;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: 380px;
  box-shadow: -5px 0px 10px 0px #d4d4d4;
  align-items: center;
  border-radius: 16px;
  flex-direction: column;
}

.pago-max-width1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.pago-container09 {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-threeunits);
  flex-direction: column;
}

.pago-container-card-info {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}

.pago-text38 {
  color: var(--dl-color-grays-dark100);
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
}

.pago-textinput {
  width: 100%;
  height: 36px;
  font-size: 14px;
  box-shadow: 0 0 0 1px #e0e0e0, 0 2px 4px 0 rgba(0, 0, 0, 0.07),
    0 1px 1.5px 0 rgba(0, 0, 0, 0.05);
  margin-top: var(--dl-space-space-halfunit);
  transition: box-shadow 0.08s ease-in, color 0.08s ease-in, filter 50000s;
  font-family: Open Sans;
  line-height: 1.5;
  padding-top: var(--dl-space-space-halfunit);
  border-width: 0px;
  padding-left: 12px;
  border-radius: 6px;
  padding-right: 12px;
  padding-bottom: var(--dl-space-space-halfunit);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.pago-container10 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}

.pago-textinput1 {
  color: hsla(0, 0%, 10%, 0.9);
  width: 100%;
  height: 36px;
  font-size: 14px;
  box-shadow: 0 0 0 1px #e0e0e0, 0 2px 4px 0 rgba(0, 0, 0, 0.07),
    0 1px 1.5px 0 rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.08s ease-in, color 0.08s ease-in, filter 50000s;
  font-family: Open Sans;
  line-height: 1.5;
  padding-top: var(--dl-space-space-halfunit);
  border-width: 0px;
  padding-left: 12px;
  border-radius: 6px;
  padding-right: 12px;
  padding-bottom: var(--dl-space-space-halfunit);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.pago-textinput2 {
  color: hsla(0, 0%, 10%, 0.9);
  width: 100%;
  height: 36px;
  font-size: 14px;
  box-shadow: 0 0 0 1px #e0e0e0, 0 2px 4px 0 rgba(0, 0, 0, 0.07),
    0 1px 1.5px 0 rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.08s ease-in, color 0.08s ease-in, filter 50000s;
  font-family: Open Sans;
  line-height: 1.5;
  padding-top: var(--dl-space-space-halfunit);
  border-width: 0px;
  padding-left: 12px;
  border-radius: 6px;
  padding-right: 12px;
  padding-bottom: var(--dl-space-space-halfunit);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.pago-container-info-card {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.pago-text41 {
  color: var(--dl-color-grays-dark100);
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
}

.pago-textinput3 {
  color: hsla(0, 0%, 10%, 0.9);
  width: 100%;
  height: 36px;
  font-size: 14px;
  box-shadow: 0 0 0 1px #e0e0e0, 0 2px 4px 0 rgba(0, 0, 0, 0.07),
    0 1px 1.5px 0 rgba(0, 0, 0, 0.05);
  margin-top: var(--dl-space-space-halfunit);
  transition: box-shadow 0.08s ease-in, color 0.08s ease-in, filter 50000s;
  font-family: Open Sans;
  line-height: 1.5;
  padding-top: var(--dl-space-space-halfunit);
  border-width: 0px;
  padding-left: 12px;
  border-radius: 6px;
  margin-bottom: var(--dl-space-space-unit);
  padding-right: 12px;
  padding-bottom: var(--dl-space-space-halfunit);
}

.pago-text44 {
  color: var(--dl-color-grays-dark100);
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
}

.pago-textinput4 {
  color: hsla(0, 0%, 10%, 0.9);
  width: 100%;
  height: 36px;
  font-size: 14px;
  box-shadow: 0 0 0 1px #e0e0e0, 0 2px 4px 0 rgba(0, 0, 0, 0.07),
    0 1px 1.5px 0 rgba(0, 0, 0, 0.05);
  margin-top: var(--dl-space-space-halfunit);
  transition: box-shadow 0.08s ease-in, color 0.08s ease-in, filter 50000s;
  font-family: Open Sans;
  line-height: 1.5;
  padding-top: var(--dl-space-space-halfunit);
  border-width: 0px;
  padding-left: 12px;
  border-radius: 6px;
  margin-bottom: var(--dl-space-space-unit);
  padding-right: 12px;
  padding-bottom: var(--dl-space-space-halfunit);
}

.pago-text47 {
  color: var(--dl-color-grays-dark100);
  font-size: 14px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
}

.pago-select {
  color: rgba(26, 26, 26, 0.6);
  font-family: inherit;
  width: 100%;
  height: 36px;
  box-shadow: 0 0 0 1px #e0e0e0, 0 2px 4px 0 rgba(0, 0, 0, 0.07),
    0 1px 1.5px 0 rgba(0, 0, 0, 0.05);
  margin-top: var(--dl-space-space-halfunit);
  padding-top: var(--dl-space-space-halfunit);
  border-color: var(--dl-color-grays-black100);
  border-width: 0px;
  padding-left: 12px;
  border-radius: 6px;
  padding-right: 12px;
  padding-bottom: var(--dl-space-space-halfunit);
}

.pago-container-botton {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-oneandhalfunits);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  align-items: flex-start;
  flex-direction: column;
}

@media (max-width: 767px) {
  .pago-card-shipping-summary {
    width: 50%;
  }

  .pago-card-stripe {
    width: 50%;
  }
}

@media (max-width: 479px) {
  .pago-card-shipping-summary {
    width: 100%;
  }

  .pago-card-stripe {
    width: 100%;
  }
}

/* - - - - - - - - CSS DE EL BOTTON - - - - - - - -  */
.truck-button {
  --color: #fff;
  --background: #2b3044;
  --tick: #16bf78;
  --base: #0d0f18;
  --wheel: #2b3044;
  --wheel-inner: #646b8c;
  --wheel-dot: #fff;
  --back: linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0.00%, rgb(250, 121, 48) 63.00%);
  ;
  --back-inner: var(--dl-color-backgrounds-primary);
  --back-inner-shadow: #535A79;
  --front: #a6accd;
  --front-shadow: #535a79;
  --front-light: #fff8b1;
  --window: #2b3044;
  --window-shadow: #404660;
  --street: #646b8c;
  --street-fill: #404660;
  --box: #dcb97a;
  --box-shadow: #b89b66;
  padding: 12px 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-align: center;
  position: relative;
  border: none;
  outline: none;
  color: var(--dl-color-grays-white100);
  background-color: transparent;
  background-image: linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0.00%, rgb(250, 121, 48) 63.00%);
  border-radius: var(--br, 5px);
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  transform-style: preserve-3d;
  transform: rotateX(var(--rx, 0deg)) translateZ(0);
  transition: transform 0.5s, border-radius 0.3s linear var(--br-d, 0s);
}

.truck-button:before,
.truck-button:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 6px;
  display: block;
  background: var(--b, var(--street));
  transform-origin: 0 100%;
  transform: rotateX(90deg) scaleX(var(--sy, 1));
}

.truck-button:after {
  --sy: var(--progress, 0);
  --b: var(--street-fill);
}

.truck-button .default,
.truck-button .success {
  display: block;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  opacity: var(--o, 1);
  transition: opacity 0.3s;
}

.truck-button .success {
  --o: 0;
  position: absolute;
  top: 12px;
  left: 0;
  right: 0;
}

.truck-button .success svg {
  width: 12px;
  height: 10px;
  display: inline-block;
  vertical-align: top;
  fill: none;
  margin: 7px 0 0 4px;
  stroke: var(--tick);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: var(--offset, 16px);
  transition: stroke-dashoffset 0.4s ease 0.45s;
}

.truck-button .truck {
  position: absolute;
  width: 72px;
  height: 28px;
  transform: rotateX(90deg) translate3d(var(--truck-x, 4px), calc(var(--truck-y-n, -26) * 1px), 12px);
}

.truck-button .truck:before,
.truck-button .truck:after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: var(--l, 18px);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  z-index: 2;
  box-shadow: inset 0 0 0 2px var(--wheel), inset 0 0 0 4px var(--wheel-inner);
  background: var(--wheel-dot);
  transform: translateY(calc(var(--truck-y) * -1px)) translateZ(0);
}

.truck-button .truck:after {
  --l: 54px;
}

.truck-button .truck .wheel,
.truck-button .truck .wheel:before {
  position: absolute;
  bottom: var(--b, -6px);
  left: var(--l, 6px);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--wheel);
  transform: translateZ(0);
}

.truck-button .truck .wheel {
  transform: translateY(calc(var(--truck-y) * -1px)) translateZ(0);
}

.truck-button .truck .wheel:before {
  --l: 35px;
  --b: 0;
  content: '';
}

.truck-button .truck .front,
.truck-button .truck .back,
.truck-button .truck .box {
  position: absolute;
}

.truck-button .truck .back {
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 47px;
  height: 28px;
  border-radius: 1px 1px 0 0;
  background: linear-gradient(68deg, var(--back-inner) 0%, var(--back-inner) 22%, var(--back-inner-shadow) 22.1%, var(--back-inner-shadow) 100%);
}

.truck-button .truck .back:before,
.truck-button .truck .back:after {
  content: '';
  position: absolute;
}

.truck-button .truck .back:before {
  left: 11px;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  border-radius: 0 1px 0 0;
  background: var(--back);
}

.truck-button .truck .back:after {
  border-radius: 1px;
  width: 73px;
  height: 2px;
  left: -1px;
  bottom: -2px;
  background: var(--base);
}

.truck-button .truck .front {
  left: 47px;
  bottom: -1px;
  height: 22px;
  width: 24px;
  -webkit-clip-path: polygon(55% 0, 72% 44%, 100% 58%, 100% 100%, 0 100%, 0 0);
  clip-path: polygon(55% 0, 72% 44%, 100% 58%, 100% 100%, 0 100%, 0 0);
  background: linear-gradient(84deg, var(--front-shadow) 0%, var(--front-shadow) 10%, var(--front) 12%, var(--front) 100%);
}

.truck-button .truck .front:before,
.truck-button .truck .front:after {
  content: '';
  position: absolute;
}

.truck-button .truck .front:before {
  width: 7px;
  height: 8px;
  background: #fff;
  left: 7px;
  top: 2px;
  -webkit-clip-path: polygon(0 0, 60% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(0 0, 60% 0%, 100% 100%, 0% 100%);
  background: linear-gradient(59deg, var(--window) 0%, var(--window) 57%, var(--window-shadow) 55%, var(--window-shadow) 100%);
}

.truck-button .truck .front:after {
  width: 3px;
  height: 2px;
  right: 0;
  bottom: 3px;
  background: var(--front-light);
}

.truck-button .truck .box {
  width: 13px;
  height: 13px;
  right: 56px;
  bottom: 0;
  z-index: 1;
  border-radius: 1px;
  overflow: hidden;
  transform: translate(calc(var(--box-x, -24) * 1px), calc(var(--box-y, -6) * 1px)) scale(var(--box-s, 0.5));
  opacity: var(--box-o, 0);
  background: linear-gradient(68deg, var(--box) 0%, var(--box) 50%, var(--box-shadow) 50.2%, var(--box-shadow) 100%);
  background-size: 250% 100%;
  background-position-x: calc(var(--bx, 0) * 1%);
}

.truck-button .truck .box:before,
.truck-button .truck .box:after {
  content: '';
  position: absolute;
}

.truck-button .truck .box:before {
  content: '';
  background: rgba(255, 255, 255, .2);
  left: 0;
  right: 0;
  top: 6px;
  height: 1px;
}

.truck-button .truck .box:after {
  width: 6px;
  left: 100%;
  top: 0;
  bottom: 0;
  background: var(--back);
  transform: translateX(calc(var(--hx, 0) * 1px));
}

.truck-button.animation {
  --rx: -90deg;
  --br: 0;
}

.truck-button.animation .default {
  --o: 0;
}

.truck-button.animation.done {
  --rx: 0deg;
  --br: 5px;
  --br-d: 0.2s;
}

.truck-button.animation.done .success {
  --o: 1;
  --offset: 0;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: inherit;
}

*:before,
*:after {
  box-sizing: inherit;
}

/* - - - - - - - - FINAL DE CSS DE BOTTON - - - - - - - - */
</style>
