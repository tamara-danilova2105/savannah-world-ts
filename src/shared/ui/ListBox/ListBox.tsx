import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useState } from "react";
import styles from './ListBox.module.scss';

interface ListBoxProps {
    filter: string;
    options: string[];
}

export const ListBox = ({ filter, options }: ListBoxProps) => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <Listbox
            value={selected}
            onChange={setSelected}
        >
            <ListboxButton
                className={styles.button}
            >
                {filter}
            </ListboxButton>
            <ListboxOptions className={styles.options} anchor="bottom">
                {options.map(option => (
                    <ListboxOption
                        key={option}
                        value={option}
                        className={styles.option}
                    >
                        {option}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );
};
