<template>
    <MainLayout>
        <template v-slot:content>
            <router-link to="/" class="return-home"
                ><i class="icon-arrow-left-line"></i> Revenir à l'accueil</router-link
            >
            <h1>Pronostic pour la <span>naissance</span></h1>
            <div class="box-container">
                <InputCardComponent title="Date">
                    <template v-slot:content>
                        <div class="input">
                            <label for="date">Date de naissance</label>
                            <input type="date" name="birthdate" />
                        </div>
                    </template>
                </InputCardComponent>
                <InputCardComponent title="Taille">
                    <template v-slot:content>
                        <div class="input">
                            <label for="size">Taille</label>
                            <input type="text" name="size" placeholder="Entrez une taille" />
                        </div>
                        <div class="input">
                            <label for="weight">Poids</label>
                            <input type="text" name="weight" placeholder="Entrez un poids" />
                        </div>
                    </template>
                </InputCardComponent>
                <InputCardComponent title="Prénoms">
                    <template v-slot:content>
                        <div class="input">
                            <label for="name1">Prénom #1</label>
                            <input type="text" name="name1" placeholder="Première choix" />
                        </div>
                        <div class="input">
                            <label for="name2">Prénom #2</label>
                            <input type="text" name="name2" placeholder="Deuxième proposition" />
                        </div>
                        <div class="input">
                            <label for="name3">Prénom #3</label>
                            <input type="text" name="name3" placeholder="Troisième choix" />
                        </div>
                    </template>
                </InputCardComponent>
                <InputCardComponent title="Infos">
                    <template v-slot:content>
                        <div class="input">
                            <label for="name">Nom</label>
                            <input type="text" name="name" placeholder="Entrez une taille" />
                        </div>
                        <div class="input">
                            <label for="mail">Mail</label>
                            <input type="mail" name="mail" placeholder="Entrez un poids" />
                        </div>
                        <button class="btn">Valider le prono</button>
                    </template>
                </InputCardComponent>
            </div>
        </template>
    </MainLayout>
</template>

<script lang="ts" setup>
    import MainLayout from '@/layouts/MainLayout.vue';
    import InputCardComponent from '@/components/InputCardComponent.vue';
</script>

<style lang="scss" scoped>
    h1 {
        margin-bottom: 50px;
    }
    .box-container {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        max-width: 900px;
    }
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

            .input {
                min-width: 80%;
            }
        }
    }
</style>
