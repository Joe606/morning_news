<template>
  <section id="overseas_news">
    <h1>overseas news</h1>
    <div>
      <ul>
        <li class="image" v-for="item in items" v-bind:key="item">
          <a v-bind:href="item.url" target="_blank">
            <img v-bind:src="item.img_src" alt="图片无法显示" />
          </a>
          <div class="desc">{{ item.name }}</div>
        </li>
        <!--
        <li class="image">
          <a href="https://nytimes.com/" target="_blank">
            <img src="@/assets/nytimes.png" alt="图片无法显示" />
          </a>
          <div class="desc">new york times</div>
        </li>

        <li class="image">
          <a href="https://washingtonpost.com/" target="_blank">
            <img src="@/assets/washingtonpost.png" alt="图片无法显示" />
            
          </a>
          <div class="desc">washington post</div>
        </li>
        <li class="image">
          <a href="https://wsj.com/" target="_blank">
          <img src="@/assets/wsj.png" alt="图片无法显示" />
          </a>
          <div class="desc">wall street journal</div>
        </li>
        <li class="image">
          <a href="https://bbc.com/" target="_blank">
          <img src="@/assets/bbc.png" alt="图片无法显示" />
          </a>
          <div class="desc">britain broadcast</div>
        </li>
        <li class="image">
          <a href="https://rfi.fr/cn/" target="_blank">
            <img src="@/assets/rfi.png" alt="图片无法显示" />
          </a>
          <div class="desc">radio france international</div>
        </li>
        -->
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "First",
  //props:['src'],
  data: function() {
    return {
      items: [
        {
          name: "New York Times",
          url: "https://nytimes.com/",
          img_src: require("@/assets/nytimes.png")
        }, //动态渲染图片需要require()修饰
        {
          name: "Washington Post",
          url: "https://washingtonpost.com/",
          img_src: require("@/assets/wp.png")
        },
        {
          name: "Wall Street Journal",
          url: "https://wsj.com/",
          img_src: require("@/assets/wsj.png")
        },
        {
          name: "British Broadcasting Corporation",
          url: "https://bbc.com/",
          img_src: require("@/assets/bbc.png")
        },
        {
          name: "Radio France Internationale",
          url: "https://rfi.fr/",
          img_src: require("@/assets/rfi.png")
        }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  text-decoration: props;
}
ul {
  list-style-type: none;
}

.image {
  float: left;
  width: 240px;
  height: 150px;
  margin: 7px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.image:hover {
  border: 1px solid rgb(204, 16, 16);
  color: greenyellow;
}

img {
  margin: 0px;
  border: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
.desc {
  font-family: cursive;
  padding: 10px;
  text-align: center;
}
</style>
