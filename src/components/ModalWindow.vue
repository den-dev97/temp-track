<template>
  <transition name="fade">
    <div v-if="props.isOpen" class="modal">
      <div class="modal-content">
        <slot></slot>
        <button class="close-btn" @click="close">✖</button>
      </div>
    </div>
  </transition>

</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
    required: true
  }
});

const emit = defineEmits(['update:isOpen']);

const close = () => {
  emit('update:isOpen', false);
};

</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  position: relative;
}

.close-btn {
  width: 10px;
  height: 10px;
  text-align: center;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
