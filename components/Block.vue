<template>
  <div class="block">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Section',
}
</script>

<style>
.block {
  @apply py-6 sm:py-7 md:py-8 lg:py-10 2xl:py-16;
}
</style>
