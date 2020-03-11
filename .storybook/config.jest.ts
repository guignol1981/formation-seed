import { configure } from '@storybook/vue';
import '../src/setupTests.js';
import './config';

configure(require.context('../stories', true, /\.stories\.ts$/), module);
