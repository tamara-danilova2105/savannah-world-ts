import { memo } from 'react';
import styles from './CheckBox.module.scss';

interface CheckboxProps {
    nameField?: string;
    idInput?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => boolean;
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
                onChange={(e) => onChange?.(e.target.checked)}
            />
            <label htmlFor={idInput}></label>
        </>
    );
});
