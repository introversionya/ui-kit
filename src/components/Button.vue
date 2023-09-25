<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps({
    label: {
    type: String,
    required: true
  },
  filled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  backgroundColor: {
    type: String
  }
})

const classes = computed(() => props.filled ? 'btn--primary' : '')
const styles = computed(() => props.backgroundColor && !props.filled ? { backgroundColor: props.backgroundColor } : {})

// interface Props {
//   label: {
//     type: string,
//     required: true,
//   },
//   filled: {
//     type: Boolean,
//     default: false,
//   },
//   icon: {
//     type: String,
//     default: '',
//   };
// }

// defineProps<Props>();
</script>

<template>
  <button type="button" :class="['btn', classes]" :style="styles">
    <img
      v-if="icon"
      :src="`src/assets/icons/${props.icon}.svg`"
      alt="Иконка"
    />
    {{ label }}
  </button>
</template>

<style scoped>
.btn {
  border: 0;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 8px;
  color: #000;
}

.btn--primary {
  background-color: pink;
}
</style>
