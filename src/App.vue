<template>
    <div id="app" class="m-u--app-body">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
    $m-font-path: '~@ulaval/modul-components/dist/assets/fonts/';
    @import '~@ulaval/modul-components/dist/styles/main.scss';
</style>
