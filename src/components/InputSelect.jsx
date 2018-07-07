import React from 'react';

const InputSelect = (props) => {
  const { type } = props;

  return (
    <select>
      <option value="A">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
    </select>
  );
};

export default InputSelect;
