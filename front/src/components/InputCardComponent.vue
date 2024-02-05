<template>
    <div class="box">
        <div class="box_number">{{ title }}</div>
        <div class="box_content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
    defineProps<{
        title: string;
    }>();
</script>

<style lang="scss" scoped>
    .box {
        background-color: color(neutral, 1000);
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        max-width: 400px;
        border-radius: 10px;

        &:hover {
            background-color: color(neutral, 990);
        }

        &_number {
            color: color(accent, 500);
            font-size: 50px;
            font-family: $font-title;
            margin-top: -60px;
            line-height: 70px;
        }
        &_content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            min-width: 300px;
            max-width: 100%;
            display: flex;
            gap: 6px;
        }
    }
</style>
