<template>
  <div>
    <div class="w-full bg-gray-800/50 text-white text-xs font-medium">
      <div class="flex h-10 items-center pl-5 gap-x-8">
        <a :href="iconLink">
          <img src="../assets/images/logo-sm.svg" class="w-5" />
        </a>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  msg: string,
  iconLink: string
}

const props = defineProps<Props>()
</script>
