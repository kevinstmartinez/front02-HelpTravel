<template>
    <div class="loading-container">
        <div class="loading-max-height">
            <div class="loading-container-content">
                <header data-role="Accordion" class="loading-logo-envio">
                    <img alt="logo" src="../static/Icons/icon-logoHorizontal.png" class="loading-image" />
                    <div class="loading-separator"></div>
                </header>
                <div class="loading-contenido">
                    <div class="loading-imagen">
                        <div v-show="loading" class="lds-grid" :style="{ width: `${size}px`, height: `${size}px` }">
                            <div v-bind:style="[spinnerStyle]"></div>
                            <div v-bind:style="[spinnerStyle]"></div>
                            <div v-bind:style="[spinnerStyle]"></div>
                            <div v-bind:style="[spinnerStyle]"></div>
                            <div v-bind:style="[spinnerStyle]"></div>
                            <div v-bind:style="[spinnerStyle]"></div>
                            <div v-bind:style="[spinnerStyle]"></div>
                            <div v-bind:style="[spinnerStyle]"></div>
                            <div v-bind:style="[spinnerStyle]"></div>
                       </div>
                    </div>
                    <span class="loading-text10">
                        <span>
                            Prepara tus pertenencias, ya estamos en camino a recogerlas
                        </span>
                        <br />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapActions } from 'vuex';
import { setTimeout } from 'timers';
import validateDuration from '../helpers/validateDuration.js'

export default {
    name: 'GridLoader',
    props: {
        loading: {
            type: Boolean,
            default: true,
        },
        size: {
            type: Number,
            default: 120,
        },
        color: {
            type: String,
            default: '#ff6600',
        },
        duration: {
            type: String,
            default: '1.8s',
            validator: validateDuration,
        },
    },
    data() {
        return {
            spinnerStyle: {
                background: this.color,
                animationDuration: this.duration,
            },
        }
    },

    mounted(){
        this.redirectToPage()
    },
    
    methods: {
        redirectToPage() {
            // esperar 5 segundos
            setTimeout(() => {
                this.$router.push('/Entrega')
            }, 5000)
            
        }
    },
}
</script>
  
<style scoped>
.loading-container {
    width: 100%;
    display: flex;
    overflow: auto;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
    background-color: #DDDDDD;
}

.loading-max-height {
    flex: 0 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding-bottom: var(--dl-space-space-unit);
    justify-content: center;
}

.loading-container-content {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.loading-logo-envio {
    width: 100%;
    display: flex;
    max-width: auto;
    align-self: center;
    align-items: center;
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
    flex-direction: column;
}

.loading-image {
    width: auto;
    height: 65px;
    align-self: center;
}

.loading-separator {
    width: 100%;
    height: 1px;
    align-self: center;
    margin-top: var(--dl-space-space-unit);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
    background-color: var(--dl-color-grays-gray100);
}

.loading-contenido {
    width: 681px;
    height: 750px;
    display: flex;
    align-items: flex-start;
    border-radius: 36px;
    flex-direction: column;
    margin-top: 180px;
}

.loading-imagen {
    width: auto;
    height: auto;
    display: flex;
    align-self: center;
    align-items: center;
    flex-direction: column;
}

.loading-text10 {
    color: rgb(41, 37, 36);
    font-size: 24px;
    align-self: center;
    font-style: normal;
    margin-top: var(--dl-space-space-unit);
    text-align: center;
    font-family: Open Sans;
    font-weight: 600;
    margin-top: 170px;
}

@media(max-width: 767px) {
    .loading-logo-envio {
        padding-left: var(--dl-space-space-twounits);
        padding-right: var(--dl-space-space-twounits);
    }

    .loading-separator {
        margin-top: var(--dl-space-space-oneandhalfunits);
        margin-bottom: var(--dl-space-space-oneandhalfunits);
    }
}

@media(max-width: 479px) {
    .loading-logo-envio {
        padding: var(--dl-space-space-unit);
    }

    .loading-separator {
        margin-top: var(--dl-space-space-unit);
        margin-bottom: var(--dl-space-space-unit);
    }
}
  
/** - - - - - - - - - -- - -  Estilos de la animacion  - -- - - - - - - - - */
.lds-grid {
    display: inline-flex;
    flex-wrap: wrap;
}

.lds-grid div {
    width: 20%;
    height: 20%;

    margin-top: 10%;
    margin-left: 10%;

    border-radius: 50%;
    background: #fff;
    animation-name: lds-grid;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

.lds-grid div:nth-child(1) {
    animation-delay: 0s;
}

.lds-grid div:nth-child(2) {
    animation-delay: -0.4s;
}

.lds-grid div:nth-child(3) {
    animation-delay: -0.8s;
}

.lds-grid div:nth-child(4) {
    animation-delay: -0.4s;
}

.lds-grid div:nth-child(5) {
    animation-delay: -0.8s;
}

.lds-grid div:nth-child(6) {
    animation-delay: -1.2s;
}

.lds-grid div:nth-child(7) {
    margin-bottom: 10%;
    animation-delay: -0.8s;
}

.lds-grid div:nth-child(8) {
    animation-delay: -1.2s;
}

.lds-grid div:nth-child(9) {
    animation-delay: -1.6s;
}

@keyframes lds-grid {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

/** - - - - - - - - - -- - - - - - -- - - -- - -- - -- - -- - - - - - - - - */
</style>
  