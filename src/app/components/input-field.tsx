'use client';

import React from 'react';
import { Field } from 'formik';

export interface InputFieldProps {
  label?: string;
  name: string;
  as?: 'input' | 'select' | 'textarea'; // добавляем поддержку
  children?: React.ReactNode; // нужно для <select> с <option>
  [key: string]: any; // чтобы пропустить остальные пропсы
}

export default function InputField({
  label,
  id,
  as = 'input',
  children,
  ...rest
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base text-gray-900">
          {label}
        </label>
      )}
      <Field
        as={as}
        id={id}
        {...rest}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      >
        {children}
      </Field>
    </div>
  );
}
