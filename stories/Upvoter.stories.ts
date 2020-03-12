import { Component } from 'vue';
import Upvoter from '../src/components/Upvoter';
import StoryWrapper from '../src/components/StoryWrapper';
import StoryRouter from 'storybook-vue-router';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'Upvoter',
    component: Upvoter,
    decorators: [StoryRouter(), withKnobs]
};

export const Default: () => Component = (): Component => ({
    components: { Upvoter, StoryWrapper },
    data: () => ({
        votable: {
            upvotes: ['3', '2', '3'],
            downvotes: ['1']
        },
        ownerId: '1'
    }),
    template: `
        <StoryWrapper>
                <Upvoter 
                    :ownerId="ownerId"
                    :votable="votable"
                    :ownerId="ownerId"
                >
                </Upvoter>
        </StoryWrapper>
    `,
    methods: {
        onEditClicked: action('editClicked')
    }
});
