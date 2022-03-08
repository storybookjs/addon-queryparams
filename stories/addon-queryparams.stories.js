import React from "react";

export default {
  title: "Addons/Queryparams",
};

export const SingleParam = () => {
  const urlParams = new URLSearchParams(document.location.search);
  const entries = Object.fromEntries(urlParams);

  const { id, viewMode } = entries;
  delete entries.id;
  delete entries.viewMode;

  return (
    <div>
      <p>
        <u>Single param:</u>
        <br />{JSON.stringify(entries)}
      </p>

      <u>Storybook params:</u>
      <br />id = {id}
      <br />viewMode = {viewMode}
    </div>
  );
};
SingleParam.parameters = {
  query: {
    name: "MockedParam",
  },
};

export const MultipleParams = () => {
  const urlParams = new URLSearchParams(document.location.search);
  const entries = Object.fromEntries(urlParams);

  const { id, viewMode } = entries;
  delete entries.id;
  delete entries.viewMode;

  return (
    <div>
      <p>
        <u>Complex params:</u>
        <br />{JSON.stringify(entries)}
      </p>

      <u>Storybook params:</u>
      <br />id = {id}
      <br />viewMode = {viewMode}
    </div>
  );
};
MultipleParams.parameters = {
  query: {
    name: "MockedParamsComplex",
    'array[]': [1, 2],
  },
};

export const NoParams = () => {
  const urlParams = new URLSearchParams(document.location.search);
  const entries = Object.fromEntries(urlParams);

  const { id, viewMode } = entries;
  delete entries.id;
  delete entries.viewMode;

  return (
    <div>
      <p>
        <u>No params:</u>
        <br />{JSON.stringify(entries)}
      </p>

      <u>Storybook params:</u>
      <br />id = {id}
      <br />viewMode = {viewMode}
    </div>
  );
}
