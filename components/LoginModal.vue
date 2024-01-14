<template>
  <a-modal v-model:open="loginModal.isOpen" title="Basic Modal">
    {{  loginModal.isOpen  }}
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const loginModal = useLoginModal();

</script>