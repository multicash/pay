<template>
  <container>
    <div class="flex h-full justify-center items-center">
      <div class="text-center text-white">
        <h1 class="text-9xl font-extrabold">404</h1>
        <p class="text-xl font-bold">This page could not be found</p>
        <nuxt-link
          class="text-blue-300 hover:text-white cursor-pointer"
          to="/help-me"
        >
          Need help?
        </nuxt-link>
      </div>
    </div>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: 'Page Not Found - MultiCash Pay',
  },
})
</script>
