import { ReactNode, useState } from "react";
import { Modal } from "../ui/Modal/Modal";

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const changeOpen = async () => {
        setIsOpen(p => !p);
    };

    const drawModal = (children: ReactNode) => {
        return (
            isOpen &&
            <Modal setIsOpen={setIsOpen}>
                {children}
            </Modal>
        );
    };

    return [changeOpen, drawModal, isOpen];
};