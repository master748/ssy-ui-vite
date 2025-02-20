import type { App } from 'vue'
import SFCButton from '../SFCButton.vue'
import SButton from './button/Button'
import TSXButton from './TSXButton'
import 'virtual:uno.css'
// 导出单独组件
export { SButton, SFCButton, TSXButton }

// 编写一个插件，实现一个 install 方法
export default {
  install(app: App): void {
    app.component(SButton.name, SButton)
    app.component(SFCButton.name, SFCButton)
    app.component(TSXButton.name, TSXButton)
  },
}
