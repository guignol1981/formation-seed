<template>
    <div>
        <m-icon-button
            iconName="m-svg__arrow--up"
            buttonSize="32px"
            iconSize="20px"
            :skin="ownerHasUpvoted ? 'primary' : 'light'"
            @click="onUpvoteClicked()"
        ></m-icon-button>
        {{ votable.upvotes.length }}
        <m-icon-button
            iconName="m-svg__arrow--down"
            buttonSize="32px"
            iconSize="20px"
            :skin="ownerHasDownvoted ? 'primary' : 'light'"
            @click="onDownvoteClicked()"
        ></m-icon-button>
        {{ votable.downvotes.length }}
    </div>
</template>

<script lang="ts">
    export interface Votable {
        upvotes: string[];
        downvotes: string[];
    }

    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Prop, Emit, Watch } from 'vue-property-decorator';
    const _ = require('lodash');

    @Component
    export default class VueVoter extends Vue {
        @Prop({ required: true })
        public votable!: Votable;

        @Prop({ required: true })
        public ownerId!: string;

        public get ownerHasUpvoted(): boolean {
            return this.votable.upvotes.includes(this.ownerId);
        }

        public get ownerHasDownvoted(): boolean {
            return this.votable.downvotes.includes(this.ownerId);
        }

        public onUpvoteClicked(): void {
            if (this.ownerHasUpvoted) {
                this.votable.upvotes = this.votable.upvotes.filter(
                    u => u !== this.ownerId
                );
                return;
            }

            this.votable.upvotes.push(this.ownerId);
            this.votable.downvotes = this.votable.downvotes.filter(
                d => d !== this.ownerId
            );
        }

        public onDownvoteClicked(): void {
            if (this.ownerHasDownvoted) {
                this.votable.downvotes = this.votable.downvotes.filter(
                    d => d !== this.ownerId
                );
                return;
            }

            this.votable.downvotes.push(this.ownerId);
            this.votable.upvotes = this.votable.upvotes.filter(
                u => u !== this.ownerId
            );
        }
    }
</script>

<style lang="scss" scoped></style>
