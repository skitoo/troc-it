<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="/"
      >
        Troc It !
      </a>
      <burger
        :class="{ 'is-active': isActive }"
        @click="toggleMenu"
      />
    </div>
    <!-- menu -->
    <navbar-menu
      :class="{ 'is-active': isActive }"
    />
  </nav>
</template>

<script>
import Burger from './Burger';
import NavbarMenu from './NavbarMenu';

export default {
  components: {
    Burger,
    NavbarMenu,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
