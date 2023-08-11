import { CSSProperties, ComponentProps } from 'react';

const generalStyle: CSSProperties = {
  fontSize: '1rem',
  color: 'var(--color-2)',
  padding: 'var(--gap-s) .75rem',
  backgroundColor: 'var(--color-4)',
  borderRadius: 'var(--gap)',
};

const labelStyle: CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-s)',
  fontWeight: '600',
  ...generalStyle,
};

const inputStyle: CSSProperties = {
  border: 'none',
  fontFamily: 'monospace',
  ...generalStyle,
};

type IDateInput = ComponentProps<'input'> & {
  label: string;
  id: string;
};

const DateInput = ({ label, id, ...props }: IDateInput) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={id}>
        {label}
      </label>
      <input style={inputStyle} id={id} name={id} type="date" {...props} />
    </div>
  );
};

export default DateInput;
