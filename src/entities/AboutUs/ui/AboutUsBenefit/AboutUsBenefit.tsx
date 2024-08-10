import styles from './AboutUsBenefit.module.scss';
import { Text } from "@/shared/ui/Text";
import { benefits } from "../../lib/data";
import { HeaderSection } from "@/shared/ui/HeaderSection";
import { Stack } from '@/shared/ui/Stack';

export const AboutUsBenefit = () => {
    return (
        <Stack
            gap='48'
            direction='column'
            align='start'
            max
            className={styles.main}
        >
            <HeaderSection section="Почему мы">
                <Text tag="h2" size='xl' className={styles.title}>
                    Наши преимущества: <span>опыт и забота</span> о вашем питомце
                </Text>
            </HeaderSection>

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