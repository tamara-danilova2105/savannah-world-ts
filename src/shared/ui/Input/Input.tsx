import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import styles from './Input.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    defaultValue?: string | number;
    placeholder?: string;
    onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
    const { 
        className, 
        defaultValue = '', 
        placeholder, 
        onChange, 
        ...otherProps 
    } = props;

    const [value, setValue] = useState(defaultValue);

    const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange?.(e.target.value);           
    };

    return (
        <input 
            className={classNames(styles.input, {}, [className])}
            placeholder={placeholder}
            value={value}
            onChange={handlerInput}
            {...otherProps}
        />
    )
}