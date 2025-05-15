function getPropsData(config: Record<string, any>[]) {
  const props = {};

  function getPropertyValue(ComConfig) {
    ComConfig.forEach(item => {
      if (item.type === 'group') {
        getPropertyValue(item.group);
      } else {
        props[item.key] = item.value;
      }
    });
  }

  getPropertyValue(config);
  return props;
}

export { getPropsData };
