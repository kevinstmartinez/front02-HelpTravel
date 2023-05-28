<template>
  <div class="navbar1-container">
    <div class="navbar1-max-width">
      <header data-thq="thq-navbar" class="navbar1-navbar-interactive">
        <div class="navbar1-container-paguinacion">
          <span class="navbar1-text">{{ menuItem }}</span>
        </div>
        <div data-thq="thq-navbar-nav" data-role="Nav" class="navbar1-desktop-menu">
          <nav data-thq="thq-navbar-nav-links" data-role="Nav" class="navbar1-nav">
            <div class="navbar1-container-salir">
              <button @click="loguot" class="navbar1-button button">
                <svg viewBox="0 0 1024 1024" class="navbar1-icon">
                  <path
                    d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z">
                  </path>
                </svg>
                <h3 class="navbar1-text1">{{ heading }}</h3>
              </button>
            </div>
            <div class="navbar1-setting">
              <svg viewBox="0 0 1024 1024" class="navbar1-icon2">
                <path
                  d="M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z">
                </path>
              </svg>
            </div>
          </nav>
        </div>
      </header>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'Navbar1',
  props: {
    heading: {
      type: String,
      default: 'Log out',
    },
    button: {
      type: String,
      default: 'Button',
    },
    menuItem: {
      type: String,
      required: true,
    },
  },
  methods: {
    loguot() {
      localStorage.removeItem('token')
      this.$router.replace('/login')
    },
  },
}
</script>
  
<style scoped>
.navbar1-container {
  width: 100%;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}

.navbar1-max-width {
  width: 100%;
  height: 76px;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  flex-direction: column;
}

.navbar1-navbar-interactive {
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  position: relative;
  align-items: center;
  justify-content: space-between;
}

.navbar1-container-paguinacion {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  margin-right: 420px;
  flex-direction: column;
}

.navbar1-paguinacion {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
}

.navbar1-text {
  background-image: linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0.00%, rgb(250, 121, 48) 63.00%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.navbar1-desktop-menu {
  display: flex;
}

.navbar1-nav {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.navbar1-container-salir {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
}

.navbar1-button {
  display: flex;
  border-width: 0px;
  flex-direction: row;
  background-color: transparent;
}

.navbar1-icon {
  fill: #292524;
  width: 24px;
  height: 24px;
}

.navbar1-text1 {
  color: #292524;
  margin-left: var(--dl-space-space-halfunit);
}

.navbar1-setting {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  margin-left: 0px;
}

.navbar1-icon2 {
  fill: #292524;
  width: 24px;
  height: 24px;
}

.navbar1-root-class-name {
  align-self: center;
}

@media(max-width: 767px) {
  .navbar1-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }

  .navbar1-desktop-menu {
    display: none;
  }
}

@media(max-width: 479px) {
  .navbar1-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
}</style>