<template>
  <Container>
    <div class="flex justify-center">
      <div class="pay-link-panel">
        <div class="details">
          <div class="image">
            <svg viewBox="0 0 512 512">
              <path
                d="M502.74 153.142a14.998 14.998 0 00-16.347 3.251L467 175.787l-19.394-19.394c-5.857-5.858-15.355-5.858-21.213 0L407 175.787l-15-15V75c0-41.351-33.638-74.992-74.993-75H77C35.533 0 0 33.522 0 75v422a15 15 0 0025.259 10.943l21.404-20.067 19.73 19.73c5.857 5.858 15.355 5.858 21.213 0L107 488.213l19.394 19.394c5.857 5.858 15.355 5.858 21.213 0L167 488.213l19.394 19.394c5.857 5.858 15.355 5.858 21.213 0L227 488.213l19.394 19.394a14.996 14.996 0 0010.61 4.394c8.24-.001 14.997-6.686 14.997-15V332h165c41.355 0 75-33.645 75-75v-90a15.002 15.002 0 00-9.261-13.858zM242 460.787l-4.394-4.394c-5.857-5.858-15.355-5.858-21.213 0L197 475.787l-19.394-19.394c-5.857-5.858-15.355-5.858-21.213 0L137 475.787l-19.394-19.394c-5.857-5.858-15.355-5.858-21.213 0L77 475.787l-19.394-19.394c-5.723-5.724-14.958-5.874-20.866-.336L30 462.376V75c0-24.393 21.523-45 47-45h180.04C247.603 42.544 242 58.129 242 75zM272 75c0-24.813 20.184-45 45-45 24.813 0 45 20.187 45 45v182c0 16.871 5.603 32.456 15.041 45H272V75zm210 182c0 24.813-20.187 45-45 45s-45-20.187-45-45v-53.787l4.394 4.394c5.857 5.858 15.355 5.858 21.213 0L437 188.213l19.394 19.394c5.857 5.858 15.355 5.858 21.213 0l4.394-4.394V257z"
              />
              <path
                d="M197 302H77c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15zM197 362H77c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15zM152 212h-30c-8.271 0-15-6.729-15-15 0-8.284-6.716-15-15-15s-15 6.716-15 15c0 24.813 20.187 45 45 45v15c0 8.284 6.716 15 15 15s15-6.716 15-15v-15c24.813 0 45-20.187 45-45s-20.187-45-45-45h-30c-8.271 0-15-6.729-15-15s6.729-15 15-15h30c8.271 0 15 6.729 15 15 0 8.284 6.716 15 15 15s15-6.716 15-15c0-24.813-20.187-45-45-45V77c0-8.284-6.716-15-15-15s-15 6.716-15 15v15c-24.813 0-45 20.187-45 45s20.187 45 45 45h30c8.271 0 15 6.729 15 15s-6.729 15-15 15z"
              />
            </svg>
          </div>
          <div class="tag">
            <span>{{ tag }}</span>
          </div>
          <p class="address">{{ address }}</p>
          <div class="amount">
            <span class="value">{{ amount }}</span>
            <span class="currency">MCX</span>
          </div>
        </div>
        <div class="qr-details">
          <vue-qrcode
            :value="address"
            :options="{
              width: 200,
            }"
            class="qr"
          />
        </div>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'
import VueQrcode from '@chenfengyuan/vue-qrcode'

interface Data {
  address: string
  tag: string
  amount: string
  label?: string
}

export default Vue.extend({
  components: {
    VueQrcode,
  },

  middleware: 'validateTransactionRequest',

  data(): Data {
    return {
      address: '',
      tag: '',
      amount: '',
    }
  },

  computed: {
    qrValue(): string {
      return this.address
    },
  },

  mounted(): void {
    this.address = this.$route.query.address as string
    this.tag = this.$route.query.tag as string
    this.amount = this.$route.query.amount as string
    this.label = this.$route.query.label as string
  },
})
</script>

<style scoped>
.pay-link-panel {
  @apply w-full md:w-1/2 max-w-lg rounded-2xl overflow-hidden shadow-2xl text-gray-800 text-center;
}

.details {
  @apply p-6 md:p-8 bg-white dark:bg-gray-800;
}

.image {
  @apply flex justify-center mb-2;
}

.image svg {
  @apply w-auto h-0 md:h-16 fill-current text-gray-300 dark:text-gray-500;
}

.tag {
  @apply text-2xl md:text-4xl font-extrabold leading-none tracking-tight;
}

.tag span {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500;
}

.address {
  @apply text-xs md:text-base font-medium text-gray-400 dark:text-gray-500 truncate;
}

.amount {
  @apply py-2 leading-none tracking-tight;
}

.amount .value {
  @apply text-3xl md:text-6xl text-gray-800 dark:text-gray-200 font-extrabold;
}

.amount .currency {
  @apply text-xl md:text-4xl text-gray-600 dark:text-gray-500 font-black;
}

.qr-details {
  @apply p-4 md:p-8 bg-gradient-to-br from-gray-100 to-gray-300 flex dark:from-gray-700 dark:to-gray-800 flex justify-center;
}

.qr {
  @apply rounded-xl;
}
</style>
