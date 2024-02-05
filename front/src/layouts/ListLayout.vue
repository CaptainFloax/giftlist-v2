<template>
    <div class="list-container">
        <main class="list-container_list-content">
            <slot name="list"> </slot>
        </main>
        <aside class="list-container_list-recap">
            <slot name="recap"> </slot>
        </aside>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
    .list-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        &_list-content {
            flex: 2;
        }

        &_list-recap {
            flex: 1;
            min-width: 350px;
        }

        @include bpf($max: $m) {
            &_list-recap {
                order: -1;
                margin-bottom: 30px;
            }
        }
    }
</style>
