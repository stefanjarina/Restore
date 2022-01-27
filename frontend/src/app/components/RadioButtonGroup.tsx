import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

interface Props {
  options: any[];
  selectedValue: string;
  onChange: (event: any) => void;
}

export const RadioButtonGroup = ({
  options,
  selectedValue,
  onChange,
}: Props) => {
  return (
    <FormControl>
      <RadioGroup onChange={onChange} value={selectedValue}>
        {options.map(({ value, label }) => (
          <FormControlLabel
            key={value}
            value={value}
            control={<Radio />}
            label={label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
