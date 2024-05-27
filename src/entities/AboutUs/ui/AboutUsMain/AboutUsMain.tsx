import { Stack } from "@/shared/ui/Stack/Stack";
import { AboutUsDescription } from "../AboutUsDescription/AboutUsDescription";
import styles from './AboutUsMain.module.scss';
import { AboutUsBenefit } from "../AboutUsBenefit/AboutUsBenefit";

export const AboutUs = () => {
    return (
        <Stack
            tag='section'
            direction='column'
            className={styles.section}
        >
            <AboutUsDescription />
            <AboutUsBenefit />
        </Stack>
    )
}