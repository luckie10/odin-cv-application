export function objectSetStateHandler(state, setFunction, id, objectKey) {
  return function (newValue) {
    setFunction(
      state.map((item) => {
        if (item.id === id) return { ...item, [objectKey]: newValue };
        return item;
      }),
    );
  };
}
