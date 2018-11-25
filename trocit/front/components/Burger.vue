<template>
  <a
    role="button"
    class="navbar-burger burger"
    aria-label="menu"
    aria-expanded="false"
    @click="onClick"
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
