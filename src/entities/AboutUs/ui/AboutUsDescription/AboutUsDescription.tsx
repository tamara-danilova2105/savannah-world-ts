import { Text } from "@/shared/ui/Text";
import styles from './AboutUsDescription.module.scss';
import aboutPicture from '@/shared/assets/images/aboutus.png';
import { HeaderSection } from "@/shared/ui/HeaderSection";
import { Stack } from "@/shared/ui/Stack";

export const AboutUsDescription = () => {
    return (
        <Stack
            direction='column'
            gap='48'
            align='start'
            className={styles.main}
        >
            <HeaderSection section="O питомнике">
                <Text tag="h2" size='xl' className={styles.title}>
                    Нас завораживает <span>красота и грация</span> Саванн!
                </Text>
            </HeaderSection>

            <Stack
                justify='between'
                className={styles.container}
            >
                <img className={styles.picture} src={aboutPicture} alt="about" />
                <Stack
                    direction='column'
                    align='start'
                    className={styles.text}
                >
                    <Text size="m" className={styles.par}>
                        Питомник Savanna World, в лице заводчика Светланы Костроминой зарегистрирован в TICA и обладает всеми необходимыми документами.
                    </Text>
                    <Text size="m" className={styles.par}>
                        Мы стремимся к получению котят прекрасным внешним видом и отличным здоровьем. Поэтому на регулярной основе проводим анализы и осмотры ветеринарным врачом.
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    );
};