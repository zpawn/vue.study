<template>
  <ul class="right hide-on-small-and-down">
    <li>
      <a
        class="dropdown-trigger black-text"
        href="#"
        data-target="dropdown"
        ref="profileMenu"
      >
        USER NAME
        <i class="material-icons right">arrow_drop_down</i>
      </a>

      <ul id='dropdown' class='dropdown-content'>
        <li>
          <router-link to="/profile" class="black-text">
            <i class="material-icons">account_circle</i>Профиль
          </router-link>
        </li>
        <li class="divider" tabindex="-1"></li>
        <li>
          <a href="#" class="black-text" @click.prevent="logout">
            <i class="material-icons">assignment_return</i>Выйти
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProfileMenu',
  mounted() {
    // eslint-disable-next-line
    M.Dropdown.init(this.$refs.profileMenu, {
      constrainWidth: false,
    });
  },
  methods: {
    logout() {
      this.$router.push('/login?message=logout');
    },
  },
};
</script>
