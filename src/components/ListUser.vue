<template>
  <div class="container">
    <div class="container-table">
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
      <!-- <div>
        <jw-pagination
          :items="users"
          @changePage="onChangePage"
        ></jw-pagination>
      </div> -->
      <div class="hello">
        <VueTailwindPagination
          :current="currentPage"
          :total="total"
          :per-page="perPage"
          @page-changed="onPageClick($event)"
        />
      </div>
    </div>
  </div>
</template>
<script>
//import ApiDataServer from "../service/ApiDataServer";
// import "@ocrv/vue-tailwind-pagination/dist/style.css"
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

const users = [...Array(150).keys()].map((i) => ({
  id: i + 1,
  name: "Pedro",
  email: "pedro@gmail.com",
  cellphoneNumber: "123456122",
}));

export default {
  name: "ListUser",
  components: {
    VueTailwindPagination,
  },
  data() {
    return {
      currentPage: 0,
      perPage: 20,
      total: 150,
      data: users,
    };
  },
  methods: {
    /*     retrieveUsers() {
      ApiDataServer.getAll()
        .then((res) => {
          this.users = res.data;
        })
        .catch((e) => {
          alert("Não foi possível carregar a base de dados");
          console.log(e);
        });
    }, */
    // onChangePage(pageOfUser) {
    //   this.pageOfUser = pageOfUser;
    // },
    onPageClick(event) {
      this.currentPage = event;
      this.getData();
    },
    getData() {
      this.data = users;
    },
  },
  mounted() {
    this.currentPage = 1;
    console.log(users);
    this.getData();
  },
};
</script>
<style scoped>
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
</style>