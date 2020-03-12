<template>
    <m-panel
        class="post"
        :highlighted="true"
        :padding="false"
        :shadow="true"
        skin="light"
    >
        <div v-if="title" slot="header" class="post__header">
            <h2 class="post__title">{{ title }}</h2>
        </div>
        <div class="post__body" v-html="body"></div>
        <div slot="footer" class="post__footer">
            <div>
                <slot name="actions-left">
                    actions
                </slot>
            </div>
            <div>
                <slot name="actions-right">
                    actions
                </slot>
            </div>
        </div>
    </m-panel>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Prop, Emit } from 'vue-property-decorator';

    @Component
    export default class Card extends Vue {
        @Prop({ required: true })
        public body!: string;

        @Prop()
        public title?: string;
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
        }

        &__title {
            margin: 0 0 0 $m-spacing--s;

            @media (min-width: $m-mq--min--s) {
                margin: 0 0 0 $m-spacing--m;
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
