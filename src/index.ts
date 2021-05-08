import { document, history } from 'global';
import qs from 'qs';

import { makeDecorator, StoryContext, StoryGetter } from '@storybook/addons';

import { PARAM_KEY } from './constants';

export const withQuery = makeDecorator({
  name: 'withQuery',
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory: StoryGetter, context: StoryContext, { parameters }) => {
    const { location } = document;
    const currentQuery = qs.parse(location.search, { ignoreQueryPrefix: true });
    const additionalQuery =
      typeof parameters === 'string'
        ? qs.parse(parameters, { ignoreQueryPrefix: true })
        : parameters;

    const newLocation = new URL(document.location.href);
    newLocation.search = qs.stringify({ ...currentQuery, ...additionalQuery });

    history.replaceState({}, document.title, newLocation.toString());

    return getStory(context);
  },
});

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
