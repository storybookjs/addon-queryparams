import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta: Meta<{}> = {
  title: 'Example/Params',
  component: () => {
    const urlParams = new URLSearchParams(document.location.search);
    const mockedParam = urlParams.get("mock");
    return <div>Mocked value: {mockedParam}</div>;
  },
  parameters: {
    query: {
      mock: "Hello world!",
    },
  },
};

export default meta;
type Story = StoryObj<{}>;

export const Playground: Story = {};
