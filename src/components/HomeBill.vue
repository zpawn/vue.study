<template>
  <div class="card light-blue bill-card">
    <div class="card-content white-text">
      <span class="card-title">Счет в валюте</span>

      <p class="currency-line">
        <span>12.0 <span v-html="$const('UAH')"></span></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBill',
};
</script>
