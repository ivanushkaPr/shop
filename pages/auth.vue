<script setup>
import { useCounterStore } from "~/stores/test.js";

</script>

<template>
  <div class="auth">
    <form-enter/>
  </div>
</template>

<style lang="scss">
.auth {
  padding: 24px 300px;
  max-width: 1320px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>