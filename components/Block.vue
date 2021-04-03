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
  @apply py-16;
}
</style>
