import { AboutUsDescription } from "../AboutUsDescription/AboutUsDescription";
import styles from './AboutUsMain.module.scss';
import { AboutUsBenefit } from "../AboutUsBenefit/AboutUsBenefit";
import { Stack } from "@/shared/ui/Stack";

export const AboutUs = () => {
    return (
        <Stack
            tag='section'
            direction='column'
            gap="32"
            className={styles.section}
        >
            <AboutUsDescription />
            <AboutUsBenefit />
        </Stack>
    )
}