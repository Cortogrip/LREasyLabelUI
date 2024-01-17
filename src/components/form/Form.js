import useForm from "./UseForm";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Padding } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const FORM_ENDPOINT = "https://myTest/start"; // TODO - update to the correct endpoint

export default function Form () {

  const additionalData = {
    sent: new Date().toISOString(),
  };

  const { handleSubmit, status, message } = useForm({
    additionalData,
  });

  if (status === "success") {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">{message}</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div className="text-2xl">Something bad happened!</div>
        <div className="text-md">{message}</div>
      </>
    );
  }

  return (

    
    <Box className="formBox" >

      <Box  display="flex" justifyContent="center">
        <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" >

            <Box width={500} className="inputBox" marginTop={"50px"} display="flex" justifyContent={"left"}>
              <Typography variant="h6" color={"black"}>Coordonnées de l'étiquette</Typography>
            </Box>

            <Box width={500} className="inputBox">
              <Box component="span" width={50}>
                <TextField className="inputField" id="xpos" name="xpos" label="X Position" defaultValue="0"/>
              </Box>
              <Box component="span" width={50} marginLeft={6.5}>
                <TextField className="inputField" id="ypos" name="ypos" label="Y Position" defaultValue="0" className="endOfLine"/>
              </Box>
            </Box>

            <Box width={500} className="inputBox" marginTop={"50px"} display="flex" justifyContent={"left"}>
              <Typography variant="h6" color={"black"}>Champs de l'étiquette</Typography>
            </Box>

            <Box width={500} className="inputBox ">
              <TextField className="inputField"
                id="line0"
                label="Titre "
                defaultValue=" "
                fullWidth
              />
            </Box>

            <Box width={500} className="inputBox">
              <TextField className="inputField"
                id="line1"
                label="Date "
                defaultValue=" "
                fullWidth
              />
            </Box>

            <Box width={500} className="inputBox">
              <TextField className="inputField"
                id="line2"
                label="Fichier "
                defaultValue=" "
                fullWidth
              />
            </Box>

            <Box width={500} className="inputBox">
              <TextField className="inputField"
                id="line3"
                label="Tirage "
                defaultValue="01 - Canson Baryta"
                fullWidth
              />
            </Box>
          
            <Box width={500} paddingLeft={"20px"} marginTop={"50px"} display="flex" justifyContent="flex-end" >
              <Button variant="outlined" type="submit" className="inputField">Imprimer</Button>
            </Box> 
        </form>
      </Box>
    </Box>
  );
}