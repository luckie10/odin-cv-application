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
  inputName,
  type = "input",
) => (
  <InputField
    state={state[index][stateKey]}
    setState={objectSetStateHandler(state, setStateCb, id, stateKey)}
    inputName={`${inputName}-${stateKey}`}
    type={type}
  />
);

export function generateInputFieldElements(stateElement, generatorParams) {
  return Object.keys(stateElement).reduce((elements, key) => {
    elements[key] = generateInputField(key, ...generatorParams);
    return elements;
  }, {});
}

export function deleteStateObject(state, setStateCb, deleteId) {
  setStateCb(state.filter(({ id }) => deleteId !== id));
}
