<template>
  <svg>
    <use :xlink:href="`#icon-${icon}`" :fill="color" />
  </svg>
</template>

<script>
export default {
  name: "Icon",
  props: {
    /**
     * The color which will be applied to the icon. By default, the current
     * text color is being used.
     */
    color: {
      type: String,
      default: "currentColor",
    },

    /**
     * The unique name of the icon which should be displayed.
     */
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
