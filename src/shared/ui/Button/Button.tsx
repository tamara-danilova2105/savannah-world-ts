import { Additional, classNames, Mods } from "@/shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import styles from './Button.module.scss';

export type ButtonVariant = 'accent' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    variant?: ButtonVariant;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        disabled,
        variant = 'accent',
        ...otherProps
    } = props;

    const mode: Mods = {
        [styles.disabled]: disabled,
    };

    const additional: Additional = [
        className,
        styles[variant],
    ]

    return (
        <button
            className={classNames(styles.button, mode, additional)}
            {...otherProps}
        >
            {children}
        </button>
    )
});
