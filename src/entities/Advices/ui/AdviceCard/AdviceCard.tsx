import { Text } from "../../../../shared/ui/Text/ui/Text";
import styles from "./AdviceCard.module.scss";
import { Advice } from "../../lib/data";
import { Stack } from "@/shared/ui/Stack";

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
                src={advice.cat} alt="cat Savannah"
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