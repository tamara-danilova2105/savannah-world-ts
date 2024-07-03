import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { MouseEvent } from "react";
import styles from './ListBox.module.scss';
import { Checkbox } from "../CheckBox/CheckBox";
import { arrowDownIcon } from "@/shared/assets/svg/arrowDownIcon";
import { arrowUpIcon } from "@/shared/assets/svg/arrowUpIcon";

interface ListBoxProps {
    filter: string;
    options: string[];
    selected: string | string[];
    changeSelect: (option: string) => void;
    badge?: boolean;
}

export const ListBox = (props: ListBoxProps) => {
    const { 
        filter, 
        options, 
        selected, 
        changeSelect,
        badge = false 
    } = props;
    
    const handleOptionClick = (option: string, event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
        changeSelect(option);
    };

    return (
        <Listbox
            value={selected}
            // onChange={setSelected}
        >
            {({ open }) => (
                <>
                    <ListboxButton
                        className={styles.button}
                    >
                        <div className={styles.text}>
                            {filter}
                            {open ? arrowUpIcon() : arrowDownIcon()}
                        </div>
                        {
                            selected.length > 0 && badge
                                ? <div className={styles.badge}>
                                    {selected.length}
                                </div>
                                : <></>
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
                </>
            )}
        </Listbox>
    );
};
