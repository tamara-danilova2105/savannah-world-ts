import { Text } from "../../../../shared/ui/Text/Text";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import styles from "./AdviceCard.module.scss";
import { Advice } from "../../lib/data";

interface AdviceCardProps {
    advice: Advice; 
    index: number;
}

export const AdviceCard = ({ advice, index }: AdviceCardProps) => {
    return (
        <Stack 
            justify='between'
            gap='48'
            className={styles.container}
        >
            <img
                src={advice.cat} width='240 px' alt="Cat"
                className={index % 2 === 0 ? styles.img : styles.imgRev} />
            <div>
                <Text className={styles.title} tag="h2">
                    {advice.title}
                </Text>
                <Text className={styles.content} tag="p">
                    {advice.content}
                </Text>
            </div>
        </Stack>
    );
};