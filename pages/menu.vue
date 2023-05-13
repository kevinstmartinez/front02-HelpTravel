<template>
  <div>

    <div>
      <Navbar />
      <router-view />
      <h1>{{ titulo }}</h1>
    </div>

    <div>
      <div>
        <label for="listar">Mostrar Productos:</label>
        <br>
        <button @click="mostrar" id="listar">Click</button>
        <br>
        <button @click="loguot">Regresar</button>
      </div>

      <div>

        <div v-for="item in items" :key="item.id_productos">

          <div class="card">

            <div>
              <img :src="item.imgURL" />
            </div>

            <div class="info">
              <h1>{{ item.name }}</h1>
              <p>{{ item.categorya }}</p>
              <p>{{ item.precio }}</p>
            </div>

          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import useStore from 'vuex';
import Navbar from '../components/navbar.vue';

export default {
  data() {
    return {
      items: [],
      titulo: '',
    }
  },

  components: {
    Navbar,
  },

  mounted() {
    axios.get('http://localhost:3001/api/use', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then((respu) => {
        const usu = respu.data.nameUser
        this.titulo = usu
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

  methods: {
    async mostrar() {
      await axios.get('http://localhost:3001/api/produc')
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    loguot() {
      localStorage.removeItem('token')
      this.$router.replace('/login')
    },
  },
}

</script>