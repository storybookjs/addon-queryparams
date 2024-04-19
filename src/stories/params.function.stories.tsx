import type { Meta, StoryContext, StoryObj } from '@storybook/react';
import React from 'react';

const mapParams = (params: URLSearchParams) => {
  const output: React.JSX.Element[] = [];
  [...params.keys()].forEach((key: string) => {
    output.push(<div key={key}><strong>{key}</strong>: {params.get(key)}</div>);
  });
  return output;
}

const meta: Meta<{}> = {
  title: 'Example/Params-Function',
  component: () => {
    const urlParams = new URLSearchParams(document.location.search);
    return <div>Mocked params: {mapParams(urlParams)}</div>;
  },
  parameters: {
    query: (context: StoryContext) => {
      return {
        id: context.id,
        mock: "Hello world from callback!",
      };
    }
  },
};

export default meta;
type Story = StoryObj<{}>;

export const Playground: Story = {};