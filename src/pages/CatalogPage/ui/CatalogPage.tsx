import { HeaderSection } from "@/shared/ui/HeaderSection";
import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";
import { useModal } from "@/shared/hooks/useModal";
import { SearchCats } from '@/widgets/SearchCats';
import { CreateCatCard } from "@/entities/CreateCatCard";
import styles from './CatalogPage.module.scss';
import { useAuth } from "@/shared/hooks/useAuth";

const CatalogPage = () => {
    const [changeCreateModal, drawCreateModal] = useModal();
    const { isAuth } = useAuth();

    return (
        <main className={styles.main}>
            {/* FIX LATER */}
            {drawCreateModal(
                <CreateCatCard changeCreateModal={changeCreateModal} />
            )}
            {
                isAuth &&
                <Button onClick={changeCreateModal}>
                    создать
                </Button>
            }

            <HeaderSection section="Продаются котята">
                <Text tag="h2" size='xl' className={styles.title}>
                    Котята <span>готовые стать</span> частью семьи
                </Text>
            </HeaderSection>

            <SearchCats />
        </main>
    );
};

export default CatalogPage;
