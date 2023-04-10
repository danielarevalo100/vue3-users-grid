<script setup>
import { ref } from 'vue';
import { useRoute, RouterView } from 'vue-router'

import MenuItem from './MenuItem.vue'

const displayMenu = ref(true);

const handleClick = () => {
  displayMenu.value = !displayMenu.value;
}

const route = useRoute();

const menuItems = [
  { title: 'Layouts', icon: '/icons/layout.svg', path: '/layouts' },
  { title: 'Marks', icon: '/icons/bookmark_border_black_24dp.svg', path: '/marks' },
  { title: 'Portfolio', icon: '/icons/work_outline_black_24dp.svg', path: '/' },
  { title: 'Features', icon: '/icons/zap.svg', path: '/features' },
  { title: 'Results', icon: '/icons/trending-up.svg', path: '/results' },
]
</script>

<template>
  <div class='w-full flex flex-row h-full md:max-h-screen overflow-hidden'>
    <div class='hidden md:flex h-full px-4 py-8 border-r border-[#EEEBF4] flex-col items-center'>
      <div class='w-full flex shrink-0'>
        <img src='/sofexLogo.svg' class='w-12' alt='brand logo'>
      </div>
      <nav class='flex flex-col mt-16 gap-3 justify-center align-center'>
        <MenuItem v-for='item in menuItems' :title='item.title' :icon='item.icon' :collapsed='displayMenu' :active='route.path === item.path'/>
      </nav>
      <div class='mt-auto flex'>
        <MenuItem title='Log out' icon='/icons/power.svg' :collapsed='displayMenu' :active='false'/>
      </div>
    </div>
    <div class='flex flex-1 flex-col'>
      <div class='w-full flex flex-col'>
        <div class='flex flex-row w-full p-6 md:p-10 border border-[#EEEBF4] border-l-0'>
          <div class='flex md:hidden shrink-0 mr-auto'>
            <img src='/sofexLogo.svg' class='w-8' alt='brand logo'>
          </div>
          <button @click='handleClick'>
            <img src='/icons/menu.svg' class='w-4' alt=''>
          </button>
          <img src='/icons/bell2.svg' class='w-4 ml-auto hidden md:block' alt=''>
          <img src='/icons/user.svg' class='w-4 ml-10 hidden md:block' alt=''>
        </div>
        <div class='w-full mobile-menu md:hidden' :class='{ active: !displayMenu }'>
          <nav class='flex w-full flex-col items-center gap-2 border-b p-4'>
            <div v-for='item in menuItems'>
              <a href='text-[#595A5A]'>{{item.title}}</a>
            </div>
          </nav>

        </div>
      </div>
       <div class='flex md:flex-1 overflow-y-auto bg-[url("/bg.svg")] bg-no-repeat bg-right-bottom'>
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<style>
.menu-item {
  transition: all 0.3s ease-in-out;
  max-width: 300px;
  width: 100%;
  overflow: hidden;
}
.collapsed {
  max-width: 0;
}
.active-link {
  @apply bg-[#3A79BD18] rounded-lg;
}
.active-link p {
  @apply text-[#3A79BD];
}
.mobile-menu {
  transition: all 0.3s ease-in-out;
  max-height: 0;
  overflow: hidden;
}
.mobile-menu.active {
  max-height: 350px;
}
</style>
