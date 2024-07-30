import React,{useState} from 'react'

export default function ContactUs(){
    const [UserName,setUserName]=useState('');
    const [userAge,setUserAge]=useState();
    const [userData,setUserData]=useState([]);
   const submitHandler=(e)=>{
           e.preventDefault()
          
           setUserData((prevData)=>[...prevData,{UserName:UserName,userAge}])
           setUserName('')
           setUserAge('')
    }
    console.log(userData)
    return(
        <form onSubmit={(e)=>submitHandler(e)}>
        <input name='text' placeholder='UserName' value={UserName} onChange={(e)=>setUserName(e.target.value)}/><br/><br/>
        <input name='number' placeholder='UserAge' value={userAge} onChange={(e)=>setUserAge(e.target.value)}/><br/><br/>
        <button>save</button>
        {userData?.map((val)=>
        <>
        <h1>{val.UserName}</h1>
        <h1>{val.userAge}</h1>
        </>
        )}
        </form>
    )
}