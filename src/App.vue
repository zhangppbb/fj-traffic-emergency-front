<template>
  <div id="app" class="flex flex-col items-center justify-center">
    <div class="screen-container">
      <div class="title-container">
        <div class="title-bg">
          <img src="@/assets/images/app/header-bg.png" class="w-full" />
        </div>
        <div class="title text-center">
          <span class>省级基础设施监测预警子系统</span>
        </div>
      </div>

    </div>
    <!-- 是否返回 -->
    <div class="back-container" v-show="showBack" @click="() => $router.go(-1)">
      <img class="icon" src="~@/assets/images/back-icon.svg" alt="">
    </div>

    <div class="screen-content"></div>
    <div class="app-map-container" :style="{
      opacity: hideMenu ? 0 : 1
    }">
      <Map :currentActive="currentActive"
        @districtLayerRemoved="handleDistrictLayerRemoved"
      ></Map>
    </div>
    <router-view />

    <div class="app-menu fixed z-20" v-show="!hideMenu">
      <template v-for="(item, index) in menuList">
        <div
          :class="{ active: currentActive === index }"
        :style="{
          left: (index * item.position) + 'vw',
          backgroundImage: `url(${currentActive === index ? item.activePic : item.defaultPic})`
        }" class="menu-item flex justify-center items-center" @click="handleClick(item.path, index)">
          <span
            class="menu-name"
            >{{ item.name }}</span
          >
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Map from "./views/components/Map/index.vue";
import bridgeDetail from "./views/screen/bridge/modules/details/index.vue";

export default {
  name: "App",
  components: {Map},
  data() {
    return {
      isProvinceView: true,
      currentActive: 0,
      hideMenu: false,
      showBack: false,
      menuList: [
        {
          name: "概览",
          defaultPic: require("@/assets/images/menu/menu1.png"),
          activePic: require("@/assets/images/menu/menu1_1.png"),
          path: "/",
          position: 9.4
        },
        {
          name: "桥梁",
          defaultPic: require("@/assets/images/menu/menu2.png"),
          activePic: require("@/assets/images/menu/menu2_1.png"),
          path: "/bridge",
          position: 9.4
        },
        {
          name: "隧道",
          defaultPic: require("@/assets/images/menu/menu3.png"),
          activePic: require("@/assets/images/menu/menu3_1.png"),
          path: "/tunnel",
          position: 9.4
        },
        {
          name: "边坡",
          defaultPic: require("@/assets/images/menu/menu4.png"),
          activePic: require("@/assets/images/menu/menu4_1.png"),
          path: "/slope",
          position: 9
        },
         {
          name: "路基",
          defaultPic: require("@/assets/images/menu/menu5.png"),
          activePic: require("@/assets/images/menu/menu5_1.png"),
          path: "/subgrade",
          position: 8.9
        },
      ],
    };
  },
  metaInfo() {
    return {
      title:
        this.$store.state.settings.dynamicTitle &&
        this.$store.state.settings.title,
      titleTemplate: (title) => {
        return title
          ? `${title} - ${process.env.VUE_APP_TITLE}`
          : process.env.VUE_APP_TITLE;
      },
    };
  },

  watch: {
    $route: {
      immediate: true,
      handler(route) {
        this.initRoute()
      }
    }
  },

  created() {
    this.initRoute()
  },

  methods: {
    handleDistrictLayerRemoved(value) {
       this.$store.commit('SET_PROVINCE_VIEW', value);
    },
    initRoute() {
      const { hideMenu, showBack } = this.$route.meta || {}

      const HIDE_MENU = hideMenu === true
      const SHOW_BACK = showBack === true
      this.hideMenu = HIDE_MENU
      this.showBack = SHOW_BACK
    },

    // 返回首页

    handleClick(path, index) {
      this.currentActive = index;
      this.$router.push(path);
    },
  },
};
</script>
<style lang="scss" scoped>
#app .theme-picker {
  display: none;
}

.screen-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: px2vh(78);
  // height: 8vh;
  // overflow: hidden;

  z-index: 11;
}
.back-container {
  position: fixed;
  top: px2vh(20);
  left: px2vw(20);
  z-index: 12;
  cursor: pointer;

  .icon {
    height: px2vh(28);
  }
}

.app-map-container {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.title-container {
  width: 100%;
  height: 100%;
  position: relative;
  .title-bg {
    width: 100%;
    margin: 0 auto;
    img {
     height: px2vh(140);
    }
  }
  .title {
    position: relative;
    // text-shadow: -6px 7px 6px rgba(0, 0, 0, 0.29);
    position: absolute;
    font-family: YouSheBiaoTiHei;
    left: 50%;
    top: px2vw(32);
    // top: 22%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: px2vw(30);
    // line-height: 1vw;
    letter-spacing: 0.3vw;
    &::after {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      content: attr(data-content);
      background: linear-gradient(180deg, #ffffff 0%, #3594ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: none;
    }
  }
}

.screen-content {
  position: fixed;
  left: 0;
  bottom: 0px;
  width: 100vw;
  height: 70px;
  z-index: 2;
  background: url('./assets/images/app/footer-bg.png');
  background-size: 100% 100%;
}

.app-menu {
  width: px2vw(900);
  // border: 1px solid red;
  left: 50%;
  transform: translateX(-50%);
  bottom: px2vh(30);
  $height: px2vh(44);
  height: $height;
  & > .menu-item {
    position: absolute;
    z-index: 1;
    width: px2vw(216);
    height: $height;
    cursor: pointer;
    background-size: 100% 100%;
    .menu-name {
      font-weight: 400;
      font-size: px2vw(16);
      color: #D0F8FF;
    }
    .active {
      font-weight: bold;
      font-size: px2vw(18);
      color: #ffffff;
    }
  }
  & > .menu-item.active {
    z-index: 2;
    .menu-name {
     font-weight: bold;
      font-size: px2vw(18);
      color: #ffffff;
    }
  }
}

</style>
