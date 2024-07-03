import { memo } from 'react';
import styles from './Footer.module.scss';
import { Stack } from '@/shared/ui/Stack/Stack';
import { contacts } from '../lib/data';
import { Text } from '@/shared/ui/Text/Text';

export const Footer = memo(() => {
    return (
        <footer className={styles.footer}>
            <Stack
                justify='between' max
                className={styles.container}
            >
                <Stack
                    direction='column'
                    gap='16'
                    align='start'
                    className={styles.main}
                >
                    {contacts.slice(0, 3).map(contact =>
                        <Stack key={contact.id} gap='16'>
                            {contact.icon}
                            {contact.text}
                        </Stack>
                    )}
                </Stack>

                <Stack
                    direction='column'
                    gap='16'
                    align='end'
                    className={styles.mediaDesktop}
                >
                    {contacts.slice(3).map(contact =>
                        <Stack key={contact.id} gap='16'>
                            {contact.text}
                            {contact.icon}
                        </Stack>
                    )}
                </Stack>
                <Stack
                    max
                    justify='center'
                    className={styles.mediaMobile}
                >
                    {contacts.slice(3).map(contact =>
                        <span key={contact.id}>
                            {contact.icon}
                        </span>
                    )}
                </Stack>
            </Stack>

            <Stack
                justify='between' max
                className={styles.info}
            >
                <Text className={styles.text}>
                    © 2024 Savannah World. Все права защищены
                </Text>
                <Text className={styles.text}>
                    Создание сайта - AL TECH LABS LTD.
                </Text>
            </Stack>
        </footer>
    );
});
