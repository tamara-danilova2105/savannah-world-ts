import { memo } from 'react';
import styles from './CheckBox.module.scss';

interface CheckboxProps {
    nameField: string;
    idInput?: string;
    checked?: boolean;
    onChange?: (option: string) => void;
}

export const Checkbox = memo((props: CheckboxProps) => {
    const {
        nameField,
        idInput,
        checked,
        onChange
    } = props;

    return (
        <>
            <input
                type='checkbox'
                className={styles.checkbox}
                name={nameField}
                id={idInput}
                checked={checked}
                onChange={() => onChange?.(nameField)}
            />
            <label htmlFor={idInput}></label>
        </>
    );
});
