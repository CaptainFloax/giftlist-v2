<template>
    <div id="app-container" class="app-container">
        <main class="main-layout-content">
            <slot name="content"> </slot>
        </main>
    </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
    .app-container {
        display: block;
        width: 100%;
        height: 100%;
        border-top: 10px solid color(accent, 500);
        background: color(brand, 980);

        .main-layout-content {
            width: 100%;
            min-height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
</style>
