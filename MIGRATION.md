<h1>Migration</h1>

- [From version 8.x to 9.0.0](#from-version-8x-to-900)
  - [Support storybook 9.x](#support-storybook-9x)
- [From version 7.x to 8.0.0](#from-version-7x-to-800)
  - [`withQuery` decorator removed](#withquery-decorator-removed)

## From version 8.x to 9.0.0

### Support storybook 9.x

Storybook v9 is now supported.
However, due to changes in the internal package, it is not available for versions earlier than v9.

## From version 7.x to 8.0.0

### `withQuery` decorator removed

The `withQuery` decorator is not necessary anymore and therefore its export was removed from the package. It's an internally defined decorator which is automatically applied to every story you have. Please remove from your stories/preview files:

```diff
import React from "react";
import { Button } from "../Button";
-import { withQuery } from "@storybook/addon-queryparams";

export default {
  title: "Button",
  component: Button,
-  decorators: [withQuery],
  parameters: {
    query: {
      greeting: "Hello world!",
    },
  },
};
