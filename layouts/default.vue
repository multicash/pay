<template>
  <div class="layout">
    <Block>
      <Container class="header">
        <div class="logo-container">
          <Logo class="logo" flat inverted />
          <h1 class="logo-pay">Pay</h1>
        </div>
        <div>
          <ul class="menu-links">
            <li><a>Help me</a></li>
            <li><a>Get Started with MultiCash</a></li>
          </ul>
        </div>
      </Container>
    </Block>
    <Nuxt class="flex-1" />
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
  @apply min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white;
}

body {
  @apply min-h-screen;
}

#__nuxt {
  @apply min-h-screen;
}

#__layout {
  @apply min-h-screen;
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
  @apply min-h-screen bg-colors flex flex-col;
}

.header {
  @apply flex justify-center md:justify-between items-center flex-col md:flex-row;
}

.logo-container {
  @apply flex items-center;
}

.logo {
  @apply w-auto h-5 md:h-8;
}

.logo-pay {
  @apply font-extrabold text-4xl md:text-6xl text-white ml-0 italic;
}

.menu-links {
  @apply flex justify-end align-middle;
}

.menu-links li a {
  @apply p-4 flex items-center justify-center text-lg font-medium text-white hover:bg-white hover:bg-opacity-10 cursor-pointer;
}

.footer {
  @apply py-4 flex items-end justify-center text-white text-sm;
}
</style>
