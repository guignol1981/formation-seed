import { Component } from 'vue';
import Card from '../src/components/Card';
import StoryWrapper from '../src/components/StoryWrapper';
import Upvoter from '../src/components/Upvoter';
import StoryRouter from 'storybook-vue-router';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'Card',
    component: Card,
    decorators: [StoryRouter(), withKnobs]
};

export const Default: () => Component = (): Component => ({
    components: { Card, StoryWrapper },
    props: {
        title: {
            default: text('title', 'title')
        },
        body: {
            default: text('body', 'body')
        }
    },
    template: `
        <StoryWrapper>
                <Card 
                    :title="title"
                    :body="body"
                >
                </Card>
        </StoryWrapper>
    `
});

export const WithUpvoter: () => Component = (): Component => ({
    components: { Card, StoryWrapper, Upvoter },
    data: () => ({
        votable: {
            upvotes: ['3', '2', '3'],
            downvotes: ['1']
        },
        ownerId: '1'
    }),
    template: `
        <StoryWrapper>
                <Card 
                    :title="'title'"
                    :body="'body'"
                    >
                    <Upvoter 
                        slot="actions-left"
                        :votable="votable"
                        :ownerId="ownerId"
                    >
                    </Upvoter>
                </Card>
        </StoryWrapper>
    `
});
