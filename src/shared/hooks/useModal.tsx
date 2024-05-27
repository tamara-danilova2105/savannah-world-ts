import { ReactNode, useState } from "react";
import { Modal } from "../ui/Modal/Modal";

type UseModalReturn = [
    () => Promise<void>,
    (children: ReactNode) => JSX.Element | null,
    boolean
];

export const useModal = (): UseModalReturn => {
    const [isOpen, setIsOpen] = useState(false);

    const changeOpen = async () => {
        setIsOpen(p => !p);
    };

    const drawModal = (children: ReactNode): JSX.Element | null => {
        return (
            isOpen 
            ? <Modal setIsOpen={setIsOpen}>
                {children}
            </Modal>
            : null
        );
    };

    return [changeOpen, drawModal, isOpen];
};