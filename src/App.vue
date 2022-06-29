<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
@import "uview-ui/index.scss";

view,
scroll-view,
swiper,
movable-area,
cover-view,
navigator,
text,
button {
  box-sizing: border-box;
}
</style>
