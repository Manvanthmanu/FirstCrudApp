import { useState ,useEffect } from 'react'
import './App.css'
import {db} from '../firebase.config'
import {collection , getDocs, updateDoc ,doc ,deleteDoc} from 'firebase/firestore'
import BasicTextFields from './Components/Form'


function App() {
  const [user, setuser] = useState([])

  const [updatedName, setupdatedName] = useState('')
  const [updatedAge, setupdatedAge] = useState(0)
  const usercollectionRef = collection(db,"Users")

  

  useEffect(() => {
    const getUserref = async ()=>{
      const data =await getDocs(usercollectionRef)
      setuser(data.docs.map((doc)=>({ ...doc.data(), id:doc.id})));
      console.log(data.docs)
    }
    getUserref()
  }, [])
  
  const updatefunc  = async (id)=>{
    await updateDoc(doc(db,'Users',id) , {Name : updatedName , Age : Number(updatedAge)}) 
  }
  const deletefunc  = async (id)=>{
    await deleteDoc(doc(db,'Users',id)) 
  }

  return (
    <>
      <BasicTextFields />
      <div>Users</div>
      {
        user.map((data, index)=>{
          return(
          <div key={index}>
            <h1>Name : {data.Name}</h1>
            <h3>Age :{data.Age}</h3>
            <input type="text" placeholder='name' onChange={(e)=>{setupdatedName(e.target.value)}} />
            <input type="number" placeholder='age' onChange={(e)=>{setupdatedAge(e.target.value)}} />
            <button onClick={()=>{updatefunc(data.id)}}>Update</button>
            <button onClick={()=>{deletefunc(data.id)}}>Delete</button>
          </div>)
        })
      }
    </>
  )
}

export default App
