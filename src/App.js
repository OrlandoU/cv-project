import logo from './logo.svg';
import './App.css';
import Builder from './components/Builder';
import {useState} from 'react'
import cvInfo from './objects/cvInfo';

function App() {
  const [infoDb, setInfoDb] = useState(cvInfo)
  

  const removeSection = (section, id) => {
      setInfoDb((prevState) => {
        return {infoDb: prevState.map(crrSection=>{
          if(crrSection.sectionName === section){
            return { 
              data : crrSection.data.filter((data)=>data.id === id),
              name: crrSection.sectionName
            }
          }
          return crrSection
        })}
      })
  }
  const addSection = (section, id) => {
    console.log(id)
    setInfoDb(prevState => {
      return prevState.map(crrSection=>{
        if(crrSection.sectionName === section){
          return {
            sectionName: crrSection.sectionName,
            data: [...crrSection.data,{id}]
          }
        }
        return crrSection
      })
    })
  }

  const updateSection = (newObj, id, section) => {
    console.log(id)
    setInfoDb(prevState => {
      return prevState.map(crrSection => {
        if(crrSection.sectionName === section){
          return {
            sectionName: crrSection.sectionName,
            data : crrSection.data.map(subSection => {
              if(subSection.id === id){
                return {...newObj, id}
              }
              
              return subSection
            })
          }
        }
        return crrSection
      })
    })
  }
  console.log(infoDb)
  return (
    <div className="App">
         <Builder updateSection={updateSection} removeSection={removeSection} addSection={addSection} savedInfo={infoDb}/>
    </div>
  );
}

export default App;
