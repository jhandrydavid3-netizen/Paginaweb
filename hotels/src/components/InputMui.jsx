import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function InputMui({
  type,
  placeholder,
  value,
  onChange = () => { },
  required = false,
  helperText = "",
  error = false,
  label = "",
  fullWidth = false,
  startIcon = null,
  endIcon = null
}) {
  return (
    <TextField
      fullWidth={fullWidth}
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
      InputProps={{
        startAdornment: startIcon ? (
          <InputAdornment position="start">
            {startIcon}
          </InputAdornment>
        ) : null,
        endAdornment: endIcon ? (
          <InputAdornment position="end">
            {endIcon}
          </InputAdornment>
        ) : null,
      }}
    />
  );
}

export default InputMui;