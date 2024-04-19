import type { DecoratorFunction } from "@storybook/types";
import { useParameter } from "@storybook/preview-api";

import { PARAM_KEY } from "./constants";

export const withQuery: DecoratorFunction = (StoryFn, StoryContext) => {
  let parameters = useParameter(PARAM_KEY, null);
  const { location } = document;
  const currentQuery = new URLSearchParams(location.search);

  if (parameters) {
    if (typeof parameters === "string") {
      parameters = new URLSearchParams(parameters);
    }
    else if (typeof parameters === "function") {
      parameters = parameters(StoryContext);
    }

    const additionalQuery = parameters;

    const newLocation = new URL(document.location.href);
    newLocation.search = new URLSearchParams({
      ...currentQuery,
      ...additionalQuery,
    }).toString();

    history.replaceState({}, document.title, newLocation.toString());
  }

  return StoryFn();
};

export const decorators = [withQuery];
