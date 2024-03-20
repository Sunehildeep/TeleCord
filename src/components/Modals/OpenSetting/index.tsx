import React from "react";
import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@nextui-org/react";

const SettingModal = ({ isOpen, onOpen, onOpenChange }: ModalProps) => {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 m-auto">
                            <h1 className="text-2xl text-center">Settings</h1>
                        </ModalHeader>
                        <ModalBody>
                            
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                onClick={onClose}
                                className="bg-gray-600 text-white hover:bg-gray-700"
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}

export default SettingModal;
