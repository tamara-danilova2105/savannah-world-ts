import { Stack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { accordionFaq } from "../../libs/data";
import styles from './Faq.module.scss';
import { HeaderSection } from "@/shared/ui/HeaderSection";
import { Accordion } from "@/shared/ui/Accordion";

export const Faq = () => {
    return (
        <Stack
            tag='section'
            direction='column'
            align='start'
            gap="48"
            max
            className={styles.section}
        >
            <HeaderSection section="FAQ">
                <Text tag="h2" size='xl' className={styles.title}>
                    <span>Есть вопросы?</span> Посмотри здесь:
                </Text>
            </HeaderSection>

            <Accordion data={accordionFaq} />
        </Stack>
    );
};