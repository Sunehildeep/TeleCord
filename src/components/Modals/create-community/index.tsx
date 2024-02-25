import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  InputItm,
  Label,
  ModalBackground,
  ModalContainer,
  ModalTitle,
} from "./styles";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCommunityModal = ({ showModal, setShowModal }: ModalProps) => {
  const [communityName, setCommunityName] = useState("");
  const [members, setMembers] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCommunityName("");
    setMembers("");
    setShowModal(false);
  };

  const closeModal = () => {
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
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="communityName">Community Name</Label>
                <InputItm
                  type="text"
                  id="communityName"
                  value={communityName}
                  onChange={(e) => setCommunityName(e.target.value)}
                  aria-labelledby="communityName"
                  aria-describedby="Enter Community Name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="members">Members (comma-separated)</Label>
                <InputItm
                  type="text"
                  id="members"
                  value={members}
                  onChange={(e) => setMembers(e.target.value)}
                  aria-labelledby="members"
                  aria-describedby="Add Members by writing their username separated by comma"
                  required
                />
              </FormGroup>
              <Button type="submit">Create</Button>
            </Form>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
};

export default AddCommunityModal;
