<template>
  <div></div>
  <!-- <a :href="href" v-bind="$attrs" :class="['base-link', color]" target="_blank">
    <div class="base-link-text">
      <slot></slot>
    </div>

    <slot name="icon"></slot>
  </a> -->
</template>

<script>
// export default {
//   name: 'BaseLink',
//   inheritAttrs: false,

//   props: {
//     href: {
//       type: String,
//       default: ''
//     },

//     color: {
//       type: String,
//       default: 'primary',
//       validator(val) {
//         return ['primary', 'light'].includes(val);
//       }
//     }
//   }
// };
</script>

<style lang="scss" scoped>
// $button-height: 50px;

// .base-link {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: $button-height;
//   margin: 0;
//   padding: 0 20px;
//   font-weight: 600;
//   font-size: 14px;
//   text-transform: uppercase;
//   border: 0;
//   font-family: inherit;
//   border-radius: 4px;
//   transition: all 0.25s $base-easing;

//   svg {
//     width: 15px;
//     height: 15px;
//     margin-left: 15px;
//     flex-shrink: 0;
//   }

//   &.primary {
//     color: $color-white;
//     background-color: $color-primary;

//     &:hover {
//       background-color: $color-light-orange;
//       box-shadow: $button-box-shadow;
//     }

//     svg {
//       fill: $color-white;
//     }
//   }
// }
</style>
