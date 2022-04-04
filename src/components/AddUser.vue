  <template>
  <div class="container">
    <div class="container-form">
      <div class="text-form">
        <h3>Cadastre-se !</h3>
        <p>Crie uma conta para usufruir de nosso serviços</p>
        <div class="img-form">
          <img src="../assets/pylogo.png" alt="logo pycemaker" />
        </div>
      </div>
      <div class="form-user">
        <form @submit.prevent>
          <input
            type="text"
            placeholder="Digite seu nome"
            v-model="usuario.name"
          />
          <input
            type="email"
            placeholder="Digite seu email"
            v-model="usuario.email"
          />
          <input
            type="password"
            placeholder="digite sua senha"
            v-model="usuario.password"
          />
          <input
            type="text"
            placeholder="digite seu telefone"
            v-model="usuario.cellphoneNumber"
          />
          <button @click="saveUser">
            <h3>CRIAR CONTA</h3>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ApiDataServer from '../service/ApiDataServer'
export default {
  name: "add-user",
  data() {
    return {
      usuario: {
        name: "",
        email: "",
        password: "",
        cellphoneNumber: "",
      },
    };
  },
  methods: {
    saveUser() {
      var data = {
        name: this.usuario.name,
        email: this.usuario.email,
        password: this.usuario.password,
        cellphoneNumber: this.usuario.cellphoneNumber,
      }
      ApiDataServer.create(data)
         .then(res => {
        console.log(res.data)
        this.usuario = {}
        alert('Usuário cadastrar com sucesso !!')
      })
      .catch(e => {
        console.log(e)
        alert('Erro ao cadastrar !')
      })
      
    },
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
.container-form {
  background-color: #ffffff;
  border: 1px solid #59008a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  padding: 50px;
  height: max-content;
}
.text-form h3,
p {
  margin-bottom: 10px;
}

.img-form {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.form-user form {
  display: flex;
  flex-direction: column;
}

input {
  margin-top: 10px;
  padding: 13px;
  border-radius: 4px;
  border: 1px solid #59008a;
  font-family: "Outfit", sans-serif;
  font-size: 1em;
  transition: transform 0.1s;
}

input:focus {
  outline: none;
  border: 2px solid #59008a;
  transform: scale(1.04);
}

button {
  background: #15ed48;
  border: 1px solid #59008a;
  border-radius: 4px;
  padding: 15px;
  margin-top: 20px;
  transition: transform 0.1s;
  font-family: "Outfit", sans-serif;
}

button:hover {
  cursor: pointer;
  transform: scale(1.04);
}
</style>