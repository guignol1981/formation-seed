<template>
    <div class="logo">
        <p class="m-u--h1">DTI-Overflow</p>
        <img
            class="logo__image"
            src="https://apifriends.com/wp-content/uploads/2018/04/stack-overflow-orange.png"
        />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    export default class Logo extends Vue {}
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';

    .logo {
        display: flex;
        align-items: center;

        &__image {
            flex-shrink: 0;
            margin-left: $m-spacing--s;
            width: 40px;
        }
    }
</style>
