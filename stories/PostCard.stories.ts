import { Component } from 'vue';
import PostCard from '../src/components/PostCard';
import StoryWrapper from '../src/components/StoryWrapper';
import StoryRouter from 'storybook-vue-router';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';

export default {
    title: 'PostCard',
    component: PostCard,
    decorators: [StoryRouter()]
};

export const Default: () => Component = (): Component => ({
    components: { PostCard, StoryWrapper },
    data: (): {} => {
        return {
            post: {
                id: '1',
                title: 'An intersting post title',
                body: 'An even more interesting body'
            }
        };
    },
    template: `
    <StoryWrapper>
            <PostCard 
                :post="post" 
                @editClicked="onEditClicked($event)"
            >
            </PostCard>
    </StoryWrapper>
    `,
    methods: {
        onEditClicked: action('editClicked')
    }
});
