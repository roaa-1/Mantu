import * as React from "react";
import PropTypes from "prop-types";
import { Box, Button, FormControl, OutlinedInput } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function NumberSpinner({ id, min = 1, max = 10, step = 1 }) {
  const [value, setValue] = React.useState(min);

  const handleIncrement = () => {
    setValue((prev) => (prev + step <= max ? prev + step : prev));
  };

  const handleDecrement = () => {
    setValue((prev) => (prev - step >= min ? prev - step : prev));
  };

  return (
    <FormControl size="small" sx={{ width: "fit-content" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="outlined"
          size="small"
          onClick={handleDecrement}
          sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        >
          <RemoveIcon fontSize="small" />
        </Button>

        <OutlinedInput
          id={id}
          value={value}
          size="small"
          sx={{
            width: 40,
            borderRadius: 0,
            textAlign: "center",
            "& input": { textAlign: "center", padding: "4px 0" },
          }}
          readOnly
        />

        <Button
          variant="outlined"
          size="small"
          onClick={handleIncrement}
          sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
        >
          <AddIcon fontSize="small" />
        </Button>
      </Box>
    </FormControl>
  );
}

NumberSpinner.propTypes = {
  id: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

export default NumberSpinner;

