// eslint-disable-next-line import/no-extraneous-dependencies
import { config } from '@vue/test-utils';

config.mocks.$t = (...args) => (args);
