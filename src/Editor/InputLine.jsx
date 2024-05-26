import { useState, useEffect, useRef } from 'react';
import inputTypes from '../inputTypes/inputTypes';
import styles from './styles.module.css';

const InputLine = ({ id, isNew = false, value, label, additionalInfo, onSave, onRemove }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [currentLabel, setCurrentLabel] = useState(label);
  const [currentAdditionalInfo, setCurrentAdditionalInfo] = useState(additionalInfo);
  const [isEditMode, setIsEditMode] = useState(isNew);
  const [isDialog, setIsDialog] = useState(false);

  useEffect(() => {
    setCurrentValue(value);
    setCurrentLabel(label);
    setCurrentAdditionalInfo(additionalInfo);
    setIsEditMode(false);
  }, [value, label, JSON.stringify(additionalInfo)]);

  const onOpenDialog = (item) => {
    setIsDialog(true);
  };

  const onEditType = (e) => {
    setCurrentValue(e.target.value);
  };

  const onEditLabel = e => {
    setCurrentLabel(e.target.value);
  }

  const onEditOptions = e => {
    setCurrentAdditionalInfo({
      options: e.target.value.split('\n'),
    })
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
    <>
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

        <div>
          {currentValue === 'select' && <button onClick={onOpenDialog}>Опции</button>}
        </div>

        <div>
          {showEditButton && <button onClick={() => { setIsEditMode(true); }}>Редактировать</button>}
          {showSaveButton && <button onClick={onSaveItem}>Сохранить</button>}
          {showRemoveButton && <button onClick={() => { onRemove(id); }}>Удалить</button>}
        </div>
      </div>
      {isDialog && (
        <dialog className={styles.dialog}>
          <p>Укажите опции <br />(перейдите в режим редактирования, чтобы изменить)</p>
          <textarea
            disabled={disabledFields}
            value={currentAdditionalInfo?.options.join('\n')}
            rows="30"
            onChange={onEditOptions}
          />
          <button onClick={() => { setIsDialog(false); }}>Закрыть</button>
        </dialog>
      )}
    </>
  );
};

export default InputLine;