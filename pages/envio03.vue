<template>
    <div class="envio03-container">
        <div class="envio03-max-width">
            <div class="envio03-container-sidelbar">
                <app-sidelbar></app-sidelbar>
                <router-view />
            </div>
            <div class="envio03-menu-container">
                <app-navbar1 :menuItem="menuItem"></app-navbar1>
                <div class="envio03-content-container">
                    <div class="envio03-container-articulo">
                        <div class="envio03-text-container">
                            <div class="envio03-max-width-input">
                                <form @submit.prevent="obtenerDataEnvio" class="envio03-form">
                                    <div class="envio03-container1">
                                        <select v-model="categoriaSelect" class="envio03-select">
                                            <option value="" disabled selected>Categorias</option>
                                            <option v-for="categoria in categorias" :key="categoria.id_Categories"
                                                :value="categoria.id_Categories">
                                                {{ categoria.nameCategories }}
                                            </option>
                                        </select>
                                        <input type="number" v-model="NumItems" required autofocus
                                            placeholder="Number Item's" class="envio03-textinput input" />
                                    </div>
                                    <div class="envio03-container2">
                                        <label for="value" class="label-text">Monto Minimo $ 10.000</label>
                                        <input id="value" type="number" v-model="valuesItems" required autofocus
                                            placeholder="Precio Declarado" class="envio03-textinput1 input" />
                                        <input type="number" v-model="peso" required autofocus placeholder="PESO Aproximado"
                                            class="envio03-textinput2 input" />
                                        <button type="submit" class="envio03-button button">
                                            <span>
                                                <span>Add +</span>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="envio03-card-container">
                            <div class="envio03-max-width-table">
                                <div class="envio03-table">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="card mb-4">
                                                <div class="card-body px-0 pt-0 pb-2">
                                                    <div class="table-responsive p-0">
                                                        <table class="table align-items-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th
                                                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                                        Categoria </th>
                                                                    <th
                                                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                                        Numero Items </th>
                                                                    <th
                                                                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                                        Peso </th>
                                                                    <th
                                                                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                                        Precio Declarado </th>
                                                                    <th class="text-secondary opacity-7"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr v-for="itemCar in itemsCar" :key="itemCar.id">
                                                                    <td>
                                                                        <div class="d-flex px-2 py-1">
                                                                            <div
                                                                                class="d-flex flex-column justify-content-center">
                                                                                <h6 class="mb-0 text-sm">
                                                                                    {{ itemCar.category_name }}</h6>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <p class="text-xs font-weight-bold mb-0">
                                                                            {{ itemCar.quantity }}</p>
                                                                    </td>
                                                                    <td class="align-middle text-center text-sm">
                                                                        <span
                                                                            class="badge bg-gradient-success badge-sm null null">{{ itemCar.weight }}Kg</span>
                                                                    </td>
                                                                    <td>
                                                                        <p class="text-xs font-weight-bold mb-0">
                                                                            {{ itemCar.declared_value }}</p>
                                                                    </td>
                                                                    <td class="align-middle">
                                                                        <button class="font-weight-bold style-button"
                                                                            @click="deleteItem(itemCar.id)">Eliminar</button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="envio03-conteiner-text">
                                    <h1 class="envio03-heading">Caja:</h1>
                                    <span class="envio03-text03" v-if="box">[ {{ box.box }} ]</span>
                                </div>
                                <div class="envio03-conteiner-text1">
                                    <h1 class="envio03-text044">Alto:</h1>
                                    <span class="envio03-text055" v-if="box">[ {{ box.height }} cm ]</span>
                                </div>
                                <div class="envio03-conteiner-text1">
                                    <h1 class="envio03-text044">Ancho:</h1>
                                    <span class="envio03-text055" v-if="box">[ {{ box.width }} cm ]</span>
                                </div>
                                <div class="envio03-conteiner-text2">
                                    <h1 class="envio03-text06">Largo:</h1>
                                    <span class="envio03-text07" v-if="box">[ {{ box.length }} cm ]</span>
                                </div>
                                <div class="envio03-conteiner-text1-oringin">
                                    <h1 class="envio03-text4">Peso: </h1>
                                    <span class="envio03-text5">
                                        <span>{{ pesoBox }} Kg</span>
                                        <br />
                                    </span>
                                    <h1 class="envio03-text4">Precio Total Paquete: </h1>
                                    <span class="envio03-text5">
                                        <span>{{ totalValue }}</span>
                                        <br />
                                    </span>
                                </div>
                            </div>
                            <div class="envio03-container-button">
                                <button @click="paguinacion" class="envio03-button1 button">
                                    <svg viewBox="0 0 841.1428571428571 1024" class="envio03-icon">
                                        <path
                                            d="M841.143 548.571c0 19.429-7.429 38.286-21.143 52l-372 372c-13.714 13.143-32.571 21.143-52 21.143s-37.714-8-51.429-21.143l-42.857-42.857c-13.714-13.714-21.714-32.571-21.714-52s8-38.286 21.714-52l167.429-167.429h-402.286c-41.143 0-66.857-34.286-66.857-73.143v-73.143c0-38.857 25.714-73.143 66.857-73.143h402.286l-167.429-168c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-51.429l42.857-42.857c13.714-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l372 372c13.714 13.143 21.143 32 21.143 51.429z">
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
import AppSidelbar from '../components/sidelbar.vue'
import AppNavbar1 from '../components/navbar1.vue'

export default {
    name: 'Envio03',
    props: {},
    components: {
        AppSidelbar,
        AppNavbar1,
    },
    data() {
        return {

            menuItem: "Contenido del Paquete",

            categorias: [],
            categoriaSelect: '',
            itemsCar: [],
            SelectItemCart: '',
            box: [],
            pesoBox: '',
            totalValue: '',
            NumItems: '',
            peso: '',
            valuesItems: '',

            initialValues: {}

        }
    },
    mounted() {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

        axios.get('https://backend-helptravel-production.up.railway.app/api/categori')
            .then(respuesta => {
                this.categorias = respuesta.data
            })
            .catch(error => {
                this.$swal({
                    title: 'ERROR',
                    text: '¡Upss paso algo con las categorias!',
                    icon: 'warning',
                    confirmButtonColor: 'red',
                });
            });
        axios.get('https://backend-helptravel-production.up.railway.app/api/get-Cart')
            .then(respuesta => {
                this.itemsCar = respuesta.data.cart
                this.box = respuesta.data.assigned_box
                this.pesoBox = respuesta.data.totalWeight
                this.totalValue = respuesta.data.totalValue
            })
            .catch(error => {
                this.$swal({
                    title: 'ERROR',
                    text: '¡Upss paso algo en la tabla!',
                    icon: 'warning',
                    confirmButtonColor: 'red',
                });
            });

        this.initialValues = {
            categoriaSelect: this.categoriaSelect,
            NumItems: this.NumItems,
            valuesItems: this.valuesItems,
            peso: this.peso
        };
    },
    methods: {
        async obtenerDataEnvio() {
            
            let totalpeso = parseInt(this.peso) + this.pesoBox

            if (totalpeso <= 50 ) {

                await axios.post('https://backend-helptravel-production.up.railway.app/api/send-Cart', {
                    id_category: this.categoriaSelect,
                    quantity: this.NumItems,
                    weight: this.peso,
                    declaredValue: this.valuesItems
                })
                    .then(respu => {
                        //console.log(respu.data);
                    })
                    .catch(error => {
                        this.$swal({
                            title: 'ERROR',
                            text: '¡Ingrese de nuevo los datos del envio!',
                            icon: 'warning',
                            confirmButtonColor: 'red',
                        });
                    });

                await axios.get('https://backend-helptravel-production.up.railway.app/api/get-Cart')
                    .then(respuesta => {
                        this.itemsCar = respuesta.data.cart
                        this.box = respuesta.data.assigned_box
                        this.pesoBox = respuesta.data.totalWeight
                        this.totalValue = respuesta.data.totalValue
                    })
                    .catch(error => {
                        this.$swal({
                            title: 'ERROR',
                            text: '¡Upss paso algo en la tabla!',
                            icon: 'warning',
                            confirmButtonColor: 'red',
                        });
                    });


                this.categoriaSelect = this.initialValues.categoriaSelect;
                this.NumItems = this.initialValues.NumItems;
                this.valuesItems = this.initialValues.valuesItems;
                this.peso = this.initialValues.peso;

            } else {

                this.$swal({
                            title: 'ERROR',
                            text: '¡Sobrepaso el limite de peso!',
                            icon: 'warning',
                            confirmButtonColor: 'red',
                        });

                this.categoriaSelect = this.initialValues.categoriaSelect;
                this.NumItems = this.initialValues.NumItems;
                this.valuesItems = this.initialValues.valuesItems;
                this.peso = this.initialValues.peso;
            }

        },

        async deleteItem(id) {
            await axios.delete('https://backend-helptravel-production.up.railway.app/api/deleteItemCart/' + id)
                .then(res => {
                    console.log(res);
                })
                .catch(e => {
                    console.log(e);
                });

            await axios.get('https://backend-helptravel-production.up.railway.app/api/get-Cart')
                .then(respuesta => {
                    this.itemsCar = respuesta.data.cart
                    this.box = respuesta.data.assigned_box
                    this.pesoBox = respuesta.data.totalWeight
                    this.totalValue = respuesta.data.totalValue
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

        paguinacion() {
            this.$router.push('/envio04')
        },
    },
}

</script>
  
<style scoped>
.style-button {
    font-size: .75rem !important;
    color: #bc6c25;
    border-radius: 12px;
}

.style-button:hover {
    background-color: red;
    color: white;
}

.style-button:active {
    background-color: #ecd79b;
    color: #ecd79b;
}

.label-text {
    align-self: flex-start;
    margin-left: var(--dl-space-space-oneandhalfunits);
    font-style: italic;
    font-weight: 600;
    font-family: Open Sans;
    font-size: 10px;
    margin-bottom: var(--dl-space-space-halfunit);
    color: #78716c;
}

.envio03-container {
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

.envio03-max-width {
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

.envio03-container-sidelbar {
    width: 210px;
    height: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.envio03-menu-container {
    width: 970px;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.envio03-content-container {
    flex: 0 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    padding: var(--dl-space-space-oneandhalfunits);
    align-self: flex-start;
    align-items: flex-start;
    border-radius: 16px;
    flex-direction: column;
    background-color: #EEEEEE;
}

.envio03-container-articulo {
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    align-self: flex-start;
    align-items: flex-start;
    flex-direction: column;
}

.envio03-text-container {
    flex: 0 0 auto;
    width: auto;
    height: auto;
    display: flex;
    padding: var(--dl-space-space-halfunit);
    align-self: flex-start;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    align-items: center;
    border-radius: var(--dl-radius-radius-radius8);
    flex-direction: column;
    background-color: var(--dl-color-gray-white);
}

.envio03-max-width-input {
    flex: 0 0 auto;
    width: auto;
    height: auto;
    display: flex;
    padding: var(--dl-space-space-halfunit);
    align-items: flex-start;
    flex-direction: column;
}

.envio03-form {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
}

.envio03-container1 {
    flex: 0 0 auto;
    width: auto;
    height: 33px;
    margin: 0px;
    display: flex;
    align-items: flex-start;
    margin-top: 18px;
}

.envio03-select {
    color: #495057;
    width: 177px;
    height: 100%;
    display: block;
    font-size: 13px;
    transition: 0.3s;
    font-weight: 400px;
    line-height: 22.4px;
    padding-top: var(--dl-space-space-halfunit);
    border-color: #afafaf;
    border-width: 1px;
    padding-left: 12px;
    border-radius: var(--dl-radius-radius-radius8);
    padding-right: 12px;
    padding-bottom: var(--dl-space-space-halfunit);
    background-clip: padding-box;
}

.envio03-textinput {
    color: #495057;
    height: auto;
    display: block;
    font-size: 13px;
    appearance: none;
    transition: 0.3s;
    font-weight: 400;
    line-height: 22, 4px;
    margin-left: var(--dl-space-space-oneandhalfunits);
    padding-top: var(--dl-space-space-halfunit);
    border-color: #afafaf;
    margin-right: var(--dl-space-space-oneandhalfunits);
    padding-left: 12px;
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
    padding-right: 12px;
    padding-bottom: var(--dl-space-space-halfunit);
    background-clip: padding-box;
}

.envio03-textinput:focus {
    box-shadow: 0px 0px 10px 0px #fa7930;
    border-color: var(--dl-color-backgrounds-primary);
    border-style: dotted;
}

.envio03-container2 {
    flex: 0 0 auto;
    width: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.envio03-textinput1 {
    color: #495057;
    height: auto;
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

.envio03-textinput1:focus {
    box-shadow: 0px 0px 10px 0px #fa7930;
    border-color: var(--dl-color-backgrounds-primary);
    border-style: dotted;
}

.envio03-textinput2 {
    color: #495057;
    height: auto;
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

.envio03-textinput2:focus {
    box-shadow: 0px 0px 10px 0px #fa7930;
    border-color: var(--dl-color-backgrounds-primary);
    border-style: dotted;
}

.envio03-button {
    color: #ffffa1;
    width: 100%;
    height: auto;
    font-size: 12px;
    align-self: center;
    text-align: center;
    transition: 0.3s;
    font-family: Open Sans;
    padding-top: var(--dl-space-space-halfunit);
    border-color: transparent;
    margin-bottom: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-halfunit);
    text-transform: uppercase;
    background-color: #ff983f;
}

.envio03-button:active {
    color: #ff983f;
    width: 100%;
    background-color: #ecd79b;
}

.envio03-text {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
}

.envio03-card-container {
    flex: 0 0 auto;
    height: auto;
    width: 100%;
    display: flex;
    padding: var(--dl-space-space-unit);
    box-shadow: 0px 0px 10px 0px #d4d4d4;
    margin-top: var(--dl-space-space-unit);
    align-items: flex-start;
    margin-left: 0px;
    margin-right: var(--dl-space-space-unit);
    border-radius: 4px;
    margin-bottom: var(--dl-space-space-unit);
    background-color: var(--dl-color-gray-white);
}

.envio03-max-width-table {
    flex: 0 0 auto;
    width: auto;
    height: auto;
    display: flex;
    padding: var(--dl-space-space-halfunit);
    align-items: flex-start;
    flex-direction: column;
}

.envio03-table {
    flex: 0 0 auto;
    width: auto;
    height: 100%;
    display: flex;
    padding: var(--dl-space-space-halfunit);
    align-items: flex-start;
}

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y)*-1);
    margin-right: calc(var(--bs-gutter-x)*-0.5);
    margin-left: calc(var(--bs-gutter-x)*-0.5);
}

.col-12 {
    flex: 0 0 auto;
    width: 100%;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, .125);
    border-radius: 4px;
    box-shadow: 0 20px 27px 0 rgba(0, 0, 0, .05);
}

.mb-4 {
    margin-bottom: 1.5rem !important;
}

.card .card-header {
    padding: 1.5rem;
}

.card-header:first-child {
    border-radius: 1rem 1rem 0 0;
}

.pb-0 {
    padding-bottom: 0 !important;
}

.card-header {
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    background-color: #fff;
    border-bottom: 0 solid rgba(0, 0, 0, .125);
}

.card .card-body {
    font-family: Open Sans;
    padding: 1.5rem;
}

.pb-2 {
    padding-bottom: 0.5rem !important;
}

.pt-0 {
    padding-top: 0 !important;
}

.px-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
}

.card-body {
    flex: 1 1 auto;
    padding: 1rem 1rem;
}

.p-0 {
    padding: 0 !important;
}

.table-responsive {
    max-height: 250px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.mb-0 {
    margin-bottom: 0 !important;
    align-self: center;
}

.align-items-center {
    align-items: center !important;
}

.table {
    --bs-table-bg: transparent;
    --bs-table-accent-bg: transparent;
    --bs-table-striped-color: #67748e;
    --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
    --bs-table-active-color: #67748e;
    --bs-table-active-bg: rgba(0, 0, 0, 0.1);
    --bs-table-hover-color: #67748e;
    --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
    width: 100%;
    margin-bottom: 1rem;
    color: #67748e;
    vertical-align: top;
    border-color: #e9ecef;
    background: linear-gradient(0deg, rgba(255, 255, 161, 0.2) 0.00%, rgba(255, 102, 0, 0.08) 59.00%)
}

.table>thead {
    vertical-align: bottom;
}

.table>:not(:last-child)>:last-child>* {
    border-bottom-color: #e9ecef;
}

.table>:not(:last-child)>:last-child>* {
    border-bottom-color: currentColor;
}

.table.align-items-center td,
.table.align-items-center th {
    vertical-align: middle;
}

.table thead th {
    padding: 0.75rem 1.5rem;
    text-transform: capitalize;
    letter-spacing: 0;
    border-bottom: 1px solid #e9ecef;
}

.table td,
.table th {
    white-space: nowrap;
}

.table th {
    font-weight: 600;
}

.table>:not(caption)>*>* {
    padding: 0.5rem 0.5rem;
    background-color: var(--bs-table-bg);
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}

.text-secondary {
    color: r#bc6c25 !important;
}

.table>tbody {
    vertical-align: inherit;
}

tbody,
td,
tfoot,
th,
thead,
tr {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    text-align: center;
}

.table.align-items-center td,
.table.align-items-center th {
    vertical-align: middle;
}

.table td,
.table th {
    white-space: nowrap;
}

.table>:not(caption)>*>* {
    padding: 0.5rem 0.5rem;
    background-color: var(--bs-table-bg);
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}

.py-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
}

.px-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
}

.d-flex {
    display: flex !important;
    justify-content: center;
}

.justify-content-center {
    justify-content: center !important;
}

.flex-column {
    flex-direction: column !important;
}

.d-flex {
    display: flex !important;
}

.text-sm {
    font-size: .875rem !important;
}

.text-sm {
    line-height: 1.5;
    color: #bc6c25;
}

.mb-0 {
    margin-bottom: 0 !important;
}

.h4,
.h5,
.h6,
h4,
h5,
h6 {
    font-weight: 600;
}

.h6,
h6 {
    font-size: 1rem;
    line-height: 1.625;
}

.opacity-7 {
    opacity: .7 !important;
}

.text-xs {
    font-size: .75rem !important;
    color: #bc6c25;
}

.text-xs {
    line-height: 1.25;
    text-align: center;
}

.text-secondary {
    color: #bc6c25 !important;
}

.mb-0 {
    margin-bottom: 0 !important;
}

p {
    line-height: 1.625;
    font-weight: 400;
}

.p,
p {
    font-size: 1rem;
}

.lead,
.p,
p {
    font-weight: 400;
}

.p,
p {
    line-height: 1.6;
}

.envio03-conteiner-text1-oringin {
    flex: 0 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    align-self: flex-start;
    margin-top: var(--dl-space-space-halfunit);
    align-items: center;
    margin-bottom: var(--dl-space-space-unit);
    justify-content: flex-start;
}

.envio03-text4 {
    font-size: 18px;
    font-family: Open Sans;
    margin-left: 10px;
}

.envio03-text5 {
    font-family: Open Sans;
}

.envio03-conteiner-text {
    flex: 0 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    margin-top: var(--dl-space-space-oneandhalfunits);
    align-items: center;
    margin-bottom: var(--dl-space-space-halfunit);
    justify-content: flex-start;
}

.envio03-heading {
    color: #292524;
    font-size: 18px;
    font-family: Open Sans;
}

.envio03-text03 {
    color: #78716c;
    font-family: Open Sans;
    margin-left: 10px;
}

.envio03-conteiner-text1 {
    flex: 0 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    margin-bottom: var(--dl-space-space-halfunit);
    justify-content: flex-start;
}

.envio03-text044 {
    color: #292524;
    font-size: 18px;
    font-family: Open Sans;
}

.envio03-text055 {
    color: #78716c;
    font-family: Open Sans;
    margin-left: 10px;
}

.envio03-conteiner-text2 {
    flex: 0 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    margin-bottom: var(--dl-space-space-halfunit);
    justify-content: flex-start;
}

.envio03-text06 {
    color: #292524;
    font-size: 18px;
    font-family: Open Sans;
}

.envio03-text07 {
    color: #78716c;
    font-family: Open Sans;
    margin-left: 10px;
}

.envio03-conteiner-text3 {
    flex: 0 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    align-self: flex-start;
    margin-top: var(--dl-space-space-halfunit);
    align-items: center;
    margin-bottom: var(--dl-space-space-unit);
    justify-content: flex-start;
}

.envio03-text08 {
    font-size: 20px;
    font-family: Open Sans;
}

.envio03-text09 {
    color: #292524;
    font-size: 18px;
}

.envio03-text11 {
    color: #78716c;
    font-family: Open Sans;
}

.envio03-container-button {
    flex: 0 0 auto;
    width: auto;
    height: 100%;
    display: flex;
    align-self: center;
    align-items: flex-end;
    justify-content: center;
}

.envio03-button1 {
    color: var(--dl-color-gray-white);
    width: 100%;
    height: auto;
    font-size: 12px;
    align-self: flex-end;
    font-style: normal;
    text-align: center;
    transition: 0.3s;
    font-family: Open Sans;
    font-weight: 400;
    padding-top: 0px;
    border-color: transparent;
    padding-bottom: 0px;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #ff983f;
}

.envio03-button1:active {
    background-color: #ecd79b;
}

.envio03-icon {
    fill: #ffffa1;
    width: 24px;
    height: 24px;
}</style>