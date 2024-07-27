import { Filter } from '@/features/Filter';
import styles from './SearchCats.module.scss';
import { Stack } from '@/shared/ui/Stack/Stack';
import { CatList } from '@/entities/Cat';
import { useGetCatsQuery } from '@/pages/CatalogPage/api/api';
import { useMemo, useRef, useState } from 'react';
import { useAppSelector } from '@/app/providers/store/config/hooks';
import { Text } from '@/shared/ui/Text/Text';
import ReactPaginate from 'react-paginate';

const countCart = 12;

interface PageChangeEvent {
    selected: number;
}

export const SearchCats = () => {

    const [selectedPage, setSelectedPage] = useState(0);
    const catalogRef = useRef<HTMLDivElement>(null);
    
    const filterParams = useAppSelector(state => ({
        generate: state.filter.generate,
        sex: state.filter.sex,
        age: state.filter.age,
        shipment: state.filter.shipment,
        page: selectedPage + 1,
    }));

    const params = useMemo(() => {
        return Object.fromEntries(
            Object.entries(filterParams).map(([key, value]) => {
                if (Array.isArray(value)) {
                    return [key, value.join(',')];
                }
                return [key, value];
            })
        );
    }, [filterParams]);

    const {
        data: { cats = [], totalCount } = {},
        error,
        isLoading
    } = useGetCatsQuery(params);

    let itemsPerPage = Math.ceil((totalCount || 0) / countCart);

    const handlePageChange = (event: PageChangeEvent) => {
        setSelectedPage(event.selected);

        window.scrollTo({
            top: catalogRef.current ? catalogRef.current.offsetTop : 0,
            behavior: 'smooth'
        });
    };
    
    return (
        <div ref={catalogRef}>
            <Filter />
            
            {
                error
                    ? <Text size='l' className={styles.error}>
                        Сервер временно недоступен. Пожалуйста, обновите страницу или попробуйте позже.
                    </Text>
                    : <Stack
                        gap="32" justify='between'
                        className={styles.catlist}
                    >
                        <CatList 
                            cats={cats} 
                            isLoading={isLoading} 
                            skeletons={6}
                            isCatalog
                        />
                    </Stack>
            }
            {
                totalCount > 0 && 
                <Stack justify='center'>
                    <ReactPaginate 
                        nextLabel=">"
                        previousLabel="<"
                        pageCount={itemsPerPage}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={3}
                        forcePage={selectedPage}
                        onPageChange={handlePageChange}
                        containerClassName={styles.container}
                        pageClassName={styles.page}
                        pageLinkClassName={styles.link}
                        previousClassName={styles.previous}
                        nextClassName={styles.next}
                        activeClassName={styles.active}
                        activeLinkClassName={styles.activeLink}
                        disabledClassName={styles.disabled}
                        breakClassName={styles.break}
                    />
                </Stack>
            }
        </div>
    );
};

