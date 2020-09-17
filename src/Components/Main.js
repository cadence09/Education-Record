import React, {useState,useReducer,useRef} from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Grid  from '@material-ui/core/Grid';
function Main(props){
    const initEducation={
    school:"",
    degree:"",
   study:"", 
   startYear:"", 
   endYear:"",
   grade:"",
   description:"",
   other:""
    }
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
   const [schoolList, setSchoolList] =useState([])
   const { handleSubmit, register, errors } = useForm();
   const myForm = useRef(null)
   const onSubmit = (e) => {setModal(false); };

   const handleOpenModal=()=>{
       setModal(true)
   }


   const handleFindSchool= async()=>{
    console.log("school",education.school)
    const school=[]

    const response=await fetch(`http://universities.hipolabs.com/search?name=${education.school}`)
        const json =await response.json()
    
        const list= json.map(data=>data.name)
        console.log("list",list[0])
         school.push(...list)
      
      setSchoolList(school)
        findingRightSchool(school)
   }

   function findingRightSchool(school){
       console.log("school",school[0])
        }
   
  const handleChange=(e)=>{
        console.log("target",e.target.name)
        const name=e.target.name;
        const newValue=e.target.value;
        setEducation({
        [name]:newValue
        })

  }

   const handleButton=(e)=>{
   
      setModal(false)  
      setEducation(initEducation)
   }

   const handleAfterModalClosed =()=>{
       setEducationList((data)=>{
           return [...data,education]
       })
       
   }


    return (
        <Grid item xs={12} md={12} lg={12}>
   <Container>
    <p>Welcome to {props.location.state}'s education page.</p>
    <button onClick={handleOpenModal}> Add New Education</button>
    </Container>
     <Modal isOpen={modal} onAfterClose={handleAfterModalClosed}>
         <h1>New Education Modal</h1>
         <form ref={myForm} onSubmit={handleSubmit(onSubmit)}>
         <label htmlFor="school">Name of School:</label><br/>
         <input type="text" name="school" value={education.school} placeholder="Your school name" id="school" required onChange={handleChange}/>
         <br/>
         <button onClick={handleFindSchool}>Find school</button><br/>
        Result: <br/>
        {schoolList.map((data,i)=>(<li key={i}>{data}</li>))}

         <label htmlFor="degree">Degree</label><br/>
         <input type="text" name="degree" value={education.degree} placeholder="Your Degree" id="degree" required onChange={handleChange}/>
         <br/>

         <label htmlFor="study">study</label><br/>
         <input type="text" name="study" value={education.study}  placeholder="Field of studay" id="study" required onChange={handleChange} />
     
         <br/>

         <label htmlFor="startYear">Start year</label><br/>
         <input type="text" name="startYear" value={education.startYear}  placeholder="Start year" id="startYear" required onChange={handleChange}/>
         <br/>

         <label htmlFor="endYear">Expected year</label><br/>
         <input type="text" name="endYear" value={education.endYear}  placeholder="End year" id="endYear" required onChange={handleChange}/>
         <br/>

         <label htmlFor="grade">Grade</label><br/>
         <input type="text" name="grade" value={education.grade}  placeholder="GPA" id="grade" required onChange={handleChange}/>
         <br/>

         <label htmlFor="description">description</label><br/>
         <textarea name="description" value={education.description}  placeholder="What you learn at school" id="description" spellcheck={true} cols="50" rows="5" required onChange={handleChange} />
         <br/>

         <label htmlFor="other">Other</label><br/>
           <textarea type="text" name="other" value={education.other}  placeholder="Anything" id="other" spellcheck={true} cols="50" rows="5" onChange={handleChange}/> 
         <br/>

          <button type="submit">Submit</button>
         <button onClick={handleButton}>Close</button>
         </form>
     </Modal>
   
<Board>
 {educationList.map(data=>(
 <div>
    <Title>{data.study}@{data.school},{data.grade}</Title>
     {data.startYear} - {data.endYear}
     <Text>Description:</Text>
     {data.description}
     <Text>Other:</Text>
     {data.other}
</div>))}
</Board>

   </Grid>
       
    )
}

const Container = styled.div`
    text-align:center;
    padding:2em;
  `

const Board =styled.div`
padding:1em 5em 15em;
margin: 0 10em;
border: 2px solid palevioletred;
color:#08618a;
`

const Title=styled.h1`
fontSize:2em
fontWeight:400
`
const Text= styled.h4`
fontWeight:200
`
export default Main