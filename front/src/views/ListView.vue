<template>
    <MainLayout>
        <template v-slot:content>
            <router-link to="/" class="return-home"
                ><i class="icon-arrow-left-line"></i> Revenir à l'accueil</router-link
            >
            <h1>La liste de <span>naissance</span></h1>
            <ListLayout>
                <template v-slot:list>
                    <div class="products-list">
                        <template v-if="products">
                            <ProductCardComponent
                                v-for="product in products"
                                :key="product.id"
                                :product="product"
                            >
                                <template v-slot:actions v-if="isAlreadyAdd(product)">
                                    <button @click="handleGiftSelection(product)" class="btn">
                                        Choisir ce cadeau
                                    </button>
                                </template>
                                <template v-slot:actions v-if="!isAlreadyAdd(product)">
                                    <button @click="handleGiftSelection(product)" class="btn added">
                                        Supprimer de la liste
                                    </button>
                                </template>
                            </ProductCardComponent>
                        </template>
                    </div>
                </template>
                <template v-slot:recap>
                    <div class="recap-container">
                        <InputCardComponent title="Recap" v-if="choosenProducts.length > 0">
                            <template v-slot:content>
                                <div
                                    class="input"
                                    v-for="(gift, index) in choosenProducts"
                                    :key="index"
                                >
                                    <label for="gift-{{ index }}">Cadeaux #1</label>
                                    <input
                                        type="text"
                                        name="gift-{{ index }}"
                                        :value="gift.name"
                                        disabled
                                    />
                                </div>
                            </template>
                        </InputCardComponent>
                        <InputCardComponent title="Infos">
                            <template v-slot:content>
                                <div class="input">
                                    <label for="name">Nom</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Entrez une taille"
                                    />
                                </div>
                                <div class="input">
                                    <label for="mail">Mail</label>
                                    <input type="mail" name="mail" placeholder="Entrez un poids" />
                                </div>
                                <button class="btn">Valider la liste</button>
                            </template>
                        </InputCardComponent>
                    </div>
                </template>
            </ListLayout>
        </template>
    </MainLayout>
</template>

<script lang="ts" setup>
    import MainLayout from '@/layouts/MainLayout.vue';
    import ListLayout from '@/layouts/ListLayout.vue';
    import ProductCardComponent from '@/components/ProductCardComponent.vue';
    import InputCardComponent from '@/components/InputCardComponent.vue';
    import { useProductsQuery } from '@/composables/products';
    import { Product } from '@/definitions/product';
    import { ref } from 'vue';

    const { products } = useProductsQuery();

    const choosenProducts = ref<Product[]>([]);

    const isAlreadyAdd = (product: Product) => {
        if (choosenProducts.value.includes(product)) {
            return false;
        }
        return true;
    };

    const handleGiftSelection = (product: Product) => {
        if (!choosenProducts.value.includes(product)) {
            choosenProducts.value.push(product);
        } else {
            choosenProducts.value = choosenProducts.value.filter((e) => e.id !== product.id);
        }
    };
</script>

<style lang="scss" scoped>
    .products-list {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    .recap-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .btn {
            background-color: color(assist, 500);
            color: color(assist, 100);
        }
    }

    .input {
        min-width: 80%;
    }
</style>
