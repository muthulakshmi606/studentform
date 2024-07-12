
import './App.css';
// import Login from './Form/login';
import { Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'


function App() {
    const [formdata,setFormdata] = useState({})  
        const onchangeFunction=(event,profor)=>{
            if(event.target.id === "dateOfBirth"){
                // event.target.value = moment(event.target.value).format('YYYY-MM-DD'); 
            }else
            if(profor === "state"){
               setFormdata((prevstate)=>({
                ...prevstate,
                  [profor] : event.target.value
               }))
            }else
            if(profor=== "city"){
                console.log("hii")
                console.log(profor);
                setFormdata((prevstate)=>({
                    ...prevstate,
                      [profor] : event.target.value
                }))
            }else{
                setFormdata((prevstate)=>({
                    ...prevstate,
                    [event.target.id] : event.target.value
                }))
            }
        }

        const submitFunction=()=>{
            console.log(formdata);
        }

        const cencalFunction=()=>{
           setFormdata({})
        }
    return (
            <div className='App'>
                 <Grid container spacing={4} >
                <Grid item xs={12} md = {12}>
                    <h1>Registation Form</h1>
                </Grid>
                <Grid item xs={4} md ={4} >
                    <TextField  id = "firstName" label = "FirstName" variant='outlined' onChange={onchangeFunction} value={formdata.firstName || ''}>
                    </TextField>
                </Grid>
                <Grid item xs={4} md ={4}>
                    <TextField id = "lastName" label = "LastName" variant='outlined' onChange={onchangeFunction} value={formdata.lastName || ''}>
                    </TextField>
                </Grid>
                <Grid item xs={4} md={4}> 
                   <InputLabel>Gender</InputLabel>
                    <RadioGroup style={{display:"block"}} onChange={onchangeFunction}>
                        <FormControlLabel control={<Radio id='Gender' />} label="Female" value="female"/>
                        <FormControlLabel control={<Radio id="Gender" />} label="Male" value="male"/>
                        <FormControlLabel control={<Radio id = "Gender" />} label="Others" value="others"/>
                    </RadioGroup>
                </Grid>
                <Grid item xs={4} md = {4}  style={{width:"220px"}}>
                    <InputLabel>DateOfBirth</InputLabel>
                    <LocalizationProvider dateAdapter={AdapterMoment} >
                        <DatePicker
                            variant="standard"
                            id="dateOfBirth"
                            onChange={(date) => onchangeFunction({ target: { id: 'dateOfBirth', value: date } })}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={4} md={4}>
                    <TextField id = "fathername" label = "FatherName" variant='outlined' onChange={onchangeFunction} value={formdata.fathername || ''}>
                    </TextField>
                </Grid>
                <Grid item xs={4} md={4}>
                    <TextField id = "mothername" label = "MotherName" variant='outlined' onChange={onchangeFunction} value={formdata.mothername || ''}>
                    </TextField>
                </Grid>
                <Grid item xs={4} md={4}>
                    <TextField id = "email" label = "Email" variant='outlined' type='email' onChange={onchangeFunction} value={formdata.email || ''}>
                    </TextField>
                </Grid>
                <Grid item xs={4} md={4}>
                    <TextField id = "mobileNumber" label = "MobileNumber" variant='outlined' onChange={onchangeFunction} value={formdata.mobileNumber || ''}>
                    </TextField>
                </Grid>
                <Grid item xs={4} md={4}>
                    <FormControl style={{width:"220px"}} variant='outlined'>
                        <InputLabel id="stateLabel">State</InputLabel>
                        <Select
                            labelId  = "statelabel"
                            id       = "state"
                            value    = {formdata.state || ''}
                            onChange = {(event,profor)=>onchangeFunction(event,"state")}    
                        >
                            <MenuItem value={"tamilNadu"} id='state'>Tamil Nadu</MenuItem>
                            <MenuItem value={"telangana"}>Telangana</MenuItem>
                            <MenuItem value={"tripura"}>Tripura</MenuItem>
                            <MenuItem value={"uttarPradesh"}>Uttar Pradesh</MenuItem>
                            <MenuItem value={"gujarat"}>Gujarat</MenuItem>
                            <MenuItem value={"goa"}>Goa</MenuItem>
                            <MenuItem value={"bjhar"}>Bihar</MenuItem>
                            <MenuItem value={"Assam"}>Assam</MenuItem>    
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4} md={4}>
                    <FormControl style={{width:"220px"}} variant='outlined'>
                        <InputLabel id = "cityLabel">City</InputLabel>
                        <Select
                            labelId  = "cityLabel"
                            id       = "city"
                            onChange = {(event,profor)=>onchangeFunction(event,"city")}
                            value    = {formdata.city || ''}
                            label    = "city"
                            
                        >
                            <MenuItem value="Chennai">Chennai</MenuItem>
                            <MenuItem value="Coimbatore">Coimbatore</MenuItem>
                            <MenuItem value="Madurai">Madurai</MenuItem>
                            <MenuItem value="Tiruchirappalli">Tiruchirappalli</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4} md={4}>
                    <TextField id = "PinCode" label = "PinCode" variant='outlined' onChange={onchangeFunction}  value={formdata.PinCode || ''} >
                    </TextField>
                </Grid>
                <Grid item xs={4} md ={4}>
                    <InputLabel >Upload File</InputLabel>
                    <FormControl>   
                        <input type='file' onChange={onchangeFunction} id='file' value={formdata.file || ''}> 
                        </input>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={12} style={{justifyContent:"flex-end",display:"flex",marginRight:"50px"}}>
                    <Button type='submit' variant='outlined' style={{marginRight:"10px"}} onClick={submitFunction}>submit</Button>
                    <Button type='cencel' variant='outlined' onClick={cencalFunction}>cencel</Button>
                </Grid>
            </Grid>  

            </div>
            
       
    );
}

export default App;
