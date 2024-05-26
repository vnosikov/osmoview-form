import InputLine from "./InputLine";
import styles from './styles.module.css';
import inputTypes from "../inputTypes";

const Editor = ({ inputs, onAddInput, onEditInput, onRemoveInput }) => {
  return (
    <div className={styles.editor}>
      {inputs.map(input => (
        <InputLine
          id={input.id}
          key={input.id}
          value={input.value}
          label={input.label}
          additionalInfo={input.additionalInfo}
          onSave={onEditInput}
          onRemove={onRemoveInput}
        />
      ))}
      <span>Новое поле</span>
      <InputLine
        id="NEW"
        isNew
        value={inputTypes[0].value}
        label=""
        additionalInfo={null}
        onSave={onAddInput}
        onRemove={onRemoveInput}
      />
    </div>
  )
};

export default Editor;
