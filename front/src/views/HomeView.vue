<template>
    <MainLayout>
        <template v-slot:content>
            <h1>Ma chère <span>Cigogne</span> v2</h1>
            <div class="links">
                <router-link to="/list" class="box">
                    <p class="box_number">01</p>
                    <div class="box_content">
                        <div class="box_content_img-container">
                            <div
                                class="img"
                                :style="{
                                    backgroundImage:
                                        'url(https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2950&q=80)'
                                }"
                            ></div>
                        </div>
                        <p class="box_content_title">La liste de naissance</p>
                    </div>
                </router-link>
                <router-link to="/prono" class="box">
                    <p class="box_number">02</p>
                    <div class="box_content">
                        <div class="box_content_img-container">
                            <div
                                class="img"
                                :style="{
                                    backgroundImage:
                                        'url(https://images.unsplash.com/photo-1559454403-b8fb88521f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80)'
                                }"
                            ></div>
                        </div>
                        <p class="box_content_title">Pronostic Naissance</p>
                    </div>
                </router-link>
            </div>
        </template>
    </MainLayout>
</template>

<script setup lang="ts">
    import MainLayout from '../layouts/MainLayout.vue';
</script>

<style lang="scss" scoped>
    .links {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    .box {
        background-color: color(neutral, 1000);
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        max-width: 350px;
        border-radius: 10px;

        &:hover {
            background-color: color(neutral, 990);

            .box_content {
                overflow: hidden;
                &_img-container {
                    .img {
                        transform: scale(120%);
                    }
                }
            }
        }

        &_number {
            color: color(accent, 500);
            font-size: 70px;
            font-family: $font-title;
            margin-top: -60px;
            line-height: 70px;
        }
        &_content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 300px;
            max-width: 100%;

            &_img-container {
                width: 100%;
                height: 250px;
                overflow: hidden;
                border-radius: 6px;

                .img {
                    width: 100%;
                    height: 100%;
                    background-position: center center;
                    background-size: cover;
                    transition: transform 1s;
                }
            }

            &_title {
                font-size: 16px;
                margin: 10px 0;
                color: color(brand, 700);
                font-weight: bold;
            }
        }
    }
</style>
