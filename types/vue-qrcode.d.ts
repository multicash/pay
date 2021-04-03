declare module '@chenfengyuan/vue-qrcode' {
  import { Component, AsyncComponent } from 'vue'

  export type VueQrcode =
    | Component<any, any, any, any>
    | AsyncComponent<any, any, any, any>
}
