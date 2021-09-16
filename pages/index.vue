<template>
  <Container>
    <div class="flex justify-center">
      <div class="pay-link-panel">
        <div class="details">
          <div class="title">Pay</div>
          <div class="tag">
            <span>{{ tag }}</span>
          </div>
          <p class="address">{{ address }}</p>
          <div class="title">Amount</div>
          <div class="amount">
            <span class="value" :class="valueSize">{{ formattedAmount }}</span>
            <span class="currency">MCX</span>
          </div>
          <template v-if="label">
            <div class="title">Label</div>
            <div class="label">
              <span>{{ label }}</span>
            </div>
          </template>
        </div>
        <div class="colors-divider" />
        <div class="qr-details">
          <vue-qrcode
            :value="qrValue"
            :options="{
              width: 200,
              height: 200,
            }"
            class="qr"
            tag="svg"
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
  id: string
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
      id: '',
      address: '',
      tag: '',
      amount: '',
    }
  },

  computed: {
    formattedAmount(): string {
      const amount = Number(this.amount)

      return new Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'MCX',
      })
        .format(amount)
        .replace('MCX', '')
    },

    valueSize(): string {
      const value = String(parseInt(this.amount)).length

      switch (true) {
        case value < 4:
          return 'text-5xl md:text-7xl'
        case value < 7:
          return 'text-4xl md:text-6xl'
        case value < 8:
          return 'text-4xl md:text-5xl'
        default:
          return 'text-3xl md:text-4xl'
      }
    },

    qrValue(): string {
      let url = `https://pay.multicash.io/?id=${this.id}&address=${this.address}&tag=${this.tag}&amount=${this.amount}`

      if (this.label !== '' && this.label !== null) {
        url += '&label=' + this.label
      }

      return encodeURI(url)
    },
  },

  created(): void {
    this.id = this.$route.query.id as string
    this.address = this.$route.query.address as string
    this.tag = this.$route.query.tag as string
    this.amount = this.$route.query.amount as string
    this.label = this.$route.query.label as string

    if (!this.address) {
      this.getAddressFromTag(this.tag)
    }
  },

  methods: {
    getAddressFromTag(tag: string): void {
      fetch(`https://staging.tags.multicash.io/api/mainnet/tags/${tag}`, {
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => response.json())
        .then((address) => {
          this.address = address.address
        })
    },
  },
})
</script>

<style scoped>
.pay-link-panel {
  @apply w-full md:w-1/2 max-w-lg shadow-lg rounded-2xl text-gray-800 text-center ring-1 ring-gray-100 dark:ring-gray-700;
}

.details {
  @apply p-4 md:p-8 bg-gray-50 dark:bg-gray-800 rounded-t-2xl;
}

.image svg {
  @apply w-auto h-0 md:h-16 fill-current text-gray-300 dark:text-gray-500;
}

.title {
  @apply text-blue-600 dark:text-blue-400 font-medium text-xs tracking-widest uppercase;
}

.tag {
  @apply text-2xl md:text-4xl font-extrabold leading-none tracking-tight;
}

.tag span {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500;
}

.address,
.label {
  @apply -mt-0.5 leading-5 text-xs md:text-base font-medium text-gray-400 dark:text-gray-500 truncate;
}

.amount {
  @apply py-1 md:py-2 leading-none tracking-tight;
}

.amount .value {
  @apply text-gray-800 dark:text-gray-200 font-extrabold;
}

.amount .currency {
  @apply text-xl md:text-4xl text-gray-600 dark:text-gray-500 font-black;
}

.colors-divider {
  @apply bg-colors h-2 w-full;
}

.qr-details {
  @apply p-4 bg-gradient-to-br from-gray-100 to-gray-300 flex dark:from-gray-700 dark:to-gray-800 flex justify-center rounded-b-2xl;
}

.qr {
  width: 200px;
  height: 200px;
  @apply rounded-xl;
}
</style>
