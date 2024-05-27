import { Stack } from "@/shared/ui/Stack/Stack";
import { Text } from "@/shared/ui/Text/Text";
import styles from './AboutUsDescription.module.scss';
import aboutPicture from '@/shared/assets/images/aboutus.png';

export const AboutUsDescription = () => {
    return (
        <Stack
            direction='column'
            gap='32'
            className={styles.description}
        >
            <Text tag="h2" size='xl' className={styles.title}>
                О ПИТОМНИКЕ <strong>SAVANNAH WORLD</strong>
            </Text>
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
                        Нас завораживает красота и грация Саванн!
                    </Text>
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