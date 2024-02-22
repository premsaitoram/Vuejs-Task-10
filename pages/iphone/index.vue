<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <nuxt-link v-for="iphone in iphones" :key="iphone.id" :to="`/iphone/${iphone}`" class="shadow-lg border rounded-lg text-center">
      <h1>{{iphone}}</h1>
      <div class="flex justify-center">
         <img width="200" :src="`/images/${iphone}.jpg`" alt="" />
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
useHead({
    title:"Iphones"
})

const iphones = [
  'iphone-12',
  'iphone-13',
  'iphone-14'
]

const { data } = useFetch("/api/iphones") 
console.log(data.value)

</script>
