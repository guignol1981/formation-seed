import initStoryshots, {
    multiSnapshotWithOptions,
    Stories2SnapsConverter
} from '@storybook/addon-storyshots';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

registerRequireContextHook();

initStoryshots({
    test: multiSnapshotWithOptions({}),
    stories2snapsConverter: new Stories2SnapsConverter({
        snapshotExtension: '.ts.snap'
    }),
    configPath: '.storybook/config.jest.ts'
} as any);
