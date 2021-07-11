<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <div
      v-if="enabled"
      class="my-sw-update-popup">
      {{ message }}<br>
      <button @click="reload" class="reloadButton">
        <img class="refreshIcon" @click="reload" src="/assets/icons/refresh.png">
        <p class="buttonText">{{ buttonText }}</p>
      </button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'


export default {
  components: { SWUpdatePopup }
}
</script>

<style>
.my-sw-update-popup {
  z-index: 1;
  font-family: Raleway, Arial, Helvetica, sans-serif;
  color: #fff;
  text-align: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 20px;
  padding: 10px;
  border-radius: 4px;
  background-color: #f3722c !important;

}

.refreshIcon {
    width: 1rem;
    margin: 2px;
    vertical-align: middle;
    transition: all 0.4s ease-in-out;
}
.reloadButton {
    margin-top: 10px;
    border: none;
    background-color: #fff;
}

.reloadButton:hover {
    cursor: pointer;
    background-color: #fff3e0;
}

.reloadButton:hover .refreshIcon {
    transform: rotate(360deg) scale(1.2);
}
.buttonText {
    display: inline-block;
    vertical-align: middle;
    font-family: Raleway, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    margin: 0px;
    color: black !important;
}

</style>
