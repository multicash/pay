<template>
  <Block>
    <Container class="flex justify-center">
      <div class="warning">
        <h1 class="title">
          <span>Invalid Transaction Request</span>
        </h1>
        <p>
          No of not enough transaction request parameters were found.<br />
          Please try again with another transaction request.
        </p>
      </div>
    </Container>
  </Block>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InvalidTransactionRequest',
})
</script>

<style scoped>
.warning {
  @apply w-full md:w-1/2 2xl:w-1/3 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-2xl;
}

.title {
  @apply text-2xl md:text-3xl font-extrabold leading-none tracking-tight;
}

.title span {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500;
}
</style>
