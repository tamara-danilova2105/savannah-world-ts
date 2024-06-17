import { Stack } from "@/shared/ui/Stack/Stack";
import styles from './Advices.module.scss'
import { Text } from "@/shared/ui/Text/Text";
import { dataAdvices } from "../../lib/data";
import { AdviceCard } from "../AdviceCard/AdviceCard";

export const Advices = () => {
    return (
        <Stack
            tag='section'
            direction='column'
            gap='32'
            className={styles.section}
        >
            <Text tag="h2" size="xl" className={styles.title}>
                СОВЕТЫ НОВЫМ ВЛАДЕЛЬЦАМ <strong>САВАНН</strong>
            </Text>

            {
                dataAdvices.map((advice, index) =>
                    <AdviceCard
                        advice={advice}
                        index={index}
                    />
                )
            }
        </Stack>
    )
}