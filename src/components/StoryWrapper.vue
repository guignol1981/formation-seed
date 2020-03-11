<template>
    <div class="m-u--app-body">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component
    export default class StoryWrapper extends Vue {}
</script>

<style lang="scss">
    $m-font-path: '~@ulaval/modul-components/dist/assets/fonts/'; //this is required.
    @import '~@ulaval/modul-components/dist/styles/main.scss';
</style>
