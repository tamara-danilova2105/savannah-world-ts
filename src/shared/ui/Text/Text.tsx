import { ReactNode, memo } from "react";
import styles from './Text.module.scss';
import { classNames } from "@/shared/lib/classNames/classNames";

export type TextTag = 'h1' | 'h2' | 'h3' | 'p' | 'li';
export type TextSize = 'xs' | 's' | 'm' | 'ml' | 'l' | 'xl' | 'xxl';

interface TextProps {
    className?: string ,
    children: ReactNode,
    tag?: TextTag,
    size?: TextSize,
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        children,
        tag = 'p',
        size = 's',
    } = props;

    const mapTextTag: Record<TextTag, TextTag> = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        p: 'p',
        li: 'li'
    };

    const TextTag = mapTextTag[tag];

    const additional = [
        className,
        styles[size],
    ]

    return (
        <TextTag 
            className={classNames(styles.text, {}, additional)}
        >
            {children}
        </TextTag>
    );
});
