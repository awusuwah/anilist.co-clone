<template>
  <section>
    <h2 v-if="title" class="ml-3 mb-2 text-sm text-gray-400 font-bold">
      {{ title }}
    </h2>

    <div class="bg-foreground grid grid-cols-4 gap-4 p-4 rounded-md">
      <div v-for="item in items" :key="item.id">
        <Tooltip>
          <span>{{ item.title }}</span>

          <template #activator>
            <img :src="item.image" class="w-20 rounded-md" />
          </template>
        </Tooltip>
      </div>
    </div>
  </section>
</template>

<script>
import Tooltip from "@/components/tooltip/Tooltip.vue";

export default {
  name: "Showcase",
  components: {
    Tooltip,
  },
  props: {
    /**
     * The items which will be displayed in the showcase. Each item must have
     * the following properties:
     *  - id: The unique id of the item.
     *  - image: The image to display.
     *  - title: The title shown in the tooltip when the image is hovered.
     */
    items: {
      type: Array,
      default: () => [],
    },

    /**
     * The title which is shown above the showcase.
     */
    title: {
      type: String,
      default: undefined,
    },
  },
};
</script>
