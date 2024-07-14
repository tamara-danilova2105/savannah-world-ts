import { Filter } from "@/features/Fiiter";
import styles from './CatalogPage.module.scss';
import { CatList } from "@/entities/Cat";
import { HeaderSection } from "@/shared/ui/HeaderSection";
import { Text } from "@/shared/ui/Text/Text";
import { useGetCatsQuery } from "../api/api";

const CatalogPage = () => {
    const filterParams = {
        group: [],
        sex: ['самка'],
        age: ['котята'],
        shipment: []
    }; //TEST - из REDUX потом брать 

    const params: Record<string, string> = {
        generate: filterParams.group?.join(','),
        sex: filterParams.sex?.join(','),
        age: filterParams.age?.join(','),
        shipment: filterParams.shipment?.join(',')
    };

    const { data: cats, error, isLoading } = useGetCatsQuery(params);
    console.log(cats);
    
    return (
        <main className={styles.main}>
            <HeaderSection section="Продаются котята">
                <Text tag="h2" size='xl' className={styles.title}>
                    Котята <span>готовые стать</span> частью семьи
                </Text>
            </HeaderSection>
            <Filter />
            {
                error 
                    ? <div>Не найдено - FIX LATER</div>
                    : <CatList cats={cats} isLoading={isLoading} />
            }
        </main>
    );
};

export default CatalogPage;
