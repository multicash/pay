<template>
  <div class="layout">
    <Container class="header">
      <div class="logo-container">
        <Logo class="logo" flat />
        <h1 class="logo-pay">Pay</h1>
      </div>
      <div>
        <ul class="menu-links">
          <li>
            <nuxt-link to="/help-me">Help me</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/get-started-with-multicash">Get Started </nuxt-link>
          </li>
          <li class="hidden sm:inline-flex button">
            <nuxt-link to="/generate">Generate</nuxt-link>
          </li>
        </ul>
      </div>
    </Container>
    <Block class="flex-1">
      <Nuxt class="flex-1" />
    </Block>
    <div class="footer">© 2021 MultiCash. All Rights Reserved</div>
  </div>
</template>

<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @apply h-full md:min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white;
}

body {
  @apply h-full md:min-h-screen;
}

#__nuxt {
  @apply h-full md:min-h-screen;
}

#__layout {
  @apply h-full md:min-h-screen;
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

.layout {
  @apply h-full md:min-h-screen flex flex-col;

  /* bg-colors */
}

.header {
  @apply flex justify-center md:justify-between items-center flex-col md:flex-row w-full px-10;
}

.logo-container {
  @apply flex items-center;
}

.logo {
  @apply w-auto h-4 md:h-5;
}

.logo-pay {
  @apply font-extrabold text-2xl md:text-4xl text-gray-900 ml-0 italic;
}

.menu-links {
  @apply flex justify-end align-middle;
}

.menu-links li a {
  @apply p-3 pt-4 md:p-4 flex items-center justify-center font-medium text-gray-900 hover:bg-black hover:bg-opacity-10 cursor-pointer;
}

.footer {
  @apply bg-colors py-2 md:py-4 flex items-end justify-center text-white text-sm;
}
</style>

<script>
import Block from '../components/Block'
import Container from '../components/Container'

export default {
  components: { Container, Block },
}
</script>
