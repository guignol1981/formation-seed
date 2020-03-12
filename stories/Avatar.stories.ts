import { Component } from 'vue';
import StoryWrapper from '../src/components/StoryWrapper';
import Avatar from '../src/components/Avatar';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Avatar',
    component: Avatar,
    decorators: [withKnobs]
};

export const Default: () => Component = (): Component => ({
    components: { Avatar, StoryWrapper },
    template: `
        <StoryWrapper>
            <Avatar></Avatar>
        </StoryWrapper>
    `
});

export const Custom: () => Component = (): Component => ({
    components: { Avatar, StoryWrapper },
    props: {
        src: {
            default: text('src', '')
        }
    },
    template: `
        <StoryWrapper>
            <Avatar :src="src"></Avatar>
        </StoryWrapper>
    `
});
