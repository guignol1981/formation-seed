import { Component } from 'vue';
import StoryWrapper from '../src/components/StoryWrapper';
import Logo from '../src/components/Logo';

export default {
    title: 'Logo',
    component: Logo
};

export const Default: () => Component = (): Component => ({
    components: { StoryWrapper, Logo },
    template: `
        <StoryWrapper>
            <Logo></Logo>
        </StoryWrapper>
    `
});
