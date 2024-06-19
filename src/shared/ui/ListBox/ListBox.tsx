import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { MouseEvent, useState } from "react";
import styles from './ListBox.module.scss';
import { Checkbox } from "../CheckBox/CheckBox";

interface ListBoxProps {
    filter: string;
    options: string[];
}

export const ListBox = ({ filter, options }: ListBoxProps) => {

    const [selected, setSelected] = useState<string[]>([]);

    const handleOptionClick = (option: string, event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();

        setSelected(
            selected.includes(option)
                ? selected.filter(item => item !== option)
                : [...selected, option]
        )
    };

    return (
        <Listbox
            value={selected}
            onChange={setSelected}
        >
            <ListboxButton
                className={styles.button}
            >
                {filter}
                {
                    selected.length > 0 &&
                    <div className={styles.badge}>
                        {selected.length}
                    </div>
                }
            </ListboxButton>

            <ListboxOptions className={styles.options} anchor="bottom">
                {options.map(option => (
                    <ListboxOption
                        key={option}
                        value={option}
                        className={styles.option}
                        onClick={(e) => handleOptionClick(option, e)}
                    >
                        <Checkbox
                            nameField={option}
                            idInput={option}
                            checked={selected.includes(option)}
                        />
                        {option}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );
};
