
import './styles/App.css';
import Builder from './components/Builder';
import TemplateContainer from './components/TemplateContainer';
import { useState, useEffect, useRef } from 'react'
import cvInfo from './objects/cvInfo';
import { useReactToPrint } from 'react-to-print';

function App() {
  let localDb = JSON.parse(localStorage.getItem('db')) || cvInfo
  console.log(localDb)
  const componentRef = useRef()
  const [infoDb, setInfoDb] = useState(localDb)

  const saveChanges = () => {
    localStorage.setItem('db', JSON.stringify(infoDb))
  }

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
    saveChanges()
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
    saveChanges()
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
    saveChanges()
  }

  useEffect(() => {
    const resize = (event) => {
      let value = window.innerWidth / 1920
      console.log(value)
      document.getElementById('toBeResized').style.transform = `scale(${value})`
    }

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, []);

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
