import { Stack } from "@/shared/ui/Stack";
import styles from './Advices.module.scss'
import { Text } from "@/shared/ui/Text";
import { dataAdvices } from "../../lib/data";
import { AdviceCard } from "../AdviceCard/AdviceCard";
import { HeaderSection } from "@/shared/ui/HeaderSection";

export const Advices = () => {
    return (
        <Stack
            tag='section'
            direction='column'
            align='start'
            gap='48'
            className={styles.section}
        >

            <HeaderSection section="Советы">
                <Text tag="h2" size='xl' className={styles.title}>
                    На заметку владельцам: <span>советы и рекомендации</span>
                </Text>
            </HeaderSection>

            {
                dataAdvices.map((advice, index) =>
                    <AdviceCard
                        key={index}
                        advice={advice}
                        index={index}
                    />
                )
            }
        </Stack>
    )
}