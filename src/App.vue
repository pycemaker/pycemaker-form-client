<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div>    
  <div class="container-header">
    <div class="logo">
      <a href="/">
        <img src=".\assets\pylogo.png" alt="logo pycemaker" class="img-menu" />
      </a>
      <a href="/">
      <h1>PYCEMAKER</h1>
      </a>
    </div>
    <div class="menu-link" id="top-menu">
      <router-link to="/cadastrar">
        <h2>Cadastre-se</h2>
      </router-link>
      <h2 class="remove">|</h2>
      <router-link to="/dashboard">
        <h2>Dashboard</h2>
      </router-link>
    </div>
      <a class="icon" @click='changeResponse'>
        <i class="fa fa-bars"></i>
      </a>
  </div>
      <router-view/>
      <notifications position="bottom left" width="300px" max=3 />
</div>    
</template>
<script>
export default {
  name: "App",
  components: {
  },
  methods:{
   changeResponse(){
     const id = document.getElementById("top-menu")
     if(id.className === "menu-link"){
       id.className = "responsive"
     }else {
       id.className = "menu-link"
     }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap");
#app {
  -webkit-font-smoothing: antialiased ;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  font-family: "Outfit", sans-serif!important;
  background-color: #f7fff9!important;
  height: 100vh !important;
}

a{
  color: black !important; 
  text-decoration: none !important;
}

h2{
  font-weight: bold!important;
  font-size: 1.5em !important;
}

h1{
  font-weight: bold !important;
  font-size: 2em !important;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container-header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
}
.logo{
  display: flex;
  flex-direction: row; 
  align-items:flex-start;
  padding: 5px;
}
.logo h1 {
  margin-left: 20px;
}
.menu-link{
  display: flex;
  flex-direction: row;
}

.icon{
  display: none;
}

.menu-link h2{
  margin-left: 10px;
  margin-right: 10px;
}

@media screen and (max-width: 700px){

  .img-menu{
    display: none;
  }

  .container-header{
    padding: 0px;
  }

  .logo h1{
    padding: 0px;
    margin-top: 5px;
  }

  .menu-link{
    display: none;
  }

  .icon{
    float: right;
    display: block;
    margin-right: 30px;
    margin-top: 20px;
  }

  .responsive{
    position: absolute;
    margin-top: 30px;
    left: 60%;
    z-index: 10;
    display:flex;
    flex-direction: column;
  }

  .responsive h2{
    margin: 5px;
    font-size: 15px;
  }

  .responsive .remove{
    display: none;
  }


  h1{
    font-size: 25px;
  }
}
</style>
