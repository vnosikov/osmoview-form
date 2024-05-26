import styles from './styles.module.css';

const simpleTypeRender = ({ id, label, value }) =>  (
  <div className={styles.formGroup}>
    <label htmlFor={id}>{label}</label>
    <div>
      <input type={value} id={id} />
    </div>
  </div>
);

export default [
  {
    value: 'text',
    label: 'Строка',
    render: simpleTypeRender
  },
  {
    value: 'number',
    label: 'Число',
    render: simpleTypeRender,
  },
  {
    value: 'checkbox',
    label: 'Чекбокс',
    render: simpleTypeRender,
  },
  {
    value: 'select',
    label: 'Выпадающий список',
    render: ({ id, label, additionalInfo }) =>  (
      <div className={styles.formGroup}>
        <label htmlFor={id}>{label}</label>
        <div>
          <select id={id}>
            {additionalInfo?.options.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>
    ),
  },
  {
    value: 'button',
    label: 'Кнопка',
    render: ({ label }) => <button type="button">{label}</button>,
  }
];
