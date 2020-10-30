<template>
  <section id="overseas_news">
    <h1>overseas news</h1>
    <div>
      <ul>
        <li>
          <a href="https://nytimes.com/" target="_blank">new york times</a>
        </li>
        <li>
          <a href="https://washingtonpost.com/" target="_blank"
            >washington post</a
          >
        </li>
        <li>
          <a href="https://wsj.com/" target="_blank">wall street journal</a>
        </li>
        <li>
          <a href="https://bbc.com/" target="_blank">britain broadcast</a>
        </li>
        <li>
          <a href="https://rfi.fr/cn/" target="_blank"
            >radio france international</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>


<script>
export default {
  name: "Fist"
  
};
</script>


<style scoped>
ul{
  list-style-type:none;
}
a {
  
  margin:1px solid blue;
  border: 1px  green;
  padding:0px solid red;
  
  width: 800px;
  height: 60px;

  font-family: 'Times New Roman', Times, serif;
  font-size: 30px;
  font-weight: lighter;

  text-align: left;
  text-decoration: none;
  
  
  color: mediumspringgreen;

  
}
a:hover {
  color: deeppink;
}
</style>