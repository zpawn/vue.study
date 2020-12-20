<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">12.12.12</span>
      </div>

      <ProfileMenu/>
    </div>
  </nav>
</template>

<script>
import ProfileMenu from './ProfileMenu.vue';

export default {
  name: 'NavBar',
  components: { ProfileMenu },
};
</script>
