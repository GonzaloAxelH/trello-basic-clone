import { ChangeEvent, FC, useState } from "react";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

const NewEntry: FC = () => {
  const [isAdding, setisAdding] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const [touched, settouched] = useState(false);

  const onTextFieldChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    console.log(inputValue);
  };
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      <Button
        variant="outlined"
        fullWidth
        startIcon={<AddCircleOutlineOutlinedIcon />}
        onClick={() => setisAdding(true)}
      >
        Agregar Tarea
      </Button>
      <Box
        sx={{
          maxHeight: isAdding ? "160px" : 0,
          overflow: "hidden",
          transition: "0.3s all",
        }}
      >
        <TextField
          onBlur={() => settouched(true)}
          value={inputValue}
          error={inputValue.length <= 0 && touched}
          onChange={onTextFieldChanges}
          fullWidth
          sx={{ marginTop: 2, marginBottom: 1 }}
          placeholder="Nueva nota"
          autoFocus
          multiline
          label="Nueva entrada"
          helperText={inputValue.length <= 0 && touched && "Ingrese un valor"}
        />
        <Box
          sx={{ margin: "10px 0px" }}
          display="flex"
          justifyContent="space-between"
        >
          <Button
            variant="outlined"
            onClick={() => {
              setisAdding(false);
              settouched(false);
            }}
          >
            Cancelar
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            endIcon={<SaveAltOutlinedIcon />}
            onClick={onSave}
          >
            Guardar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewEntry;
