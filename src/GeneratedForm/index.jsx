import inputTypes from '../inputTypes/inputTypes';
import styles from './styles.module.css';


const GeneratedForm = ({ inputs }) => (
  <div className={styles.form}>
    <form>
      {inputs.map(input => (
        <div key={input.id} className={styles.formGroup}>
          {inputTypes.find(info => info.value === input.value).render(input)}
        </div>
      ))}
    </form>
  </div>
);

export default GeneratedForm;
