import cls from './Stack.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type StackDirection = 'row' | 'column';
export type StackJustify = 'start' | 'center' | 'end' | 'between';
export type StackAlign = 'start' | 'center' | 'end';
export type StackGap = '4' | '8' | '16' | '32';

const directionClasses: Record<StackDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const justifyClasses: Record<StackJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<StackAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const gapClasses: Record<StackGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
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

    const additional = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div
            className={classNames(cls.Flex, mods, additional)}
            {...otherProps}
        >
            {children}
        </div>
    )
}