# storybook-addon-queryparams

This storybook addon can be helpful if your components need special query parameters to work the way you want them to. It allows you to mock query params per story so that you can easily reproduce different states of your component.

## Getting started

First, install the addon.

```sh
$ yarn add @storybook/addon-queryparams --dev
```

Register it by adding it in the addons attribute in your `main.js` file (create this file inside your storybook config directory if needed).

```js
module.exports = {
  addons: ['@storybook/addon-queryparams'],
};
```

In your story, add the `withQuery` decorator and define the query parameters you want to mock:

```js
import React from 'react';
import { Button } from '@storybook/react/demo';
import { withQuery } from '@storybook/addon-queryparams';

export default {
  title: 'Button',
  component: Button,
  decorators: [withQuery],
  parameters: {
    query: {
      mock: 'Hello world!',
    },
  },
};

export const WithMockedSearch = () => {
  const urlParams = new URLSearchParams(document.location.search);
  const mockedParam = urlParams.get('mock');
  return <div>Mocked value: {mockedParam}</div>;
};
```

<details>
  <summary>Example with storiesOf API</summary>

```js
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('button', module)
  .addParameters({
    query: {
      mock: 'Hello World!',
    },
  })
  .add('Prints the mocked parameter', () => {
    const urlParams = new URLSearchParams(document.location.search);
    const mockedParam = urlParams.get('mock');
    return <div>Mocked value: {mockedParam}</div>;
  });
```

</details>
