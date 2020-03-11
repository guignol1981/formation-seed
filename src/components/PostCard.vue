<template>
    <m-panel
        class="post"
        :highlighted="true"
        :padding="false"
        :shadow="true"
        skin="light"
    >
        <div slot="header" class="post__header">
            <h2 class="post__title">{{ post.title }}</h2>
        </div>
        <div class="post__body" v-html="post.body"></div>
        <div slot="footer" class="post__footer">
            <m-link>#Détails</m-link>
            <m-icon-button
                iconName="m-svg__edit"
                buttonSize="32px"
                iconSize="20px"
                skin="light"
            ></m-icon-button>
        </div>
    </m-panel>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Prop, Emit } from 'vue-property-decorator';

    @Component
    export default class PostCard extends Vue {
        @Prop({ required: true })
        public post!: { id: string; title: string; body: string };

        @Emit('editClicked')
        public emitEditClicked(postId: string): void {}

        protected created(): void {
            this.emitEditClicked(this.post.id);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@ulaval/modul-components/dist/styles/commons';

    .post {
        position: relative;

        + .post {
            margin-top: $m-spacing--l;
        }

        &__header {
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: $m-font-size--h3;
            padding: 1rem;

            &__author {
                font-size: $m-font-size--s;
            }
        }

        &__title {
            margin: 0 0 0 $m-spacing--s;

            @media (min-width: $m-mq--min--s) {
                margin: 0 0 0 $m-spacing--m;
            }
        }

        &__profile-image {
            flex-shrink: 0;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            background: $m-color--grey;

            @media (min-width: $m-mq--min--s) {
                width: 44px;
                height: 44px;
            }

            img {
                width: 100%;
            }
        }

        &__body {
            text-align: start;
            padding: $m-spacing--m;
            min-height: $m-spacing--xl;
        }

        &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: $m-color--white;
            padding: $m-spacing--s !important;

            & > div > * {
                margin-left: $m-spacing--s;
            }
        }
    }
</style>
