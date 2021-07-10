<template>
    <span>
        <svg v-bind:width="width" v-bind:viewBox="viewBox"><g :fill="iconColor"><slot/></g></svg>
    </span>
</template>

<script>
export default {
  props: {
  width: {
    default: '3em',
    type: String
  },
  viewBox: {
    default: "0 0 100 100",
    type: String
  },
  name: {
    default: "#icon-download",
    type: String
  },
    iconColor: {
      type: String,
      default: 'currentColor'
  }
}
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
