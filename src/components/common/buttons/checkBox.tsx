'use client';

import { useState } from 'react';

export default function CheckBox() {
  const [isChecked, setChecked] = useState<boolean>(false);
  return (
    <label>
      <input type="checkbox" onChange={() => setChecked(!isChecked)} />
    </label>
  );
}
