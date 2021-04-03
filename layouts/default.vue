<template>
  <div class="bg-colors h-screen flex flex-col">
    <Block>
      <Container class="flex items-center">
        <Logo class="w-auto h-7 sm:h-8" flat inverted />
        <h1 class="font-extrabold text-6xl text-white ml-0 italic">Pay</h1>
      </Container>
    </Block>
    <Nuxt class="flex-1" />
    <div class="py-4 flex items-end justify-center text-white text-sm">
      © 2021 MultiCash. All Rights Reserved
    </div>
  </div>
</template>

<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @apply bg-white dark:bg-gray-900 text-black dark:text-white;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  @apply m-0;
}

p {
  @apply my-4;
}
</style>
