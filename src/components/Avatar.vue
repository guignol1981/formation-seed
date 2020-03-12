<template>
    <img class="avatar" :src="src" />
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';

    @Component
    export default class Avatar extends Vue {
        @Prop({
            default:
                'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
        })
        public src!: string;
    }
</script>

<style lang="scss" scoped>
    .avatar {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
</style>
