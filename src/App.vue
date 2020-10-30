<template>
  <div id="app">
    <img src="./assets/morning_news.jpg" />
    <div id="nav">
      <router-link to="/first">OVERSEAS NEWS</router-link> |
      <router-link to="/second">DOMESTIC NEWS</router-link>
    </div>
    <router-view />
  <div id='foot'>
    <footer>天气×日期</footer>
  </div>
  </div>
  
</template>

<style>
body {
  margin: 0px;
  border-left: 0px;
  padding-left: 0px;
  background-color: royalblue;

  border-radius: 8px;
}
img {
  width: 600px;
  height: 250px;
  margin: 0px;
  border:0px;
  padding: 0px;

  border-radius: 8px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e6d815;
}

#nav {
  background-color: black;
  margin: 0px;
  border: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  

  font-size: 30px;
  border-radius: 20px;
}

#nav a {
  font-weight: bold;
  color: #090de7;
}

#nav a.router-link-exact-active {
  color: #d30d0d;
}

#foot{
  color:dimgray;
}
</style>
