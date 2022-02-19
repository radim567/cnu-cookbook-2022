const handleOnChange = (event) => {
  const { name, value } = event.target;
  setInputValues({ ...inputValues, [name]: value });
};

onChange = { handleOnChange };
