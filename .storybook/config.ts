import Vue from 'vue';
import { ModulComponentPlugin, FrenchPlugin } from '@ulaval/modul-components';
import '@ulaval/modul-components/dist/modul.min.css';
import { addDecorator } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

// addDecorator(withKnobs);

Vue.use(ModulComponentPlugin);
Vue.use(FrenchPlugin);
