<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
    import HomeView from './views/HomeView.vue';
</script>

<template>
    <router-view />
</template>

<style lang="scss">
    #app {
        display: block;
        width: 100%;
        height: 100%;
        max-width: 100%;
        padding: 0;
    }
</style>
