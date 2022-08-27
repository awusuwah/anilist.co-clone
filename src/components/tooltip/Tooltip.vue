<template>
  <div>
    <!-- Activator -->
    <span ref="activator" @mouseenter="showTooltip" @mouseleave="hideTooltip">
      <slot name="activator">Trigger</slot>
    </span>

    <!-- Tooltip -->
    <div v-bind="$attrs" v-show="isTooltipShown" ref="tooltip" :class="tooltipClasses">
      <slot></slot>

      <!-- Arrow -->
      <i ref="arrow" :class="arrowClasses" />
    </div>
  </div>
</template>

<script>
import { computePosition, arrow, flip, offset, shift } from "@floating-ui/dom";

export default {
  name: "Tooltip",
  props: {
    /**
     * The offset of the tooltip.
     */
    offset: {
      type: Number,
      default: 8,
    },

    /**
     * The placement where the tooltip should be shown relative to the activator.
     */
    placement: {
      type: String,
      default: "top",
      validator: (value) => ["top", "right", "bottom", "left"].includes(value),
    },
  },
  data() {
    return {
      isTooltipShown: false,
    };
  },
  computed: {
    /**
     * The classes which are applied to the tooltip.
     */
    tooltipClasses() {
      return "tooltip absolute top-0 left-0 px-3 py-2 bg-gray-200 text-gray-900 text-sm rounded";
    },

    /**
     * The classes which are applied to the arrow of the tooltip.
     */
    arrowClasses() {
      return "tooltip-arrow absolute bg-gray-200";
    },
  },
  methods: {
    /**
     * Show the tooltip.
     */
    showTooltip() {
      this.isTooltipShown = true;

      const activatorRef = this.$refs.activator;
      const tooltipRef = this.$refs.tooltip;
      const arrowRef = this.$refs.arrow;

      document.body.appendChild(tooltipRef);

      // Compute the position for the tooltip
      computePosition(activatorRef, tooltipRef, {
        placement: this.placement,
        middleware: [offset(this.offset), shift({ padding: 20 }), flip(), arrow({ element: arrowRef })],
      }).then(({ x, y, placement, middlewareData }) => {
        Object.assign(tooltipRef.style, {
          top: `${y}px`,
          left: `${x}px`,
        });

        const staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right",
        }[placement.split("-")[0]];

        const arrowX = middlewareData.arrow.x;
        const arrowY = middlewareData.arrow.y;

        Object.assign(arrowRef.style, {
          top: arrowY != null ? `${arrowY}px` : "",
          left: arrowX != null ? `${arrowX}px` : "",
          right: "",
          bottom: "",
          [staticSide]: "-4px",
        });
      });
    },

    /**
     * Hide the tooltip.
     */
    hideTooltip() {
      this.isTooltipShown = false;
      document.body.removeChild(this.$refs.tooltip);
    },
  },
};
</script>

<style scoped>
.tooltip {
  max-width: calc(100vw - 40px);
}

.tooltip-arrow {
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
}
</style>
