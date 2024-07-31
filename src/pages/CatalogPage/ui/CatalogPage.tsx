import { HeaderSection } from "@/shared/ui/HeaderSection";
import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";
import { useModal } from "@/shared/hooks/useModal";
import { CreateCatCard } from "@/widgets/CreateCatCard";
import { SearchCats } from '@/widgets/SearchCats';
import styles from './CatalogPage.module.scss';

const CatalogPage = () => {
    const [changeCreateModal, drawCreateModal] = useModal();
    const isAdmin = false; //FIX LATER

    return (
        <main className={styles.main}>
            {/* FIX LATER */}
            {drawCreateModal(
                <CreateCatCard changeCreateModal={changeCreateModal} />
            )}
            {
                isAdmin &&
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
