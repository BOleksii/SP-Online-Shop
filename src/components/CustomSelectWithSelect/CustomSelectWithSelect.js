import React, { useState } from 'react';

function CustomSelectWithSelect({ options }) {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <div>
      <label>Каталог</label>
      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value="">Оберіть категорію</option>
        {options.map((optionGroup) => (
          <optgroup key={optionGroup.label} label={optionGroup.label}>
            {optionGroup.options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}

export default CustomSelectWithSelect;
