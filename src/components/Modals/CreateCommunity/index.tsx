import React, { useState } from "react";
import { createCommunity } from "@/api";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@nextui-org/react";

type FormData = {
	communityName: string;
};

const AddCommunityModal = ({ isOpen, onOpen, onOpenChange }: ModalProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
		createCommunity(data.communityName).then((res) => {
			if (res.ok) {
				reset();
				Swal.fire({
					title: "Success!",
					text: "Community created successfully!",
					icon: "success",
					confirmButtonText: "OK",
				}).then(() => {
					window.location.reload();
				});
			} else {
				Swal.fire({
					title: "Error!",
					text: "Community creation failed!",
					icon: "error",
					confirmButtonText: "OK",
				});
			}
		});
	};

	return (
		<>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				scrollBehavior="inside"
				className="bg-primary text-gray-300"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1 m-auto">
								Create Community
							</ModalHeader>
							<form onSubmit={handleSubmit(onSubmit)}>
								<ModalBody>
									<label htmlFor="communityName">Community Name</label>
									<Input
										type="text"
										id="communityName"
										aria-labelledby="communityName"
										aria-describedby="Enter Community Name"
										{...register("communityName", {
											required: "This is required",
											maxLength: {
												value: 20,
												message: "Max length is 20",
											},
											minLength: {
												value: 2,
												message: "Min length is 2",
											},
										})}
										classNames={{
											label: ["!text-gray-300"],
											input: [
												"bg-transparent",
												"!text-gray-300",
												"placeholder:text-gray-300",
											],
											innerWrapper: ["bg-transparent"],
											inputWrapper: [
												"bg-accent",
												"group-data-[focus]:bg-accent/80",
												"group-data-[hover]:bg-accent/80",
												"!cursor-text",
											],
											base: ["bg-transparent", "text-gray-300", "p-2"],
										}}
									/>
									<div className="text-red-500">
										{errors.communityName?.message?.toString()}
									</div>
								</ModalBody>

								<ModalFooter>
									<Button
										type="submit"
										onPress={onClose}
										className="bg-secondary text-gray-300"
									>
										Create
									</Button>
									<Button
										type="reset"
										className="bg-accent text-gray-300"
										onPress={() => {
											reset();
										}}
									>
										Reset
									</Button>
								</ModalFooter>
							</form>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddCommunityModal;
