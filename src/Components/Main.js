import React, {useState,useReducer} from "react";
import Modal from "react-modal"

function Main(props){
    const [education,setEducation]=useReducer(
        (state,newState)=>({...state,...newState}),
  { school:"",
    degree:"",
   study:"", 
   startYear:"", 
   endYear:"",
   grade:"",
   description:"",
   other:""
   } )
const [educationList, setEducationList] =useState([])
   const [modal, setModal] =useState(false)
   const [schoolAPI, setSchoolAPI] =useState([])

   const handleOpenModal=()=>{
       setModal(true)
   }


   const handleFindSchool= async()=>{
    console.log("school",education.school)

    //    const response=await fetch(`http://universities.hipolabs.com/search?name=middle`)
    const response=await fetch(`http://universities.hipolabs.com/search?name=${education.school}`)
        const json =await response.json()
        // setSchoolAPI(json) 
        findingRightSchool(json)
   }

   function findingRightSchool(datas){
        console.log("data1",datas)
        datas.map(data=>{
            console.log("1")
            if(data.name === education.school ){
                console.log("2")
                setSchoolAPI(data.name)
            }
        })
   }
  const handleChange=(e)=>{
        console.log("target",e.target.name)
        const name=e.target.name;
        const newValue=e.target.value;
        setEducation({
        [name]:newValue
        })

  }

   const handleSubmit=(e)=>{
      setModal(false)  
   }

   const handleAfterModalClosed =()=>{
       setEducationList((data)=>{
           return [...data,education]
       })
       
   }
   console.log("res", schoolAPI)

    return (
        <div>

    <p>Welcome to {props.location.state}'s education page.</p>
    <button onClick={handleOpenModal}> Add New Education</button>
     <Modal isOpen={modal} onAfterClose={handleAfterModalClosed}>
         <h1>New Education Modal</h1>
         <label htmlFor="school">Name of School:</label><br/>
         <input type="text" name="school" value={education.school} placeholder="Your school name" id="school" onChange={handleChange}/>
         <br/>
         <button onClick={handleFindSchool}>Find school</button>

         <label htmlFor="degree">Degree</label><br/>
         <input type="text" name="degree" value={education.degree} placeholder="Your Degree" id="degree" onChange={handleChange}/>
         <br/>

         <label htmlFor="study">study</label><br/>
         <input type="text" name="study" value={education.study}  placeholder="Field of studay" id="study" onChange={handleChange}/>
         <br/>

         <label htmlFor="startYear">Start year</label><br/>
         <input type="text" name="startYear" value={education.startYear}  placeholder="Start year" id="startYear" onChange={handleChange}/>
         <br/>

         <label htmlFor="endYear">Expected year</label><br/>
         <input type="text" name="endYear" value={education.endYear}  placeholder="End year" id="endYear" onChange={handleChange}/>
         <br/>

         <label htmlFor="grade">Grade</label><br/>
         <input type="text" name="grade" value={education.grade}  placeholder="Grade" id="grade" onChange={handleChange}/>
         <br/>

         <label htmlFor="description">description</label><br/>
         <textarea name="description" value={education.description}  placeholder="What you learn at school" id="description" spellcheck={true} cols="50" rows="5" onChange={handleChange} />
         <br/>

         <label htmlFor="other">Other</label><br/>
           <textarea type="text" name="other" value={education.other}  placeholder="Anything" id="other" spellcheck={true} cols="50" rows="5" onChange={handleChange}/> 
         <br/>

         <button onClick={handleSubmit}>Save</button>
         <button onClick={handleSubmit}>Cancel</button>
     </Modal>

 {educationList.map(data=>(
 <div>
     {data.study}@{data.school}<br/>
     {data.startYear} - {data.endYear}<br/>
     {data.description}<br/>
     {data.other}<br/>
</div>))}
 
    </div> 
       
    )
}

export default Main