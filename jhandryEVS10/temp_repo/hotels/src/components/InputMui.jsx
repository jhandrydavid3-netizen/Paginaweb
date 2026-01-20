import TextField from '@mui/material/TextField';

function InputMui({
  type,
  placeholder,
  value,
  onChange = () => {},
  required = false,
  helperText = "",
  error = false,
  label = ""
}) {
  return (
    <TextField
      size="small"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant="outlined"
      required={required}
      helperText={helperText}
      error={error}
      label={label}
    />
  );
}

export default InputMui;