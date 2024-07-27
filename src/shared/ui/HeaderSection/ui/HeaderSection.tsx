import { ReactNode } from 'react';
import styles from './HeaderSection.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { Stack } from '@/shared/ui/Stack/Stack';
import { Button } from '@/shared/ui/Button/Button';
import { arrowIcon } from '@/shared/assets/svg/arrowIcons';

interface HeaderSectionProps {
    section: string;
    children: ReactNode;
    hasButton?: boolean;
    handleClick?: () => void;
    button?: string;
}

export const HeaderSection = (props: HeaderSectionProps) => {
    const { 
        section, 
        children, 
        hasButton = false,
        handleClick,
        button,
    } = props;

    return (
        <Stack
            justify='between'
            className={styles.main}
        >
            <div>
                <Stack gap='16'>
                    <svg
                        width={40}
                        height="2"
                        viewBox="0 0 58 2"
                        fill="var(--dark-brown-color)"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line x1="0.399902" y1="1" x2="57.5191" y2="1" stroke="var(--dark-brown-color)" strokeWidth="2" />
                    </svg>
                    <Text size='l' className={styles.section}>
                        {section}
                    </Text>
                </Stack>
                {children}
            </div>
            {hasButton &&
                <Button
                    className={styles.button}
                    onClick={handleClick}
                >
                    {button} {arrowIcon()}
                </Button>
            }
        </Stack>
    );
};