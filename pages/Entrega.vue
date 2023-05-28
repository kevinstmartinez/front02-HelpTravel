<template>
    <div class="loading-container">
        <div class="loading-max-height">
            <div class="loading-container-content">
                <header data-role="Accordion" class="loading-logo-envio">
                    <img alt="logo" src="../static/Icons/icon-logoHorizontal.png" class="loading-image" />
                    <div class="loading-separator"></div>
                </header>
                <div class="loading-contenido">
                    <div class="loading-text">
                        <div class="loading-container1">
                            <h1 class="loading-text01">Solicitud:  </h1>
                            <span class="loading-text02">APROBADA</span>
                        </div>
                        <span class="loading-text03">ID: 0000001</span>
                    </div>
                    <div class="loading-imagen">
                        <img alt="image"
                            src="https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQyfHx3b21hbnxlbnwwfHx8fDE2Njg4Nzc2NDU&amp;ixlib=rb-4.0.3&amp;w=200"
                            class="loading-image1" />
                        <span class="loading-text04">
                            <span>
                                <span>
                                    Luisa esta en
                                    <span v-html="raw2zyw"></span>
                                </span>
                                <span><span v-html="rawepgr"></span></span>
                            </span>
                            <br />
                            <span>camino</span>
                        </span>
                    </div>
                    <span class="loading-text10">
                        <span>
                            Prepara tus pertenencias, ya estamos en camino a recogerlas
                        </span>
                        <br />
                    </span>
                    <div class="loading-button">
                        <button class="loading-button1 button" @click="paguinacion" >HelpTravel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Loading',
    props: {},
    data() {
        return {
            raw2zyw: ' ',
            rawepgr: ' ',
        }
    },
    methods: {
        paguinacion(){
            this.$router.push('/envio01')
        }
    }
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
}

.loading-text {
    width: auto;
    height: auto;
    display: flex;
    position: relative;
    align-self: center;
    margin-top: var(--dl-space-space-unit);
    align-items: center;
    margin-bottom: var(--dl-space-space-unit);
    flex-direction: column;
}

.loading-container1 {
    flex: 0 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
}

.loading-text01 {
    color: rgb(41, 37, 36);
    font-size: 26px;
    align-self: flex-start;
    font-family: Open Sans;
    margin-right: var(--dl-space-space-oneandhalfunits);
}

.loading-text02 {
    color: var(--dl-color-backgrounds-primary);
    font-size: 26px;
    align-self: flex-start;
    font-family: Open Sans;
    font-weight: 800;
    margin-left: var(--dl-space-space-oneandhalfunits);
}

.loading-text03 {
    font-size: 28px;
    font-style: normal;
    text-align: center;
    font-family: Open Sans;
    font-weight: 500;
}

.loading-imagen {
    width: auto;
    height: auto;
    display: flex;
    align-self: center;
    align-items: center;
    flex-direction: column;
}

.loading-image1 {
    width: auto;
    height: auto;
    align-self: center;
    object-fit: cover;
    border-radius: var(--dl-radius-radius-radius8);
}

.loading-text04 {
    color: rgb(41, 37, 36);
    font-size: 28px;
    align-self: center;
    font-style: normal;
    margin-top: var(--dl-space-space-unit);
    text-align: center;
    font-family: Open Sans;
    font-weight: 800;
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
}

.loading-button {
    flex: 0 0 auto;
    width: 200px;
    display: flex;
    align-self: center;
    margin-top: var(--dl-space-space-twounits);
    align-items: flex-start;
    flex-direction: column;
}

.loading-button1 {
    color: var(--dl-color-grays-white100);
    width: auto;
    font-size: 20px;
    align-self: center;
    font-style: normal;
    text-align: center;
    transition: 0.3s;
    font-weight: 400;
    text-decoration: none;
    background-color: transparent;
    background-image: linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0.00%, rgb(250, 121, 48) 63.00%);
}

.loading-button1:active {
    color: #ecd79b;
    background: #ecd79b;
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
</style>
  