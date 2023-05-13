<template>
    <div class="feature-card-card" v-bind:class="rootClassName">
        <img :alt="image_alt" :src="image_src" class="feature-card-image" />
        <h4 class="feature-card-text Heading4">{{ heading }}</h4>
        <span class="feature-card-text1 Content-Light">{{ text }}</span>
    </div>
</template>
  
<script>
export default {
    name: 'FeatureCard',
    props: {
        text1: {
            type: String,
            default: 'Get started >',
        },
        rootClassName: String,
        text: {
            type: String,
            default:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        },
        heading: {
            type: String,
            default: 'Search for ideas',
        },
        image_alt: {
            type: String,
            default: 'image',
        },
        image_src: {
            type: String,
            default: 'https://play.teleporthq.io/static/svg/default-img.svg',
        },
    },
}
</script>
  
<style scoped>
.feature-card-card {
    flex: 0 0 auto;
    width: 25%;
    display: flex;
    max-width: 285px;
    align-items: center;
    padding-top: var(--dl-space-space-oneandhalfunits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
}

.feature-card-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-bottom: var(--dl-space-space-twounits);
}

.feature-card-text {
    text-align: center;
    margin-bottom: var(--dl-space-space-unit);
}

.feature-card-text1 {
    color: var(--dl-color-grays-gray100);
    text-align: center;
    margin-bottom: var(--dl-space-space-unit);
}

.feature-card-root-class-name {
    width: 22%;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: var(--dl-space-space-twounits);
    margin-bottom: 0px;
}

.feature-card-root-class-name1 {
    width: 22%;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: var(--dl-space-space-threeunits);
    margin-bottom: 0px;
}

.feature-card-root-class-name2 {
    width: 22%;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: var(--dl-space-space-threeunits);
    margin-bottom: 0px;
}

.feature-card-root-class-name3 {
    margin-left: var(--dl-space-space-fourunits);
    margin-right: var(--dl-space-space-fourunits);
}

.feature-card-root-class-name4 {
    margin-left: var(--dl-space-space-twounits);
    margin-right: var(--dl-space-space-twounits);
}

.feature-card-root-class-name5 {
    margin-left: var(--dl-space-space-twounits);
    margin-right: var(--dl-space-space-twounits);
}

.feature-card-root-class-name6 {
    margin-left: var(--dl-space-space-threeunits);
    margin-right: var(--dl-space-space-threeunits);
}

.feature-card-root-class-name7 {
    margin-left: var(--dl-space-space-threeunits);
    margin-right: var(--dl-space-space-threeunits);
}

.feature-card-root-class-name8 {
    margin-left: var(--dl-space-space-twounits);
    margin-right: var(--dl-space-space-twounits);
}

.feature-card-root-class-name9 {
    width: 22%;
}

@media(max-width: 767px) {
    .feature-card-card {
        width: 50%;
    }
}

@media(max-width: 479px) {
    .feature-card-card {
        width: 100%;
    }
}</style>