<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <Hero title="Vue Jobs" subtitle="A Simple website built with Vue.js" />
  <HomeCards />
  <JobListings :limit="4" :showButton="true" />
</template>
