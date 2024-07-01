import { Stack } from "@/shared/ui/Stack/Stack";
import styles from './AboutUsBenefit.module.scss';
import { Text } from "@/shared/ui/Text/Text";
import { benefits } from "../../lib/data";

export const AboutUsBenefit = () => {
    return (
        <Stack
            gap='32'
            direction='column'
            justify='center' max
            className={styles.main}
        >
            <Text tag="h2" size="xl" className={styles.title}>
                ПОЧЕМУ ИМЕННО МЫ?
            </Text>

            <Stack
                max
                justify='between'
                className={styles.benefits}
            >
                {
                    benefits.map(({ icon, text }) => (
                        <Stack
                            key={text}
                            gap='32'
                            justify='center'
                        >
                            {icon}
                            <Text tag="h3" size="s" className={styles.text}>
                                {text}
                            </Text>
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    );
};