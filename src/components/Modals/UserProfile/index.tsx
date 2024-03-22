import React, { useState } from "react";
import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";

interface UserProfileModalProps {
	isOpen: boolean;
	onOpen: () => void;
	onOpenChange: () => void;
}

const UserProfileModal = ({
	isOpen,
	onOpen,
	onOpenChange,
}: UserProfileModalProps) => {
	const [editingUsername, setEditingUsername] = useState(false);
	const { data: session }: any = useSession();
	const [username, setUsername] = useState<string>(
		session?.user?.["Username"] || "Your Username"
	);

	const [newProfileImage, setNewProfileImage] = useState<string | null>(
		session?.user?.["ProfilePic"] || null
	);

	const handleEditClick = (fieldName: string) => {
		switch (fieldName) {
			case "username":
				setEditingUsername(true);
				break;

			default:
				break;
		}
	};

	const handleSaveClick = (fieldName: string) => {
		switch (fieldName) {
			case "username":
				setEditingUsername(false);
				break;
			default:
				break;
		}
	};

	const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				const dataURL = reader.result as string;
				setNewProfileImage(dataURL);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1 m-auto">
							<h1 className="text-2xl text-center">Your Profile</h1>
						</ModalHeader>
						<ModalBody>
							<div>
								<div className="flex flex-col justify-center items-center my-5">
									<Avatar src={newProfileImage || undefined} size="lg" />
									<input
										type="file"
										accept="image/*"
										onChange={handleProfileImageChange}
										className="hidden"
										id="customFileInput"
									/>
									<label
										htmlFor="customFileInput"
										className=" text-xs bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 my-4 rounded cursor-pointer"
									>
										Edit Profile Image
									</label>
								</div>

								<div className="flex flex-col">
									<div className="flex items-center justify-around my-3">
										{editingUsername ? (
											<Input
												label="Username"
												value={username}
												onChange={handleUsernameChange}
												placeholder="Username"
											/>
										) : (
											<>
												<div>{username}</div>
												<Button
													onClick={() => handleEditClick("username")}
													className="text-xs bg-gray-100 text-gray-800 hover:bg-gray-200 ml-2"
												>
													Edit
												</Button>
											</>
										)}
										{editingUsername && (
											<Button
												onClick={() => handleSaveClick("username")}
												className="bg-gray-600 text-white hover:bg-gray-700 mx-4"
											>
												Save
											</Button>
										)}
									</div>

									<Button
										className="block w-2 mt-4 m-auto border-1 bg-white text-black hover:bg-gray-300"
										onClick={() => signOut()}
									>
										Logout
									</Button>
								</div>
							</div>
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
};

export default UserProfileModal;
