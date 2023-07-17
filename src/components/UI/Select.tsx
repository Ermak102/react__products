import React, { FC } from 'react';

interface Props {
  defaultName: string;
  options: string[];
  selected: string;
  onChange: (select: string) => void;
}

export const Select: FC<Props> = ({
  defaultName,
  options,
  selected,
  onChange,
}) => {
  return (
    <select
      className="select"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value="">
        {defaultName}
      </option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
