<template>
  <a v-if="link" :href="link" class="btn" :class="modifier" @click.prevent="$emit('clickButton', link)">
    <slot name="icon"></slot>
    <span class="btn__name">{{ name }}</span>
  </a>
  <button v-else class="btn" :class="modifier" @click.prevent="$emit('clickButton')">
    <slot name="icon"></slot>
    <span class="btn__name">{{ name }}</span>
  </button>
</template>

<script setup>
  const props = defineProps({
    modifier: String,
    name: String,
    link: {
      type: String,
      default: ''
    }
  })
</script>