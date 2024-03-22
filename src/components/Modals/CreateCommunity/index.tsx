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
	members: string;
};

const AddCommunityModal = ({ isOpen, onOpen, onOpenChange }: ModalProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
		console.log(data);
		createCommunity(data.communityName, data.members).then((res) => {
			if (res.status === 200) {
				reset();
				Swal.fire({
					title: "Success!",
					text: "Community created successfully!",
					icon: "success",
					confirmButtonText: "OK",
				});
				window.location.reload();
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
									/>
									<div className="text-red-500">
										{errors.communityName?.message?.toString()}
									</div>
									<label htmlFor="members">Members (comma-separated)</label>
									<Input
										type="text"
										id="members"
										aria-labelledby="members"
										aria-describedby="Add Members by writing their username separated by comma"
										{...register("members", {
											required: {
												value: true,
												message: "This is required",
											},
										})}
									/>
									<div className="text-red-500">
										{errors.members?.message?.toString()}
									</div>
								</ModalBody>

								<ModalFooter>
									<Button type="submit" onPress={onClose}>
										Create
									</Button>
									<Button
										type="reset"
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
