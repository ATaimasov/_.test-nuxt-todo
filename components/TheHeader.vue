<template>
        <div class="header-container">
            <a href="https://github.com/ATaimasov" target="_blank" class="link">
                <Logo class="header__logo logo"></Logo>
            </a>
            <ul class="header__list">
                <NuxtLink to="/edit" class="link" v-if="route.name !== 'edit'">
                    <li class="header__list-item">Редактировать</li>
                </NuxtLink>
                <li 
                  v-if="route.name === 'edit'"
                  @click="notesStore.addItem()"
                  class="header__list-item link"
                >Создать заметку</li>
            </ul>
        </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useNotesStore } from '~/stores/useNotesStore'

const route = useRoute();
const notesStore = useNotesStore()


</script>

<style lang="scss" scoped>

    .link {
        color: $color-text-main;
        font-size: px-to-rem(18px);
    }

    .header {
        &__list {
            display: flex;
            align-items: center;
            @include mf-bp-rem('gap', (
                xs: 10px,
                md: avg(10px, 20px),
                xxl: 20px,
            ))
        }
        
    }

    
</style>