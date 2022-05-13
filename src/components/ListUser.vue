<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <!-- TABLE DO RESPONSIVO -->
  <div class="d-md-none d-xxl-none">
  <div class="container-response">
    <div class="container-table-response">
      <div v-if="show === false">
        <p>Nenhum dado encontrado</p>
      </div>
      <div v-else>
        <table>
          <tr class="table-header-response">
            <th>Id:</th>
            <th>Nome:</th>
            <th>Ações</th>
          </tr>
          <tr v-for="item in data" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleta(item.id)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </table>
        <div>
          <button :disabled="currentPage === 0" @click="voltar" class="btn-voltar">&lt; Voltar</button>
          <button :disabled="data.length < 20" @click="avancar" class="btn-avancar">Avançar &gt;</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  <!-- FIM DA TABLE RESPONSIVO -->
  <div class="d-none d-md-block">
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
            <th>Ações</th>
          </tr>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.cellphoneNumber }}</td>
            <td>
              <button @click="deleta(item.id)">
                Deletar
              </button>
            </td>
          </tr>
        </table>
        <div>
          <button :disabled="currentPage === 0" @click="voltar" class="btn-voltar">&lt; Voltar</button>
          <button :disabled="data.length < 20" @click="avancar" class="btn-avancar">Avançar &gt;</button>
        </div>
      </div>
    </div>
  </div>
  </div>

  
</template>

<script>
import ApiDataServer from "../service/ApiDataServer";
import {notify} from '@kyvg/vue3-notification'

export default {
  name: "ListUser",
  data() {
    return {
      currentPage: 0,
      data: [],
      show: false,
      isResposive: false
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
    deleta(id){
      ApiDataServer.delete(id)
      .then((res) => {
        notify({
          type:'sucess',
          title:'Sucesso',
          text:`${res.data}`,
        })
        this.retrieveUsers();
      
      })
      .catch((erro) => {
        console.log(erro)
          notify({
          type:'error',
          title:'Error',
          text:`Erro ao excluir`,
        })
      })

  
      
    }
  },
  mounted() {
    this.retrieveUsers();
    if(window.innerWidth < 700){
      this.isResposive = true
    }else{
      this.isResposive = false
    }
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
  margin-bottom:50px;
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

@media screen and (max-width: 700px) {
  .container {
    display: none;
  }

  table{
    margin-top: 50px;
    margin-left: 10%;
    margin-right: 10%;
  }


} 

</style>
