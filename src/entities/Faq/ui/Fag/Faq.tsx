import { Stack } from "@/shared/ui/Stack/Stack";
import { Text } from "@/shared/ui/Text/Text";
import { Accordion } from "../Accordion/AccordionList/Accordion";
import { accordionFaq } from "../../libs/data";
import styles from './Faq.module.scss';

export const Faq = () => {
    return (
        <Stack
            tag='section'
            direction='column'
            className={styles.section}
        >
            <Text tag="h2" size="xl" className={styles.title}>
                ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
            </Text>
            <Accordion data={accordionFaq} />
        </Stack>
    );
};