import React from 'react';
import { cn } from '../utils/cn';

const InputField = ({ 
  label, 
  error, 
  id, 
  className, 
  containerClassName,
  ...props 
}) => {
  return (
    <div className={cn("space-y-1 w-full", containerClassName)}>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 ml-1"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "input-field",
          error && "border-red-500 focus:ring-red-500/50",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-500 ml-1 mt-1">{error}</p>
      )}
    </div>
  );
};

export default InputField;
