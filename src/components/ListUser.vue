<template>
  <div class="container">
    <div class="container-table">
      <div v-if="show === false">
        <p>Nenhum dado encontrado</p>
      </div>
      <div v-else>
        <table>
          <tr class="table-header">
            <th>Id:</th>
            <th>Nome:</th>
            <th>Email:</th>
            <th>telefone:</th>
          </tr>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.cellphoneNumber }}</td>
          </tr>
        </table>
        <div>
          <button :disabled="currentPage === 0" @click="voltar" class="btn-voltar">&lt; Voltar</button>
          <button :disabled="data.length < 20" @click="avancar" class="btn-avancar">Avançar &gt;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiDataServer from "../service/ApiDataServer";

export default {
  name: "ListUser",
  data() {
    return {
      currentPage: 0,
      data: [],
      show: false,
    };
  },
  methods: {
    retrieveUsers() {
      ApiDataServer.getAll(this.currentPage, 20)
        .then((res) => {
          console.log(res.data);
          this.data = res.data;
          if (res.data.length > 0) {
            this.show = true;
          } else {
            this.show = false;
          }
        })
        .catch((e) => {
          alert("Não foi possível carregar a base de dados");
          console.log(e);
        });
    },
    voltar() {
      this.currentPage = this.currentPage - 1;
      this.retrieveUsers();
    },
    avancar() {
      this.currentPage = this.currentPage + 1;
      this.retrieveUsers();
    },
  },
  mounted() {
    this.retrieveUsers();
    console.log(this.show)
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap");
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
}
.container-table {
  background-color: #ffffff;
  border: 1px solid #59008a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  padding: 70px;
  height: max-content;
}

th {
  border-bottom: 1px solid #59008a;
  text-align: left;
  padding-bottom: 20px;
}

td {
  padding-right: 70px;
  text-align: left;
  border-bottom: 2px solid #cfcfcf;
  padding-top: 20px;
  padding-bottom: 20px;
}

button{
  background:#15ed48 ;
  border-radius: 20px;
  border: 1px solid #535252;
  padding: 8px;
  color: #535252;
  font-family: "Outfit",sans-serif;
  font-weight: bold;
  margin-top: 20px;

}

button:disabled{
  background: transparent;
  padding: 8px;
  border: 1px solid #535252;
  color: #cfcfcf;
  border-radius: 20px;
  font-family: "Outfit",sans-serif;
}

.btn-avancar{
  margin-left: 10px;
}
</style>