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
                            <span class="envio01-text01">En construccion</span>
                        </h1>
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

            menuItem: "Linea de Tiempo",

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
</style>
  