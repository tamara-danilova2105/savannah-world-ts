import { Stack } from "@/shared/ui/Stack/Stack";
import styles from './AboutUsBenefit.module.scss';
import { Text } from "@/shared/ui/Text/Text";

interface IBenefits {
    className: string;
    text: string;
}

const benefits: IBenefits[] = [
    {
        className: styles.doc,
        text: 'Документация согласно стандартам породы',
    },
    {
        className: styles.vet,
        text: 'Полное ветеринарное обследование и вакцинация',
    },
    {
        className: styles.question,
        text: 'Консультация по вопросам содержания и воспитания',
    },
];

export const AboutUsBenefit = () => {
    return (
        <Stack
            gap='32'
            direction='column'
            justify='center' max
            className={styles.benefits}
        >
            <Text tag="h2" size="xl" className={styles.title}>
                ПИТОМНИК <strong>SAVANNAH WORLD</strong> ЭТО -
            </Text>

            <Stack
                className={styles.row}
                max justify='between'
            >
                {
                    benefits.map(({ className, text }) => (
                        <div className={className} key={text}>
                            <Text tag="h3" size="s" className={styles.text}>
                                {text}
                            </Text>
                        </div>
                    ))
                }
            </Stack>
        </Stack>
    );
};