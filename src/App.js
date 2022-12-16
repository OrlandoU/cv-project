
import './styles/App.css';
import Builder from './components/Builder';
import TemplateContainer from './components/TemplateContainer';
import { useState, useEffect, useRef } from 'react'
import cvInfo from './objects/cvInfo';
import { useReactToPrint } from 'react-to-print';

function App() {
  let localDb = JSON.parse(localStorage.getItem('cvDb')) || cvInfo
  console.log(localDb)
  const componentRef = useRef()
  const [infoDb, setInfoDb] = useState(localDb)

  const removeSection = (section, id) => {
    setInfoDb((prevState) => {
      return prevState.map(crrSection => {
        if (crrSection.sectionName === section) {
          return {
            sectionName: crrSection.sectionName,
            data: crrSection.data.filter(el=>el.id !== id)
          }
        }
        return crrSection
      })
    })
  }

  const addSection = (section, id) => {
    let emptyInputArr = {}
    section.template.forEach(el=>{
      emptyInputArr[el.header] = ''
    })
    setInfoDb(prevState => {
      return prevState.map(crrSection => {
        if (crrSection.sectionName === section.section) {
          return {
            sectionName: crrSection.sectionName,
            data: [...crrSection.data, {...emptyInputArr, id }]
          }
        }
        return crrSection
      })
    })
  }

  const updateSection = (newObj, id, section) => {
    console.log(newObj)
    setInfoDb(prevState => {
      return prevState.map(crrSection => {
        if (crrSection.sectionName === section) {
          return {
            sectionName: crrSection.sectionName,
            data: crrSection.data.map(subSection => {
              if (subSection.id === id) {
                return { ...newObj, id }
              }

              return subSection
            })
          }
        }
        return crrSection
      })
    })
  }

  useEffect(() => {
    localStorage.setItem('cvDb', JSON.stringify(infoDb)) 
  },[infoDb]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    bodyClass: 'printBody'
  })

  console.log(infoDb)
  return (
    <div className="App">

      <Builder updateSection={updateSection} removeSection={removeSection} addSection={addSection} savedInfo={infoDb} />
      <div className="template-container">
        <div className="overflow-container">
          <TemplateContainer ref={componentRef} cvInfo={infoDb} />
        </div>
        <button onClick={handlePrint} className='printCv-button' type='button'>Print CV</button>
      </div>
    </div>
  );
}

export default App;
