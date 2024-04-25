import styles from './Stack.module.scss';
import { Additional, classNames, Mods } from '@/shared/lib/classNames/classNames';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type StackDirection = 'row' | 'column';
export type StackJustify = 'start' | 'center' | 'end' | 'between';
export type StackAlign = 'start' | 'center' | 'end';
export type StackGap = '4' | '8' | '16' | '32';

const directionClasses: Record<StackDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn,
};

const justifyClasses: Record<StackJustify, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
};

const alignClasses: Record<StackAlign, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
};

const gapClasses: Record<StackGap, string> = {
    4: styles.gap4,
    8: styles.gap8,
    16: styles.gap16,
    32: styles.gap32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    direction?: StackDirection;
    justify?: StackJustify;
    align?: StackAlign;
    gap?: StackGap;
    max?: boolean;
}

export const Stack = (props: FlexProps) => {
    const {
        className,
        children,
        direction = 'row',
        justify = 'start',
        align = 'center',
        gap,
        max,
        ...otherProps
    } = props;

    const additional: Additional = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [styles.max]: max,
    };

    return (
        <div
            className={classNames(styles.Flex, mods, additional)}
            {...otherProps}
        >
            {children}
        </div>
    )
}