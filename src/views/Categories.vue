<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading"/>
      <div v-else class="row">
        <div class="col s12 m6">
          <CategoriesCreate @created="addNewCategory"/>
        </div>
        <div class="col s12 m6">
          <CategoriesEdit
            v-if="categories.length"
            :key="categories.length + updateCount"
            :categories="categories"
            @updated="updateCategories"
          />
          <p v-else class="center">Empty Categories</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CategoriesEdit from '../components/Categories/Edit.vue';
import CategoriesCreate from '../components/Categories/Create.vue';

export default {
  name: 'Categories',
  data: () => ({
    categories: [],
    loading: true,
    updateCount: 0,
  }),
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories');
    this.loading = false;
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
    },
    updateCategories(category) {
      const idx = this.categories.findIndex(({ id }) => id === category.id);
      this.categories[idx].title = category.title;
      this.categories[idx].limit = category.limit;
      this.updateCount += 1;
    },
  },
  components: { CategoriesEdit, CategoriesCreate },
};
</script>
