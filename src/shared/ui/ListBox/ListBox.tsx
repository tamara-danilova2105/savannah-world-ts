import { memo, MouseEvent } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { Checkbox } from "../CheckBox/ui/CheckBox";
import { arrowDownIcon, arrowUpIcon } from "@/shared/assets/svg/arrowIcons";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Badge } from "../Badge";
import styles from './ListBox.module.scss';

interface ListBoxProps {
    className?: string;
    filter: string;
    options: string[];
    selected: string | string[];
    changeSelect: (option: string) => void;
    badge?: boolean;
};

export const ListBox = memo((props: ListBoxProps) => {
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
                                ? <Badge count={selected.length} className={styles.position} />
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
});
