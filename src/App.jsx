import { useState } from 'react'
import { v4 as uuid } from 'uuid';

import styles from './App.module.css'
import Editor from './Editor';
import GeneratedForm from './GeneratedForm';
import initialForm from './initialForm';

function App() {
  const [inputsList, setInputsList] = useState(initialForm);

  const onAddInput = data => {
    const newData = {
      ...data,
      id: uuid(),
    }
    setInputsList(inputs => [...inputs, newData]);
  };

  const onEditInput = data => {
    setInputsList(inputs => inputs.map(input =>
      input.id === data.id ? data : input
    ));
  };

  const onRemoveInput = id => {
    setInputsList(inputs => inputs.filter(input =>
      input.id !== id
    ))
  };

  return (
    <div className={styles.container}>
      <Editor
        inputs={inputsList}
        onAddInput={onAddInput}
        onEditInput={onEditInput}
        onRemoveInput={onRemoveInput}
      />
      <GeneratedForm
        inputs={inputsList}
      />
    </div>
  );
}

export default App
