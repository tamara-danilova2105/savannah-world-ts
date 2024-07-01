import { memo } from 'react';
import styles from './Footer.module.scss';
import { Stack } from '@/shared/ui/Stack/Stack';
import { contacts } from '../lib/data';

export const Footer = memo(() => {
    return (
        <footer className={styles.footer}>
            <Stack
                justify='between' max
            >
                <Stack
                    direction='column'
                    gap='16'
                    align='start'
                    className={styles.main}
                >
                    {contacts.slice(0, 3).map(contact =>
                        <Stack gap='16'>
                            {contact.icon}
                            {contact.text}
                        </Stack>
                    )}
                </Stack>

                <Stack direction='column' gap='16' align='end'>
                    {contacts.slice(3).map(contact =>
                        <Stack gap='16'>
                            {contact.text}
                            {contact.icon}
                        </Stack>
                    )}
                </Stack>
            </Stack>
        </footer>
    );
});
