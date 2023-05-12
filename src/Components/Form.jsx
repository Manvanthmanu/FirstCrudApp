import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import {  setDoc ,doc ,updateDoc } from 'firebase/firestore';
import {db} from '../../firebase.config'
import {collection } from 'firebase/firestore'

export default function BasicTextFields() {

    const [NewName , setNewName]= useState('')
    const [NewAge , setNewAge]= useState(0)
    const [NewRegNum , setNewRegNum]= useState('')
    const usercollectionRef = collection(db,"Users")

    const addFunction = async ()=>{
        // const regnum = collection(db,'Users',NewRegNum)  // this is wrong method 
        //  await addDoc(doc(db,'Users',NewRegNum) , {Name : NewName , Age : Number(NewAge)})
        // await collection(NewRegNum).add({Name : NewName , Age : Number(NewAge)})
        console.log(NewRegNum)
        await setDoc(doc(db,'Users',NewRegNum) , {Name : NewName , Age : Number(NewAge)})
    }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Reg Num" variant="standard" type='text' onChange={(e)=>{
        setNewRegNum(e.target.value)
      }} />
      <TextField id="standard-basic" label="Name" variant="standard" type='text' onChange={(e)=>{
        setNewName(e.target.value)
      }} />
      <TextField id="standard-basic" label="Age" variant="standard" type='number' onChange={(e)=>{
        setNewAge(e.target.value)
      }}/>
      <Button onClick={addFunction}>Add</Button>
    </Box>
  );
}