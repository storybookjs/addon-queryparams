import React from "react";

export default {
  title: "Addons/Queryparams",
  parameters: {
    query: {
      mock: "Hello world!",
    },
  },
};

export const WithMockedSearch = () => {
  const urlParams = new URLSearchParams(document.location.search);
  const mockedParam = urlParams.get("mock");
  return <div>Mocked value: {mockedParam}</div>;
};
