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
import UserProfileModal from "@/components/Modals/UserProfile";

interface SettingModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
}

const SettingModal = ({ isOpen, onOpen, onOpenChange }: SettingModalProps) => {
    const [profileModalOpen, setProfileModalOpen] = React.useState(false);
    const [changePassword, setChangePassword] = React.useState(false);
    const [currentPassword, setCurrentPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [confirmNewPassword, setConfirmNewPassword] = React.useState("");

    const handlePasswordChange = () => {
        // Add logic here to handle password change
        console.log("Current Password:", currentPassword);
        console.log("New Password:", newPassword);
        console.log("Confirm New Password:", confirmNewPassword);
        // Reset input fields and close password change section
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        setChangePassword(false);
    };

    const handleClosePasswordChange = () => {
        // Reset input fields and close password change section
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        setChangePassword(false);
    };

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 m-auto my-4">
                                <h1 className="text-2xl text-center">Settings</h1>
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col justify-center item-center gap-4">
                                    {changePassword ? (
                                        <>
                                            <Input
                                                type="password"
                                                placeholder="Current Password"
                                                value={currentPassword}
                                                onChange={(e) => setCurrentPassword(e.target.value)}
                                            />
                                            <Input
                                                type="password"
                                                placeholder="New Password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                            />
                                            <Input
                                                type="password"
                                                placeholder="Confirm New Password"
                                                value={confirmNewPassword}
                                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                            />
                                            <div className="flex justify-center">
                                                <Button
                                                    onClick={handlePasswordChange}
                                                    className="mr-2 bg-blue-600 text-white hover:bg-blue-700"
                                                >
                                                    Save
                                                </Button>
                                                <Button
                                                    onClick={handleClosePasswordChange}
                                                    className="bg-gray-600 text-white hover:bg-gray-700"
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <Button
                                                onClick={() => setChangePassword(true)}
                                                className="m-auto w-fit bg-gray-200 text-gray-800 hover:bg-gray-300"
                                            >
                                                Change Password
                                            </Button>
                                            <Button
                                                onClick={() => {} /* delete account logic */}
                                                className="m-auto w-fit bg-rose-600 text-white hover:bg-red-700"
                                            >
                                                Delete Account
                                            </Button>
                                            <Button
                                                onClick={() => setProfileModalOpen(true)}
                                                className="m-auto w-fit bg-blue-600 text-white hover:bg-blue-700"
                                            >
                                                Profile Setting
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </ModalBody>
                            <ModalFooter className="mt-4">
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
            <UserProfileModal
                isOpen={profileModalOpen}
                onOpen={() => setProfileModalOpen(true)}
                onOpenChange={() => setProfileModalOpen(false)}
            />
        </>
    );
};

export default SettingModal;
