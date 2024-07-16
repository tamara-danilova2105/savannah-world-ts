import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { MouseEvent } from "react";
import styles from './ListBox.module.scss';
import { Checkbox } from "../CheckBox/CheckBox";
import { arrowDownIcon, arrowUpIcon } from "@/shared/assets/svg/arrowIcons";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ListBoxProps {
    className?: string;
    filter: string;
    options: string[];
    selected: string | string[];
    changeSelect: (option: string) => void;
    badge?: boolean;
}

export const ListBox = (props: ListBoxProps) => {
    const {
        className,
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
        <Listbox value={selected}>
            {({ open }) => (
                <>
                    <ListboxButton
                        className={classNames(styles.button, {}, [className])}
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
                                : null
                        }
                    </ListboxButton>

                    <ListboxOptions
                        className={classNames(styles.options, {}, [className])}
                        anchor="bottom"
                    >
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
