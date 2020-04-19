<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
    <div>
      <!-- <p>testRouter.vue</p>
      <v-touch v-on:swipeleft="swiperleft" class="wrapper">left</v-touch>
      <v-touch v-on:swiperight="swiperright" class="wrapper">right</v-touch>
      <v-touch v-on:panleft="panleft" @panright="panright" class="wrapper"
        >panleft</v-touch
      >
      <v-touch v-on:swiperight="swiperright" class="wrapper">right</v-touch>
      <div class="menu-container" ref="menuContainer">
      </div> -->
      <div class="stack-wrapper">
        <stack ref="stack" :pages="someList" :stackinit="stackinit">
          <!-- <div slot="card" v-for="(item, index) in imgList" :key="index">
            <img :src="item.imgUrl" alt="image" />
          </div> -->
        </stack>
      </div>
      <div class="controls">
        <button @click="prev" class="button">
          <i class="prev"></i><span class="text-hidden">prev</span>
        </button>
        <button @click="next" class="button">
          <i class="next"></i><span class="text-hidden">next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import stack from "@/components/stack.vue";
export default {
  name: "Home",
  data() {
    return {
      someList: [],
      stackinit: {
        visible: 4
      },
      imgList: [
        {
          imgUrl: "http://192.168.2.105:8082/1.png"
        },
        {
          imgUrl: "http://192.168.2.105:8082/2.png"
        },
        {
          imgUrl: "http://192.168.2.105:8082/3.png"
        },
        {
          imgUrl: "http://192.168.2.105:8082/logo.png"
        }
      ]
    };
  },
  created() {
    setTimeout(() => {
      this.someList = [
        {
          html: '<img src="http://192.168.2.105:8082/blue.png" alt="01">'
        },
        {
          html: '<img src="http://192.168.2.105:8082/red.png" alt="02">'
        },
        {
          html: '<img src="http://192.168.2.105:8082/yellow.png" alt="03">'
        },
        {
          html: '<img src="http://192.168.2.105:8082/green.png" alt="04">'
        },
        {
          html: '<img src="http://192.168.2.105:8082/black.png" alt="04">'
        },
        {
          html: '<img src="http://192.168.2.105:8082/1.png" alt="04">'
        }
      ];
    }, 0);
  },
  mounted() {
    document.addEventListener("touchmove", e => {
      e.preventDefault();
    });
  },
  methods: {
    prev() {
      this.$refs.stack.$emit("prev");
    },
    next() {
      this.$refs.stack.$emit("next");
    },
    runn() {
      console.log(1);
      let box = document.querySelector(".box");
      box.innerHTML = "ZOOMING...";
    },
    endd() {
      console.log(132);
      let box = document.querySelector(".box");
      box.innerHTML = "DONE...";
    },
    sucEvent() {
      console.log("hhh");
    },
    errEvent() {
      console.log("eee");
    },
    panleft(e) {
      console.log(e.center);
    },
    panright(e) {
      console.log(e.center);
    },
    swiperleft: function() {
      console.info(111);
    },
    swiperright: function() {
      console.info(2222);
    },
    test() {
      console.log("test");
    }
  },
  provide() {
    return {
      a: "hello luan"
    };
  },
  components: {
    stack
    // HelloWorld
  }
};
</script>

<style lang="scss">
.wrapper {
  width: 100px;
  height: 100px;
  background: #ccc;
  margin: 30px auto;
}
.stack-wrapper {
  margin: 0 auto;
  position: relative;
  z-index: 1000;
  width: 320px;
  background: #ccc;
  height: 320px;
  padding: 0;
  list-style: none;
  pointer-events: none;
}
.test {
  width: 100px;
}
.box {
  margin-left: 70px;
  margin-top: 30px;
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000ff;
  color: #ffffff;
  padding: 20px;
  font: bold 1.6em "Helvetica", "Arial", sans-serif;
  -webkit-transition: width 2s, height 2s, background-color 2s,
    -webkit-transform 2s, color 2s;
  transition: width 2s, height 2s, background-color 2s, transform 2s, color 2s;
  &::hover {
    background-color: #ffcccc;
    color: #000000;
    width: 200px;
    height: 200px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
</style>
