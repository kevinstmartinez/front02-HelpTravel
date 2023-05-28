<template>
    <div class="envio01-container">
        <div class="envio01-max-width">
            <div class="envio01-container-sidelbar">
                <app-sidelbar></app-sidelbar>
                <router-view />
            </div>
            <div class="envio01-menu-container">
                <app-navbar1 rootClassName="navbar1-root-class-name" :menuItem="menuItem"></app-navbar1>
                <div class="envio01-content-container">
                    <div class="envio01-text-container">
                        <h1 class="envio01-text">
                            <span class="envio01-text01">¿ Problemas ?</span>
                            <span class="envio01-text02"> </span>
                            <span class="envio01-text03">No importa nosotros nos</span>
                            <br class="envio01-text04" />
                            <span class="envio01-text05">encargamos...</span>
                            <span><span v-html="rawdq25"></span></span>
                            <br class="envio01-text07" />
                            <span><span v-html="rawd42b"></span></span>
                        </h1>
                        <span class="envio01-text09">
                            <span>
                                Llena el formulario completo con todas las características
                                necesarias
                                <span v-html="raw685r"></span>
                            </span>
                            <br />
                            <span>para que el envío de sus pertenencias sea más efectivo.</span>
                        </span>
                    </div>
                    <div class="envio01-container-text-card">
                        <div class="envio01-text-container1">
                            <h1 class="envio01-text13">
                                <span class="envio01-text14">M</span>
                                <span class="envio01-text15">étodo de Envío</span>
                            </h1>
                            <span class="envio01-text16">
                                <span>Seleccione alguno de los métodos</span>
                                <br />
                                <span>de envío que ofrecemos</span>
                                <br />
                                <br />
                                <span>
                                    Tenga en cuenta que si selecciona
                                    <span v-html="rawm9hm"></span>
                                </span>
                                <br />
                                <span>&quot;Servicio de casillero&quot; no es necesario </span>
                                <br />
                                <span>
                                    llenar completamente el formulario
                                    <span v-html="rawf20f"></span>
                                </span>
                                <br />
                                <span>de envío</span>
                            </span>
                        </div>
                        <div class="envio01-card-container">
                            <router-link to="/envio03" class="envio01-navlink">
                                <div class="envio01-card">
                                    <div class="envio01-gallery-card">
                                        <div class="envio01-container1">
                                            <div class="envio01-container2">
                                                <h2 class="envio01-text29">Envio</h2>
                                                <span class="envio01-text30">
                                                    No importa lo lejos que este, en menos tiempo llegara su
                                                    paquete
                                                </span>
                                            </div>
                                        </div>
                                        <img alt="image"
                                            src="https://images.unsplash.com/photo-1487553333251-6c8e26d3dc2c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDU2fHwlMjBwbGFuZXxlbnwwfHx8fDE2Njg4NTI5MjA&amp;ixlib=rb-4.0.3&amp;h=400"
                                            class="envio01-image" />
                                    </div>
                                </div>
                            </router-link>
                            <div class="envio01-card1">
                                <div class="envio01-gallery-card1">
                                    <div class="envio01-container3">
                                        <div class="envio01-container4">
                                            <h2 class="envio01-text31">Casillero</h2>
                                            <span class="envio01-text32">
                                                Guardamos su equipaje el tiempo que sea necesario
                                            </span>
                                        </div>
                                    </div>
                                    <img alt="image"
                                        src="https://images.unsplash.com/photo-1613043547213-cf19e438093c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI4fHxsb2NrZXJzfGVufDB8fHx8MTY2ODg1MzQwMA&amp;ixlib=rb-4.0.3&amp;h=400"
                                        class="envio01-image1" />
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
import AppSidelbar from '../components/sidelbar.vue'
import AppNavbar1 from '../components/navbar1.vue'

export default {
    name: 'Envio01',
    props: {},
    components: {
        AppSidelbar,
        AppNavbar1,
    },
    data() {
        return {
            menuItem: "Tipo de Servicio",
            rawdq25: ' ',
            rawd42b: ' ',
            raw685r: ' ',
            rawm9hm: ' ',
            rawf20f: ' ',
        }
    },
}
</script>
  
<style scoped>
.envio01-container {
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

.envio01-max-width {
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

.envio01-container-sidelbar {
    width: 210px;
    height: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.envio01-menu-container {
    width: 970px;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.envio01-content-container {
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

.envio01-text-container {
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

.envio01-text {
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-family: Open Sans;
    margin-bottom: var(--dl-space-space-unit);
}

.envio01-text01 {
    color: var(--dl-color-backgrounds-primary);
}

.envio01-text02 {
    color: var(--dl-color-backgrounds-primary);
}

.envio01-text03 {
    color: #292524;
}

.envio01-text04 {
    color: #292524;
}

.envio01-text05 {
    color: #292524;
}

.envio01-text07 {
    font-size: 20px;
    font-family: Open Sans;
}

.envio01-text09 {
    color: #292524;
    font-style: normal;
    font-family: Open Sans;
    font-weight: 600;
    margin-bottom: var(--dl-space-space-unit);
}

.envio01-container-text-card {
    flex: 0 0 auto;
    width: auto;
    height: auto;
    display: flex;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    align-items: flex-start;
    flex-direction: row;
}

.envio01-text-container1 {
    flex: 0 0 auto;
    width: auto;
    height: 100%;
    display: flex;
    padding: var(--dl-space-space-unit);
    align-self: flex-start;
    align-items: flex-start;
    border-radius: var(--dl-radius-radius-radius8);
    flex-direction: column;
    background-color: var(--dl-color-gray-white);
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}

.envio01-text13 {
    font-size: 20px;
    font-family: Open Sans;
    margin-bottom: var(--dl-space-space-unit);
}

.envio01-text14 {
    color: var(--dl-color-backgrounds-primary);
}

.envio01-text15 {
    color: #292524;
}

.envio01-text16 {
    color: #292524;
    font-style: normal;
    font-family: Open Sans;
    font-weight: 600;
}

.envio01-card-container {
    flex: 0 0 auto;
    width: auto;
    display: flex;
    padding: var(--dl-space-space-unit);
    align-self: center;
    align-items: flex-start;
    margin-left: 0px;
    border-radius: var(--dl-radius-radius-radius8);
    justify-content: center;
    background-color: var(--dl-color-gray-white);
    border-top-left-radius: 0px;
}

.envio01-navlink {
    display: contents;
}

.envio01-card {
    flex: 0 0 auto;
    width: 192px;
    height: 331px;
    margin: var(--dl-space-space-unit);
    display: flex;
    max-width: 285px;
    box-shadow: 0 .25rem .375rem -.0625rem rgba(20, 20, 20, .12), 0 .125rem .25rem -.0625rem rgba(20, 20, 20, .07) !important;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
    text-decoration: none;
}

.envio01-gallery-card {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
}

.envio01-container1 {
    width: 100%;
    height: 100%;
    display: flex;
    opacity: 0;
    z-index: 1;
    transition: 0.3s;
    align-items: flex-start;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    background-color: #00000096;
}

.envio01-container1:hover {
    opacity: 1;
}

.envio01-container2 {
    width: 100%;
    height: 100%;
    display: flex;
    padding: var(--dl-space-space-twounits);
    box-shadow: 0 .25rem .375rem -.0625rem rgba(20, 20, 20, .12), 0 .125rem .25rem -.0625rem rgba(20, 20, 20, .07) !important;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
}

.envio01-text29 {
    color: rgb(255, 255, 255);
    font-style: normal;
    text-align: center;
    font-weight: 500;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
}

.envio01-text30 {
    color: rgb(255, 255, 255);
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
}

.envio01-image {
    top: 0px;
    left: auto;
    right: 0px;
    width: 100%;
    bottom: auto;
    height: 100%;
    position: absolute;
    object-fit: cover;
    border-radius: 20px;
}

.envio01-card1 {
    flex: 0 0 auto;
    width: 192px;
    height: 331px;
    margin: var(--dl-space-space-unit);
    display: flex;
    max-width: 285px;
    box-shadow: 0 .25rem .375rem -.0625rem rgba(20, 20, 20, .12), 0 .125rem .25rem -.0625rem rgba(20, 20, 20, .07) !important;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
}

.envio01-gallery-card1 {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
}

.envio01-container3 {
    width: 100%;
    height: 100%;
    display: flex;
    opacity: 0;
    z-index: 1;
    transition: 0.3s;
    align-items: flex-start;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    background-color: #00000096;
}

.envio01-container3:hover {
    opacity: 1;
}

.envio01-container4 {
    width: 100%;
    height: 100%;
    display: flex;
    padding: var(--dl-space-space-twounits);
    box-shadow: 0 .25rem .375rem -.0625rem rgba(20, 20, 20, .12), 0 .125rem .25rem -.0625rem rgba(20, 20, 20, .07) !important;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
}

.envio01-text31 {
    color: rgb(255, 255, 255);
    font-style: normal;
    text-align: center;
    font-weight: 500;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
}

.envio01-text32 {
    color: rgb(255, 255, 255);
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
}

.envio01-image1 {
    top: 0px;
    left: auto;
    right: 0px;
    width: 100%;
    bottom: auto;
    height: 100%;
    position: absolute;
    object-fit: cover;
    border-radius: 20px;
}

@media(max-width: 767px) {
    .envio01-card {
        width: 50%;
    }

    .envio01-gallery-card {
        flex-direction: column;
    }

    .envio01-card1 {
        width: 50%;
    }

    .envio01-gallery-card1 {
        flex-direction: column;
    }
}

@media(max-width: 479px) {
    .envio01-card {
        width: 100%;
    }

    .envio01-container1 {
        max-width: auto;
    }

    .envio01-image {
        top: 0px;
        left: 0px;
        right: auto;
        bottom: auto;
    }

    .envio01-card1 {
        width: 100%;
    }

    .envio01-container3 {
        max-width: auto;
    }

    .envio01-image1 {
        top: 0px;
        left: 0px;
        right: auto;
        bottom: auto;
    }
}
</style>
  