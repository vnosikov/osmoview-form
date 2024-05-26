import { useState,useEffect } from 'react';
import inputTypes from '../inputTypes';
import styles from './styles.module.css';

const InputLine = ({ id, isNew = false, value, label, additionalInfo, onSave, onRemove }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [currentLabel, setCurrentLabel] = useState(label);
  const [currentAdditionalInfo, setCurrentAdditionalInfo] = useState(value);
  const [isEditMode, setIsEditMode] = useState(isNew);

  useEffect(() => {
    setCurrentValue(value);
    setCurrentLabel(label);
    setCurrentAdditionalInfo(additionalInfo);
    setIsEditMode(false);
  }, [value, label, additionalInfo]);

  const onEditAdditionalInfo = () => {

  };

  const onEditType = (e) => {
    setCurrentValue(e.target.value);
  };

  const onEditLabel = e => {
    setCurrentLabel(e.target.value);
  }

  const onSaveItem = () => {
    onSave({
      id,
      value: currentValue,
      label: currentLabel,
      additionalInfo: currentAdditionalInfo
    });
  }

  const showEditButton = !isEditMode && !isNew;
  const showSaveButton = isEditMode || isNew;
  const showRemoveButton = isEditMode && !isNew;
  const disabledFields = !isEditMode && !isNew;

  return (
    <div className={styles.inputLine}>
      <select disabled={disabledFields} value={currentValue} onChange={onEditType}>
        {inputTypes.map(inputType => (
          <option key={inputType.value} value={inputType.value}>{inputType.label}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Лейбл"
        disabled={disabledFields}
        value={currentLabel}
        onChange={onEditLabel}
      />
      
      {currentValue === 'select' && <button onClick={onEditAdditionalInfo}>Указать опции</button>}
      
      <div>
        {showEditButton && <button onClick={() => { setIsEditMode(true); }}>Редактировать</button>}    
        {showSaveButton && <button onClick={onSaveItem}>Сохранить</button>}
        {showRemoveButton && <button onClick={() => { onRemove(id); }}>Удалить</button>}
      </div>
    </div>
  );
};

export default InputLine;