import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import 'virtual:uno.css'

export type ISize = 'small' | 'medium' | 'large'
export type IColor =
  | 'black'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'

export const props = {
  // 颜色
  color: {
    type: String as PropType<IColor>,
    default: 'blue',
  },

  /**
   * 尺寸
   * @example 'small' | 'medium' | 'large'
   */
  size: {
    type: String as PropType<ISize>,
    default: 'medium',
  },

  // 是否圆角
  round: {
    type: Boolean,
    default: false,
  },

  // 是否扁平
  plain: {
    type: Boolean,
    default: false,
  },
  // 图标
  icon: {
    type: String,
    default: '',
  },
} as const

// export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export default defineComponent({
  name: 'SButton',
  props,
  setup(props, { slots }) {
    const size = {
      small: {
        x: '2',
        y: '1',
        text: 'sm',
      },
      medium: {
        x: '3',
        y: '1.5',
        text: 'base',
      },
      large: {
        x: '4',
        y: '2',
        text: 'lg',
      },
    }

    return () => (
      <button
        class={`
          py-${size[props.size].y}
          px-${size[props.size].x}
          ${props.round ? 'rounded-full' : 'rounded-lg'}
          bg-${props.color}-${props.plain ? '100' : '500'}
          hover:bg-${props.color}-400
          border-${props.color}-${props.plain ? '500' : '500'}
          cursor-pointer
          border-solid
          text-${props.plain ? `${props.color}-500` : 'white'}
          text-${size[props.size].text}
          hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105

          mx-1
          `}
      >
        {props.icon !== ''
          ? (
              <i class={`i-ic-baseline-${props.icon} p-3`}></i>
            )
          : (
              ''
            )}
        {slots.default ? slots.default() : ''}
      </button>
    )
  },
})
