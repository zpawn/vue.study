<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{date | date('datetime')}}</span>
      </div>

      <ProfileMenu/>
    </div>
  </nav>
</template>

<script>
import ProfileMenu from './ProfileMenu.vue';

export default {
  name: 'NavBar',
  data: () => ({
    date: new Date(),
    intervalId: null,
  }),
  mounted() {
    this.intervalId = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  components: { ProfileMenu },
};
</script>
