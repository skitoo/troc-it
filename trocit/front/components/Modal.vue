<template>
  <div class="modal is-active">
    <div class="modal-background" />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button
          class="delete"
          aria-label="close"
          @click="close"
        />
      </header>
      <section class="modal-card-body">
        <slot />
      </section>
      <footer class="modal-card-foot">
        <button
          class="button is-primary"
          @click="submit"
        >
          {{ submitButtonText }}
        </button>
        <button
          class="button"
          @click="close"
        >
          {{ $t('Cancel') }}
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    submitButtonText: {
      type: String,
      required: true,
    },
  },
  methods: {
    submit() {
      this.$emit('submit');
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>
