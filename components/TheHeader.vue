<template>
        <div class="header-container">
            <a href="https://github.com/ATaimasov" target="_blank" class="link">
                <Logo class="header__logo logo"></Logo>
            </a>
            <ul class="header__list">
                <NuxtLink to="/" class="link">
                    <li class="header__list-item">Заметки</li>
                </NuxtLink>
                <NuxtLink to="/edit" class="link">
                    <li class="header__list-item">Редактировать</li>
                </NuxtLink>
            </ul>
        </div>
</template>

<script setup lang="ts">

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