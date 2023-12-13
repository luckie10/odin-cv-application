import InputField from "./InputField";

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

export const generateInputField = (
  stateKey,
  index,
  id,
  state,
  setStateCb,
  type = "input",
) => (
  <InputField
    state={state[index][stateKey]}
    setState={objectSetStateHandler(state, setStateCb, id, stateKey)}
    type={type}
  />
);