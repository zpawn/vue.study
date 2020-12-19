<template>
  <div class="app-main-layout">
    <NavBar @click="isOpen = !isOpen"/>

    <Sidebar v-model="isOpen"/>

    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <router-view/>
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/app/NavBar.vue';
import Sidebar from '../components/app/Sidebar.vue';

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true,
  }),
  components: { NavBar, Sidebar },
};
</script>
