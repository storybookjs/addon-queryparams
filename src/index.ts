import { document, history } from 'global';
import qs from 'qs';

import { makeDecorator, StoryContext, StoryGetter, useRef, useEffect } from '@storybook/addons';

import { PARAM_KEY } from './constants';

/** Update our `location.search` values with given query params. */
const updateLocationSearch = (query: Record<string, any>) => {
  const newLocation = new URL(document.location.href);
  newLocation.search = qs.stringify(query);

  history.replaceState({}, document.title, newLocation.toString());
};

export const withQuery = makeDecorator({
  name: 'withQuery',
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory: StoryGetter, context: StoryContext, { parameters }) => {
    /**
     * We use this during unmount to revert to the original `location.search` when your Story mounted.
     * The `useRef` initialValue will never change in subsequent renders.  This is locked in.
     */
    const initialSearch = useRef<string>(document.location.search);

    /**
     * On ever render, we merge the current `location.search` with the Story's `parameters.query`.
     * This has to happen in render, not inside of a `useEffect` as our `location.search` needs to be set synchronously.
     */
    const currentQuery = qs.parse(document.location.search, { ignoreQueryPrefix: true });
    const additionalQuery =
      typeof parameters === 'string'
        ? qs.parse(parameters, { ignoreQueryPrefix: true })
        : parameters;

    updateLocationSearch({ ...currentQuery, ...additionalQuery });

    /**
     * This useEffect is purely for the cleanup callback.
     * As we're unmounting the component, revert to the very first render's `location.search`.
     */
    useEffect(
      () => {
        return () => {
          const searchAsQuery = qs.parse(initialSearch.current, { ignoreQueryPrefix: true });
          updateLocationSearch(searchAsQuery);
        }
      },
      []
    );

    return getStory(context);
  },
});

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
