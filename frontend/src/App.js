import './App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React, { useState } from 'react';

const datasetOptions = [
  'Dataset 1', 'Dataset 2', 'Dataset 3'
];
const defaultDatasetOptions = datasetOptions[0];

const algorithmOptions = [
  'Algorithm 1', 'Algorithm 2', 'Algorithm 3'
];
const defaultAlgorithmOptions = algorithmOptions[0];

function App() {

  function handleSubmit() {
    console.log(datasetChoice);
    console.log(algorithmChoice);
  }
  
  function algorithmOnSelect (option) {
    setAlgorithmChoice(option)
  }
  
  function datasetOnSelect (option) {
    setDatasetChoice(option)
  }

  const [datasetChoice, setDatasetChoice] = useState({value: 'Dataset 1', label: 'Dataset 1'});
  const [algorithmChoice, setAlgorithmChoice] = useState({value: 'Algorithm 1', label: 'Algorithm 1'});

  return (

    <div className="App">
      <header className="App-header">

        <div className='row'>
          <Dropdown options={datasetOptions} onChange={datasetOnSelect} value={defaultDatasetOptions} placeholder="Select an option" />
          <Dropdown options={algorithmOptions} onChange={algorithmOnSelect} value={defaultAlgorithmOptions} placeholder="Select an option" />
          <button onClick={handleSubmit}>
            Submit
          </button>
        </div>

       </header>
     </div>
  );
}

export default App;
