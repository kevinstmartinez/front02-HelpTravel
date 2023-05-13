<template>
    <div class="envio04-container">
        <div class="envio04-max-width">
            <div class="envio04-container-sidelbar"><app-sidelbar></app-sidelbar></div>
            <div class="envio04-menu-container">
                <app-navbar1></app-navbar1>
                <div class="envio04-content-container">
                    <div class="envio04-passenger-location">
                        <div class="envio04-max-width1">
                            <h1 class="envio04-text">Y.. ¿ Donde esta ?</h1>
                            <span class="envio04-text01">
                                <span>
                                    Para ser más efectivos y rápidos, habilite el GPS,
                                    <span v-html="raw9cd2"></span>
                                </span>
                                <br />
                                <span>
                                    además, denos una descripción de su ubicación
                                    <span v-html="raw30qw"></span>
                                </span>
                                <br />
                                <span>dentro del aeropuerto </span>
                                <br />
                            </span>
                        </div>
                        <div class="envio04-max-width2">
                            <div class="envio04-container1">
                                <textarea placeholder="..Ejem.. Al frente del OMA local 301 piso 3..."
                                    class="envio04-textarea textarea"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="envio04-destiny-location">
                        <div class="envio04-max-width3">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28983.933946670255!2d-74.14663765883155!3d4.688653393887887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9cb6430f8607%3A0x8eea5954ef14af30!2sAeropuerto%20Internacional%20El%20Dorado%20-%20Bogot%C3%A1%20(BOG)!5e0!3m2!1ses!2sco!4v1668815006214!5m2!1ses!2sco"
                                class="envio04-iframe"></iframe>
                        </div>
                        <div class="envio04-max-width4">
                            <form class="envio04-form">
                                <div class="envio04-container2">
                                    <label class="envio04-text08">Dirección de Envio</label>
                                    <select v-model="departamentoSelect" @change="listarciudad" required class="envio04-select">
                                        <option value="" disabled selected>Departamentos</option>
                                        <option v-for="departamento in departamentos" :key="departamento.id"
                                            :value="departamento.id">
                                            {{ departamento.departamento }}
                                        </option>
                                    </select>
                                    <select v-model="ciudadesSelect" required class="envio04-select1">
                                        <option value="" disabled selected>Ciudades</option>
                                        <option v-for="ciudad in ciudades" :key="ciudad" :value="ciudad">{{ ciudad }}</option>
                                    </select>
                                </div>
                                <div class="envio04-container3">
                                    <label class="envio04-text09">
                                        <span>Tipo de domicilio</span>
                                        <br />
                                    </label>
                                    <input type="text" required autofocus placeholder="Ej. Cra 5 # 21-38"
                                        class="envio04-textinput2 input" />
                                    <input type="text" required autofocus placeholder="Ej. Apartamento, Conjunto, Casa.."
                                        class="envio04-textinput3 input" />
                                    <textarea placeholder="Si tiene mas indicaciones, dejelas aqui"
                                        class="envio04-textarea1 textarea"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="envio04-bottom-container">
                        <div class="envio04-destiny-location1">
                            <div class="envio04-max-width5">
                                <div class="envio04-container4">
                                    <button class="envio04-button button" @click="enviarCiudad">
                                        <span>
                                            <span class="envio04-text13">Siguiente</span>
                                            <br />
                                        </span>
                                    </button>
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
import axios from 'axios';
import AppSidelbar from '../components/sidelbar.vue'
import AppNavbar1 from '../components/navbar1.vue'

export default {
    name: 'Envio04',
    props: {},
    components: {
        AppSidelbar,
        AppNavbar1,
    },

    data() {
        return {
            raw9cd2: ' ',
            raw30qw: ' ',

            departamentos: [],
            departamentoSelect: '',
            ciudades: [],
            ciudadesSelect: ''
        }
    },
    mounted() {
        this.listarDepart();
        //this.listarciudad();
    },
    methods: {
        listarDepart() {
            axios.get('http://localhost:3001/api/listarDp')
            .then(respuesta => {
                this.departamentos = respuesta.data.data;
            })
            .catch(error => {
                this.$swal({
                    title: 'ERROR',
                    text: '¡Upss paso algo los departamento!',
                    icon: 'warning',
                    confirmButtonColor: 'red',
                });
            });
        },
        listarciudad(){
            if(this.departamentoSelect !== ''){
                this.ciudades = this.departamentos.find(depa => depa.id === this.departamentoSelect)?.ciudades || []
            }
        },
        enviarCiudad() {
            this.$router.push({
                path: '/cotizacion',
                query: {
                    ciudad: this.ciudadesSelect
                }
            });
        }
    }
}
</script>
  
<style scoped>
.envio04-container {
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

.envio04-max-width {
    width: 100%;
    height: auto;
    display: flex;
    align-self: center;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: row;
    padding-bottom: var(--dl-space-space-unit);
}

.envio04-container-sidelbar {
    width: 210px;
    height: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.envio04-menu-container {
    width: 970px;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.envio04-content-container {
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

.envio04-passenger-location {
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    padding: var(--dl-space-space-halfunit);
    box-shadow: 0px 0px 10px 0px #d4d4d4;
    align-items: center;
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: var(--dl-space-space-unit);
    justify-content: center;
    background-color: var(--dl-color-gray-white);
}

.envio04-max-width1 {
    flex: 0 0 auto;
    display: flex;
    padding: var(--dl-space-space-unit);
    align-items: flex-start;
    margin-left: var(--dl-space-space-twounits);
    margin-right: var(--dl-space-space-twounits);
    flex-direction: column;
}

.envio04-text {
    color: var(--dl-color-backgrounds-primary);
    font-size: 20px;
    font-family: Open Sans;
    margin-bottom: var(--dl-space-space-halfunit);
}

.envio04-text01 {
    color: rgb(41, 37, 36);
    font-style: normal;
    font-family: Open Sans;
    font-weight: 600;
}

.envio04-max-width2 {
    flex: 0 0 auto;
    width: 373px;
    height: 99px;
    display: flex;
    padding: var(--dl-space-space-unit);
    align-items: flex-start;
    flex-direction: column;
}

.envio04-container1 {
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.envio04-textarea {
    color: #495057;
    width: 100%;
    height: 100%;
    font-size: 13px;
    max-height: var(--dl-size-size-medium);
    border-color: #afafaf;
}

.envio04-destiny-location {
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    padding: var(--dl-space-space-halfunit);
    box-shadow: 0px 0px 10px 0px #d4d4d4;
    align-items: center;
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: var(--dl-space-space-threeunits);
    justify-content: center;
    background-color: var(--dl-color-gray-white);
}

.envio04-max-width3 {
    flex: 0 0 auto;
    height: 291px;
    display: flex;
    padding: var(--dl-space-space-unit);
    align-items: flex-start;
    margin-left: var(--dl-space-space-twounits);
    margin-right: var(--dl-space-space-twounits);
    flex-direction: column;
}

.envio04-iframe {
    width: 420px;
    height: 260px;
    box-shadow: 0 .25rem .375rem -.0625rem rgba(20, 20, 20, .12), 0 .125rem .25rem -.0625rem rgba(20, 20, 20, .07) !important;
    border-radius: var(--dl-radius-radius-radius8);
}

.envio04-max-width4 {
    flex: 0 0 auto;
    display: flex;
    padding: var(--dl-space-space-unit);
    align-items: flex-start;
    flex-direction: column;
}

.envio04-form {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: row;
}

.envio04-container2 {
    flex: 0 0 auto;
    width: 200px;
    display: flex;
    align-self: flex-start;
    align-items: flex-start;
    flex-direction: column;
}

.envio04-text08 {
    color: rgb(41, 37, 36);
    font-size: 20px;
    align-self: flex-start;
    font-style: normal;
    font-family: Open Sans;
    font-weight: 700;
    padding-bottom: var(--dl-space-space-unit);
}

.envio04-textinput {
    color: #495057;
    height: 100%;
    display: none;
    font-size: 13px;
    appearance: none;
    transition: 0.3s;
    font-weight: 400;
    line-height: 22, 4px;
    padding-top: var(--dl-space-space-halfunit);
    border-color: #afafaf;
    padding-left: 12px;
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
    padding-right: 12px;
    padding-bottom: var(--dl-space-space-halfunit);
    background-clip: padding-box;
}

.envio04-textinput:focus {
    box-shadow: 0px 0px 10px 0px #fa7930;
    border-color: var(--dl-color-backgrounds-primary);
    border-style: dotted;
}

.envio04-select {
    color: #495057;
    width: 177px;
    height: 100%;
    display: block;
    font-size: 13px;
    transition: 0.3s;
    font-weight: 400;
    line-height: 22.4px;
    padding-top: var(--dl-space-space-halfunit);
    border-color: #afafaf;
    border-style: solid;
    border-width: 1px;
    padding-left: 12px;
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
    padding-right: 12px;
    padding-bottom: var(--dl-space-space-halfunit);
    background-clip: padding-box;
}

.envio04-select:focus {
    box-shadow: 0px 0px 10px 0px #ff983f;
    border-color: #ff983f;
    border-style: dotted;
}

.envio04-textinput1 {
    color: #495057;
    height: 100%;
    display: none;
    font-size: 13px;
    appearance: none;
    transition: 0.3s;
    font-weight: 400;
    line-height: 22, 4px;
    padding-top: var(--dl-space-space-halfunit);
    border-color: #afafaf;
    padding-left: 12px;
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
    padding-right: 12px;
    padding-bottom: var(--dl-space-space-halfunit);
    background-clip: padding-box;
}

.envio04-textinput1:focus {
    box-shadow: 0px 0px 10px 0px #fa7930;
    border-color: var(--dl-color-backgrounds-primary);
    border-style: dotted;
}

.envio04-select1 {
    color: #495057;
    width: 177px;
    height: 100%;
    display: block;
    font-size: 13px;
    transition: 0.3s;
    font-weight: 400;
    line-height: 22.4px;
    padding-top: var(--dl-space-space-halfunit);
    border-color: #afafaf;
    border-style: solid;
    border-width: 1px;
    padding-left: 12px;
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
    padding-right: 12px;
    padding-bottom: var(--dl-space-space-halfunit);
    background-clip: padding-box;
}

.envio04-select1:focus {
    box-shadow: 0px 0px 10px 0px #ff983f;
    border-color: #ff983f;
    border-style: dotted;
}

.envio04-container3 {
    flex: 0 0 auto;
    width: auto;
    height: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.envio04-text09 {
    color: #292524;
    width: auto;
    height: auto;
    font-size: 20px;
    font-style: normal;
    font-family: Open Sans;
    font-weight: 700;
    padding-top: 0px;
    padding-bottom: var(--dl-space-space-unit);
}

.envio04-textinput2 {
    color: #495057;
    height: 100%;
    display: block;
    font-size: 13px;
    appearance: none;
    transition: 0.3s;
    font-weight: 400;
    line-height: 22, 4px;
    padding-top: var(--dl-space-space-halfunit);
    border-color: #afafaf;
    padding-left: 12px;
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
    padding-right: 12px;
    padding-bottom: var(--dl-space-space-halfunit);
    background-clip: padding-box;
}

.envio04-textinput2:focus {
    box-shadow: 0px 0px 10px 0px #fa7930;
    border-color: var(--dl-color-backgrounds-primary);
    border-style: dotted;
}

.envio04-textinput3 {
    color: #495057;
    height: 100%;
    display: block;
    font-size: 13px;
    appearance: none;
    transition: 0.3s;
    font-weight: 400;
    line-height: 22, 4px;
    padding-top: var(--dl-space-space-halfunit);
    border-color: #afafaf;
    padding-left: 12px;
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
    padding-right: 12px;
    padding-bottom: var(--dl-space-space-halfunit);
    background-clip: padding-box;
}

.envio04-textinput3:focus {
    box-shadow: 0px 0px 10px 0px #fa7930;
    border-color: var(--dl-color-backgrounds-primary);
    border-style: dotted;
}

.envio04-textarea1 {
    color: #495057;
    height: 129px;
    font-size: 13px;
    max-height: 129px;
    border-color: #afafaf;
}

.envio04-bottom-container {
    flex: 0 0 auto;
    width: auto;
    height: auto;
    display: flex;
    align-self: flex-end;
    align-items: center;
    flex-direction: column;
}

.envio04-destiny-location1 {
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    padding: var(--dl-space-space-halfunit);
    align-items: center;
    border-radius: var(--dl-radius-radius-radius8);
    justify-content: center;
}

.envio04-max-width5 {
    flex: 0 0 auto;
    display: flex;
    padding: var(--dl-space-space-unit);
    align-items: flex-start;
    flex-direction: column;
}

.envio04-container4 {
    flex: 0 0 auto;
    width: 200px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.envio04-button {
    color: #ffffa1;
    width: 100%;
    height: auto;
    font-size: 12px;
    align-self: center;
    margin-top: 0px;
    text-align: center;
    transition: 0.3s;
    font-family: Open Sans;
    border-color: transparent;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #ff983f;
}

.envio04-button:active {
    color: #ff983f;
    width: 100%;
    background-color: #ffffa1;
}

.envio04-text13:hover {
    width: var(--dl-size-size-medium);
}

.envio04-text13:active {
    width: var(--dl-size-size-medium);
}
</style>
  
  