<template>
  <view
    :class="'icon-' + type"
    :style="{
      width: size + 'rpx',
      height: size + 'rpx',
      'font-size': size + 'rpx',
      color: color,
    }"
    class="iconfont"
  ></view>
</template>

<script>
export default {
  name: "iconfont",

  props: {
    type: {
      type: String,
      default: "sousuo",
    },
    size: {
      type: [Number, String],
      default: 30,
    },
    color: {
      type: String,
      default: "#999",
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "iconfont"; /* Project id 3448165 */
  src: url("https://at.alicdn.com/t/font_3448165_jocyojm3hu.woff2?t=1654527136917")
      format("woff2"),
    url("https://at.alicdn.com/t/font_3448165_jocyojm3hu.woff?t=1654527136917")
      format("woff"),
    url("https://at.alicdn.com/t/font_3448165_jocyojm3hu.ttf?t=1654527136917")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-huo::before {
  content: "\e65b";
}

.icon-sousuo::before {
  content: "\e600";
}

.icon-chakan::before {
  content: "\e666";
}

.icon-shijian::before {
  content: "\e78d";
}
</style>
