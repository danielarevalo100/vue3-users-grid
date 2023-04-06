<script setup>
 import { defineProps, toRefs } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  collapsed: {
    type: Boolean,
    required: true
  },
  active: {
    type: Boolean,
    required: false,
    default: false
  }

})

const { title, icon, collapsed, active } = toRefs(props);
</script>

<template>

  <a href='' class='p-4 flex flex-row' :class='{ "active-link": active }'>
    <div class='flex shrink-0'>
      <img :src='icon' class='w-4' alt=''>
    </div>
    <div class='menu-item' :class='{ collapsed: collapsed}'>
      <p class='text-[#595A5A] pl-4 whitespace-nowrap	' >{{ title }}</p>
    </div>
  </a>
</template>
