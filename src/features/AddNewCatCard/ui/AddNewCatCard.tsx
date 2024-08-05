import { useModal } from '@/shared/hooks/useModal';
import styles from './AddNewCatCard.module.scss';
import { useAuth } from '@/shared/hooks/useAuth';
import { CreateCatCard } from '@/entities/CreateCatCard';
import { HeaderSection } from '@/shared/ui/HeaderSection';
import { Text } from '@/shared/ui/Text/Text';


export const AddNewCatCard = () => {
    const [changeCreateModal, drawCreateModal] = useModal();
    const { isAuth } = useAuth();

    return (
        <>
            {drawCreateModal(
                <CreateCatCard
                    isCreate
                    changeCreateModal={changeCreateModal}
                />
            )}
            <HeaderSection
                section="Продаются котята"
                hasButton={isAuth}
                handleClick={changeCreateModal}
                button='создать питомца'
            >
                <Text tag="h2" size='xl' className={styles.title}>
                    Котята <span>готовые стать</span> частью семьи
                </Text>
            </HeaderSection>
        </>
    );
};
