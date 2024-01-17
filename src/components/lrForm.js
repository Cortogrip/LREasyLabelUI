

/** Imports */
import {useState} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function LRForm() {


    const serviceEndpoint = "http://localhost:8087/api/v1/label/print";
    const defaultPaper = "01 - Canson Baryta";
   //data = "{ 'labels' : [{'xPos' : 0, 'yPos' : 8, 'lines' : [ 'Titre : La Roma', 'Date : 04 Novembre 2014', 'Fichier : IMG_5969.CR2',  'Tirage : 02 - Canson Baryta','',  '          Au bord des Mauves 2023']}]}";

    const [pageState, setPageState] = useState(0);
    const [xpos, setXpos] = useState(0);
    const [ypos, setYpos] = useState(0);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [file, setFile] = useState("");
    const [paper, setPaper] = useState(defaultPaper);


    const [responseData, setResponseData] = useState({code : "-99", status : "KO", detail : "", message : ""});


    const handleBtnClick = (event) => {

        console.log('---------------------------------------------------------------------');    
        console.log('1.0 You clicked Submit.');    
        console.log("X Positon : ", xpos, " - Y Position : ", ypos);
        console.log("Title : ", title);
        console.log("Date  : ", date);
        console.log("File  : ", file);
        console.log("Paper : ", paper);

        var data = "{ \"labels\" : [{\"xPos\" : " + xpos + 
            ", \"yPos\" : " + ypos + 
            ", \"lines\" : [ \"Titre : " + title + 
            "\", \"Date : " + date + 
            "\", \"Fichier : " + file + 
            " \",  \"Tirage : " + paper + 
            "\", \"\",  \"          Au bord des Mauves 2023\"]}]}";

        var response = callService(data);
    };

    const handleAlertBtnClick = (event) => {
        setPageState(0);
    }

    const displayAlert  = async (messageState) => {
        setPageState(messageState);
        setTimeout(() => { setPageState(0);}, 25000)
      };


    function callService(data){

        console.log('You are calling service : ' + serviceEndpoint);   
        console.log('With data : ' + data); 

        fetch(serviceEndpoint, {
            method: 'POST',
            headers: {
              Accept: 'application/json', 
              'Content-Type': 'application/json',
            },
            //body: JSON.stringify(data),
            body: data,
          })
            .then((response) => {
                if (response.status === 200 || response.status === 201) {
                    console.log("Response OK");

                    response.json().then(json => {
                        console.log(json);
                        console.log("Code : ", json.code);
                        setResponseData(json);
                    });

                    setXpos(0);
                    setYpos(0);

                    setTitle("");
                    setDate("");
                    setFile("");
                    setPaper(defaultPaper);
                    displayAlert(1);

                }else {
                    throw new Error(response.statusText);
                }
            })
            .catch((err) => {
                console.log("Service ERROR");
                displayAlert(-1);
            });

            return null;
        };

        if(pageState===1){ 
            return (
                // <Box className="formBox" display="flex" justifyContent="center">     
                //     <Alert severity="success">File {responseMessage} created</Alert>
                // </Box>
                <Dialog  open="true" id="alert-dialog">
                    <DialogTitle id="alert-dialog-title" className="gray-dialog" color={'darkgreen'}>                   
                        <Typography variant="overline" display="block" gutterBottom>Service response :</Typography>
                    </DialogTitle>
                    <DialogContent >
                        <DialogContentText id="alert-dialog-description">
                            <b><Typography variant="subtitle2" color={'black'} gutterBottom>Label page {responseData.message} created.</Typography></b>
                            <Typography variant="caption" color={'black'} display="block" gutterBottom>Location : {responseData.detail}</Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleAlertBtnClick} >
                            <Typography variant="subtitle2" color={'darkgreen'} gutterBottom><b>OK</b></Typography>
                        </Button>
                        {/* <Button onClick={handleAlertBtnClick} autoFocus> Agree</Button> */}
                    </DialogActions>
                </Dialog>


            );
        } else if (pageState===-1){

            return (
                <Dialog  open="true" id="alert-dialog">
                        <DialogTitle id="alert-dialog-title" className="gray-dialog" color={'darkred'}>                   
                            <Typography variant="overline" display="block" gutterBottom>Service response :</Typography>
                        </DialogTitle>
                        <DialogContent >
                            <DialogContentText id="alert-dialog-description">
                                <b><Typography variant="subtitle2" color={'black'} gutterBottom>Cannot create label page.</Typography></b>
                                <Typography variant="caption" color={'black'} display="block" gutterBottom>See service logs for details.</Typography>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleAlertBtnClick} >
                                <Typography variant="subtitle2" color={'darkred'} gutterBottom><b>OK</b></Typography>
                            </Button>
                        </DialogActions>
                    </Dialog>
            );
            
        } else {

            return (
                <Box className="formBox" display="flex" justifyContent="center" >     
                    <Box >
                        <Box width={500} className="inputBox" marginTop={"50px"} display="flex" justifyContent={"left"}>
                            <Typography variant="overline" color={"white"}>Coordonnées de l'étiquette</Typography>
                        </Box>

                        <Box width={500} className="inputBox">
                            <Box component="span" width={50} >
                                <TextField className="inputField" variant="filled" id="xpos" name="xpos" label="X Position"  defaultValue={xpos} onChange={event => {setXpos(event.target.value);}} />
                            </Box>
                            <Box component="span" width={50} marginLeft={6.5}>
                                <TextField className="inputField endOfLine" variant="filled" id="ypos" name="ypos" label="Y Position" defaultValue={ypos} onChange={event => {setYpos(event.target.value);}} />
                            </Box>
                        </Box>

                        <Box width={500} className="inputBox" marginTop={"50px"} display="flex" justifyContent={"left"}>
                            <Typography variant="overline" color={"white"}>Champs de l'étiquette</Typography>
                        </Box>

                        <Box width={500} className="inputBox ">
                            <TextField className="inputField" variant="filled" id="line0" label="Titre " value={title} onChange={event => {setTitle(event.target.value);}} fullWidth />
                        </Box>

                        <Box width={500} className="inputBox">
                            <TextField className="inputField" id="line1" variant="filled" label="Date " defaultValue={date} onChange={event => {setDate(event.target.value);}} fullWidth />
                        </Box>

                        <Box width={500} className="inputBox">
                            <TextField className="inputField" id="line2" variant="filled" label="Fichier " defaultValue={file} onChange={event => {setFile(event.target.value);}} fullWidth/>
                        </Box>

                        <Box width={500} className="inputBox">
                            <TextField className="inputField" id="line3" variant="filled" label="Tirage " defaultValue={paper} onChange={event => {setPaper(event.target.value);}} fullWidth />
                        </Box>
                
                        <Box width={500} paddingLeft={"20px"} marginTop={"50px"} display="flex" justifyContent="flex-end" >
                            <Button variant="outlined" className="inputField" onClick={handleBtnClick} >Imprimer</Button>
                        </Box> 
                    </Box>

                </Box>
            );
        }

}
