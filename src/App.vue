<template>
<div>    
  <div class="container-header">
    <div class="logo">
      <a href="/">
        <img src=".\assets\pylogo.png" alt="logo pycemaker" />
      </a>
      <h1>PYCEMAKER</h1>
    </div>
    <div class="menu-link">
      <router-link to="/cadastrar">
        <h2>Cadastre-se</h2>
      </router-link>
      <h2>|</h2>
      <router-link to="/dashboard">
        <h2>Dashboard</h2>
      </router-link>
    </div>
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
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  font-family: "Outfit", sans-serif;
  background-color: #f7fff9;
  height: 100vh;
}

a{
  color: black;
  text-decoration: none;
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

.menu-link h2{
  margin-left: 10px;
  margin-right: 10px;
}
</style>
