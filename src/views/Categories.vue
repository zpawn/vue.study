<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <div class="col s12 m6">
          <CategoriesCreate @created="addNewCategory"/>
        </div>
        <div class="col s12 m6">
          <CategoriesEdit/>
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
  }),
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
      console.log('>>>', this.categories);
    },
  },
  components: { CategoriesEdit, CategoriesCreate },
};
</script>
