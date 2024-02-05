<template>
    <div class="card-container">
        <div class="card">
            <div class="card_img-container">
                <div class="img" :style="{ backgroundImage: 'url(' + product.img + ')' }"></div>
            </div>
            <div class="card_content">
                <p class="product_title">{{ product.name }}</p>
                <p class="product_desc">{{ product.desc }}</p>
                <div class="product_details">
                    <p class="product_details_price">{{ product.price }}</p>
                    <a class="product_details_link" :href="product.link"
                        ><i class="icon-links-line"></i> Lien</a
                    >
                </div>
            </div>
            <div class="card_action">
                <slot name="actions"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { type Product } from '@/definitions/product';

    defineProps<{
        product: Product;
    }>();
</script>

<style lang="scss">
    .card-container {
        min-width: 300px;
        max-width: 350px;
        flex: 1;
    }

    .card {
        background-color: color(neutral, 1000);
        padding: 20px;
        border-radius: 6px;
        &_img-container {
            width: 100%;
            height: 200px;

            .img {
                height: 100%;
                background-size: cover;
                background-position: center center;
            }
        }
        &_content {
            .product {
                &_title {
                    margin-top: 10px;
                    font-size: 16px;
                    font-weight: bold;
                    color: color(brand, 300);
                }

                &_desc {
                    font-size: 14px;
                    color: color(brand, 400);
                }

                &_details {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: color(brand, 950);
                    padding: 20px 10px;
                    margin: 10px 0;
                    &_price {
                        font-size: 23px;
                    }

                    &_link {
                        font-size: 16px;
                        font-weight: 500;
                        padding: 5px 10px;
                    }
                }
            }
        }
        &_action {
            .btn {
                width: 100%;
                justify-content: center;
                font-size: 16px;
                padding: 10px 15px;
            }
        }
    }
</style>
