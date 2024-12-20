<template>
        <div class="footer-container">
            <div class="footer__text-container">
                <h3 class="footer-text">all rights reserved</h3>
            </div>
        </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
    .footer {
        
        &-container {
            justify-content: center;
        }

         &__text-container {
            padding: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__text {
            font-size: 0.813rem;
            line-height: 1rem;
        }
    }
    
</style>