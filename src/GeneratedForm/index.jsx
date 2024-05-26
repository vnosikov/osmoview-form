import styles from './styles.module.css';


const GeneratedForm = ({ inputs }) => (
  <div className={styles.form}>
    <form>
      {inputs.map(input => (
        <div className={styles.formGroup}>
          <label for={input.id}>{input.label}</label>
          <div>
            <input key={input.id} type={input.value} name={input.id} />
          </div>
        </div>
      ))}
    </form>
  </div>
);

export default GeneratedForm;
