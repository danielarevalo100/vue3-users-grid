<script setup>
import { ref } from 'vue';

const selectOption = ref(0);

const people = [
  {
    "name": "Juan Perez",
    "email": "juan.perez@example.com",
    "address": "Calle 123, Ciudad 456",
    "phone": "555-123-4567"
  },
  {
    "name": "Maria Rodriguez",
    "email": "maria.rodriguez@example.com",
    "address": "Avenida 456, Ciudad 789",
    "phone": "555-234-5678"
  },
  {
    "name": "Jose Gonzalez",
    "email": "jose.gonzalez@example.com",
    "address": "Calle 789, Ciudad 123",
    "phone": "555-345-6789"
  },
  {
    "name": "Ana Hernandez",
    "email": "ana.hernandez@example.com",
    "address": "Avenida 123, Ciudad 456",
    "phone": "555-456-7890"
  },
  {
    "name": "Carlos Garcia",
    "email": "carlos.garcia@example.com",
    "address": "Calle 456, Ciudad 789",
    "phone": "555-567-8901"
  },
  {
    "name": "Sofia Lopez",
    "email": "sofia.lopez@example.com",
    "address": "Avenida 789, Ciudad 123",
    "phone": "555-678-9012"
  },
  {
    "name": "Pedro Martinez",
    "email": "pedro.martinez@example.com",
    "address": "Calle 123, Ciudad 456",
    "phone": "555-789-0123"
  },
  {
    "name": "Laura Perez",
    "email": "laura.perez@example.com",
    "address": "Avenida 456, Ciudad 789",
    "phone": "555-890-1234"
  },
  {
    "name": "Miguel Rodriguez",
    "email": "miguel.rodriguez@example.com",
    "address": "Calle 789, Ciudad 123",
  },
  {
    "name": "Isabella Gonzalez",
    "email": "isabella.gonzalez@example.com",
    "phone": "555-012-3456"
  },
  {
    "name": "Emilio Hernandez",
    "email": "emilio.hernandez@example.com",
    "address": "Calle 456, Ciudad 789",
    "phone": "555-123-4567"
  },
  {
    "name": "Jasmine Garcia",
    "email": "jasmine.garcia@example.com",
    "address": "Avenida 789 con Avenida 5, calle 3, Ciudad 123",
    "phone": "555-234-5678"
  },
  {
    "name": "Juanita Lopez",
    "email": "juanita.lopez@example.com",
    "address": "Calle 123, Ciudad 456",
    "phone": "555-345-6789"
  },
  {
    "name": "Fernando Martinez",
    "email": "fernando.martinez@example.com",
    "address": "Avenida 456, Ciudad 789",
    "phone": "555-456-7890"
  }
];


</script>

<template>

  <div class='w-full flex p-4 md:p-10 items-start flex-col'>
    <div class='w-full flex flex-row items-center justify-between'>
      <h1 class='font-bold text-4xl'>Usuarios</h1>
      <div class='flex-row flex border items-center rounded-lg border-[#3A79BD]'>
        <div class='w-1/2 h-full absolute rounded-lg bg-[#3A79BD47] duration-100 ease-in' :style="{ left: `${selectOption * 50}%` }"></div>
        <div class='p-1' @click="selectOption = 0">
          <img draggable='false' class='w-5 h-5' src='/icons/list_black_24dp.svg' alt=''>
        </div>
        <div class='p-1' @click="selectOption = 1">
          <img draggable='false' class='w-5 h-5' src='/icons/grid_view_black_24dp.svg' alt=''>
        </div>
      </div>
    </div>

    <div class='w-full flex flex-row flex-wrap' style='max-width: 1500px'>
      <div class='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-6 flex' v-for='person in people'>
        <div class='rounded-lg box mt-8 flex-1'>
          <div class='w-full bg-cover relative justify-center flex rounded-t-lg card-head' style="height: 120px; background-image: url('/bg.jpg')">
            <div class='absolute inset-0 shadowed'></div>
            <h3 class='text-white text-lg font-bold absolute bottom-2 text-center'>{{ person.name }}</h3>
            <img src='/people.jpg' class='w-28 h-28 object-cover -top-8 rounded-full border-4 border-white absolute' alt=''>
          </div>
          <div class='p-3 bg-white rounded-b-lg'>
            <div class='flex-row flex'>
             <img class='w-4' src='/icons/email_black.svg' alt=''>
             <p class='text-xs ml-2'>{{ person.email }}</p>
            </div>
            <div class='flex-row flex mt-4' v-if='person.phone'>
              <img class='w-4' src='/icons/smartphone_black_24dp.svg' alt=''>
              <p class='text-xs ml-2'>{{ person.phone }}</p>
            </div>
            <div class='flex-row flex mt-4 items-start' v-if='person.address'>
              <img class='w-4' src='/icons/fmd_good_black_24dp.svg' alt=''>
              <p class='text-xs ml-2'>{{ person.address }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped>
.box {
  box-shadow: 0px 20px 40px #3A79BD19;
  transition: 0.2s;
}
.box:hover {
  box-shadow: 0px 20px 40px #3A79BD5A;
}
.shadowed {
  background: transparent linear-gradient(180deg, #00000000 0%, #00000099 100%) 0% 0% no-repeat padding-box
}

.card-head {
  transition: 0.2s;
  background-size: 100%;
}
.box:hover .card-head{
  background-size: 105%;

}

.card-head img{
  transition: 0.2s;
}
.box:hover .card-head img{
  transform: scale(1.1);
}
</style>
