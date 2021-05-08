function config(entry = [], { addDecorator = true } = {}) {
  const queryParamsConfig = [];
  if (addDecorator) {
    queryParamsConfig.push(require.resolve("./dist/preset/addDecorator"));
  }
  return [...entry, ...queryParamsConfig];
}

module.exports = { config };
