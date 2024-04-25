import { Additional, classNames, Mods } from "@/shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import styles from './Button.module.scss';
import { arrowButton } from "@/shared/assets/svg/arrowButton";

export type ButtonVariant = 'accent' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    variant?: ButtonVariant;
    cta?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        disabled,
        variant = 'accent',
        cta = true,
    } = props;

    const mode: Mods = {};

    const additional: Additional = [
        className,
        styles[variant],
    ]

    return (
        <button
            className={classNames(styles.button, mode, additional)}
            disabled={disabled}
        >
            {children}
            {cta && arrowButton()}
        </button>
    )
});
