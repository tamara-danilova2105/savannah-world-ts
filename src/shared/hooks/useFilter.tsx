import { useCallback, useState } from 'react';

const useFilter = () => {
    const [selected, setSelected] = useState<string[]>([]);

    const changeSelect = useCallback((option: string) => {
        setSelected(prevSelected => (
            prevSelected.includes(option)
                ? prevSelected.filter(item => item !== option)
                : [...prevSelected, option]
        ));
    }, []);

    return { selected, changeSelect };
}

export default useFilter;