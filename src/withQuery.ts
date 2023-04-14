import { makeDecorator } from '@storybook/preview-api';
import { PARAM_KEY } from './constants';
import qs from 'qs';

export const withQueryDecorator = makeDecorator({
  name: 'withQuery',
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters }) => {
    const { location } = document;
    const currentQuery = qs.parse(location.search, { ignoreQueryPrefix: true });
    if (parameters) {
      const additionalQuery =
        typeof parameters === 'string'
          ? qs.parse(parameters, { ignoreQueryPrefix: true })
          : parameters;

      const newLocation = new URL(document.location.href);
      newLocation.search = qs.stringify({ ...currentQuery, ...additionalQuery });

      history.replaceState({}, document.title, newLocation.toString());
    }
    return getStory(context);
  }
});
