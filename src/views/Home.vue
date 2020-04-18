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
      <img
        @touchmove.stop.capture.prevent="touchmove"
        @touchstart.stop.capture.prevent="touchstart"
        @touchend.stop.capture.prevent="touchend"
        @touchcancel.stop.capture.prevent="touchend"
        class="test"
        src="@/assets/1.png"
        alt="test"
      />
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
        visible: 3
      },
      imgList: [
        {
          imgUrl: "http://192.168.31.95:8082/1.png"
        },
        {
          imgUrl: "http://192.168.31.95:8082/2.png"
        },
        {
          imgUrl: "http://192.168.31.95:8082/3.png"
        },
        {
          imgUrl: "http://192.168.31.95:8082/logo.png"
        }
      ]
    };
  },
  created() {
    setTimeout(() => {
      this.someList = [
        {
          html: '<img src="http://192.168.31.95:8082/1.png" alt="01">'
        },
        {
          html: '<img src="http://192.168.31.95:8082/2.png" alt="02">'
        },
        {
          html: '<img src="http://192.168.31.95:8082/3.png" alt="03">'
        },
        {
          html: '<img src="http://192.168.31.95:8082/logo.png" alt="04">'
        }
        // {
        //   html: '<img src="img/5.png" alt="05">'
        // },
        // {
        //   html: '<img src="img/6.png" alt="06">'
        // },
        // {
        //   html: '<img src="img/7.png" alt="07">'
        // }
      ];
    }, 0);
    console.log(this.someList);
  },
  mounted() {
    document.addEventListener("touchmove", e => {
      e.preventDefault();
    });
    // let that = this;
    // setTimeout(function() {
    //   that.someList = [
    //     {
    //       html: '<img src="http://192.168.31.95:8082/1.png" alt="01">'
    //     },
    //     {
    //       html: '<img src="http://192.168.31.95:8082/2.png" alt="02">'
    //     },
    //     {
    //       html: '<img src="http://192.168.31.95:8082/3.png" alt="03">'
    //     },
    //     {
    //       html: '<img src="http://192.168.31.95:8082/logo.png" alt="04">'
    //     },
    //     {
    //       html: '<img src="img/5.png" alt="05">'
    //     },
    //     {
    //       html: '<img src="img/6.png" alt="06">'
    //     },
    //     {
    //       html: '<img src="img/7.png" alt="07">'
    //     }
    //   ];
    // }, 2000);
  },
  methods: {
    touchstart() {},
    touchmove() {},
    touchend() {},
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
</style>
