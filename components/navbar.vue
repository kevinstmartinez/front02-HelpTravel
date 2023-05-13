<template>
    <div class="navbar-navbar-container" v-bind:class="rootClassName">
        <header data-role="Header" class="navbar-max-width">
            <img alt="logo" src='../static/Icons/icon-logoHorizontal.png' class="navbar-image" />
        </header>
    </div>
</template>
  
<script>
export default {
    name: 'Navbar',
    props: {
        image_src: {
            type: String,
            default:
                '',
        },
        image_alt: {
            type: String,
            default: 'logo',
        },
        rootClassName: String,
        text: {
            type: String,
            default: 'Follow us',
        },
    },
}
</script>
  
<style scoped>
.navbar-navbar-container {
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
}

.navbar-max-width {
    width: 100%;
    display: flex;
    max-width: var(--dl-size-size-maxwidth);
    align-self: center;
    align-items: center;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    flex-direction: row;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: space-between;
}

.navbar-image {
    width: 205px;
    height: 105px;
}

.navbar-root-class-name {
    align-self: flex-start;
    margin-bottom: 0px;
}

@media(max-width: 767px) {
    .navbar-image {
        width: 224px;
        height: 101px;
    }
}

@media(max-width: 479px) {
    .navbar-max-width {
        justify-content: center;
    }
}
</style>
  