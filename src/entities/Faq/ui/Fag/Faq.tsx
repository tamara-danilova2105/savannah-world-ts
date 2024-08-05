import { Stack } from "@/shared/ui/Stack/Stack";
import { Text } from "@/shared/ui/Text/Text";
import { Accordion } from "../../../../shared/ui/Accordion/AccordionList/Accordion";
import { accordionFaq } from "../../libs/data";
import styles from './Faq.module.scss';
import { HeaderSection } from "@/shared/ui/HeaderSection";

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