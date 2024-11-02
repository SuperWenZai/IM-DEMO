<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});

const exit = () => {
  console.log('====================================');
  console.log(1111111);
  console.log('====================================');
}
</script>
<style></style>
