import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  InlineError,
  InputItm,
  Label,
  ModalBackground,
  ModalContainer,
  ModalTitle,
} from "./styles";
import { createCommunity } from "@/api";
import SweetAlert from "../Swal";
import { SubmitHandler, useForm } from "react-hook-form";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormData = {
  communityName: string;
  members: string;
};

const AddCommunityModal = ({ showModal, setShowModal }: ModalProps) => {
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  
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
        setAlertType("success");
        reset();
        setTimeout(() => {
          setAlertType(null);
        }, 1000);
      } else {
        setAlertType("error");
      }
    });
    setShowModal(false);
  };

  const closeModal = () => {
    setAlertType(null);
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <ModalBackground
          onClick={closeModal}
          aria-hidden="true"
          onKeyDown={(e) => e.key === "Escape" && closeModal()}
        >
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Create Community</ModalTitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label htmlFor="communityName">Community Name</Label>
                <InputItm
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
                <InlineError>
                  {errors.communityName?.message?.toString()}
                </InlineError>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="members">Members (comma-separated)</Label>
                <InputItm
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
                <InlineError>{errors.members?.message?.toString()}</InlineError>
              </FormGroup>
              <Button type="submit">Create</Button>
              <Button type="reset">Reset</Button>
            </Form>
          </ModalContainer>
        </ModalBackground>
      )}
      {alertType && alertType !== null && (
        <SweetAlert
          title={alertType === "success" ? "Success" : "Error"}
          text={
            alertType === "success"
              ? "Community created successfully!"
              : "Failed to create community"
          }
          type={alertType}
          confirmButtonText="OK"
        />
      )}
    </>
  );
};

export default AddCommunityModal;
