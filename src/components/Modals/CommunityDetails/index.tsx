"use client";
import { joinCommunity, leaveCommunity } from "@/api";
import { GetUserAPI } from "@/api/authentication";
import {
  Button,
  Chip,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Swal from "sweetalert2";

const CommunityDetails = ({ communityDetails }: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data: session }: any = useSession();
  const [search, setSearch] = useState("");

  const addMember = (communityId: string, username: string) => {
    setSearch("");
    GetUserAPI(search).then((res: any) => {
      if (!res) {
        Swal.fire({
          title: "Error!",
          text: "User not found!",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
      else {
        if(communityDetails.GroupMembers.includes(res["Username"])) {
          Swal.fire({
            title: "Error!",
            text: "User is already a member!",
            icon: "error",
            confirmButtonText: "OK",
          });
          return;
        }
        joinCommunity(communityId, res["Username"]).then((res) => {
          if (res.ok) {
            Swal.fire({
              title: "Success!",
              text: "Member added successfully!",
              icon: "success",
              confirmButtonText: "OK",
            }).then(() => {
              window.location.reload();
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Adding member failed!",
              icon: "error",
              confirmButtonText: "OK",
            });
          }
        });
      }
    });
    
  };

  const removeMember = (communityId: string, username: string) => {
    leaveCommunity(communityId, username).then((res) => {
      if (res.ok) {
        Swal.fire({
          title: "Success!",
          text: "Member removed successfully!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Removing member failed!",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    });
  };

  return (
    <>
      <Chip
        onClick={onOpen}
        size="lg"
        className="bg-white w-full cursor-pointer"
      >
        {communityDetails?.CommunityName}
      </Chip>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-xl font-bold mb-4 text-center">
                  Community Details
                </h2>
              </ModalHeader>
              <ModalBody>
                <div className="mb-4">
                  <Image
                    width="80"
                    height="80"
                    src={
                      communityDetails?.CommunityImage || "/images/default.png"
                    }
                    alt="Community"
                    className="mx-auto mb-4"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h3 className="text-lg font-bold text-center">
                    {communityDetails?.CommunityName}
                  </h3>
                  <p className="text-sm text-center">
                    Group Created: {communityDetails?.CreatedDate.split("T")[0]}
                  </p>
                </div>
                <p className="font-bold">Members:</p>
                <ul className="list-disc ml-5 mb-4">
                  {communityDetails?.GroupMembers.map(
                    (user: any, index: number) => (
                      <li
                        key={index}
                        className="flex justify-between items-center"
                      >
                        {user}
                        <span
                          className="cursor-pointer"
                          onClick={() =>
                            removeMember(communityDetails.CommunityId, user)
                          }
                        >
                          ✕
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </ModalBody>
              <ModalFooter>
                <div className="bg-white p-6 w-full">
                  <div className="flex flex-col space-y-2">
                    <div className="flex my-2 justify-center items-center gap-2 flex-row">
                    <Input
                        value={search}
                        label="Email"
                        radius="lg"
                        classNames={{
                          base: "w-3/16",
                          label: "text-black/50 dark:text-white/90",
                          input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                          ],
                          innerWrapper: "bg-transparent",
                          inputWrapper: [
                            "backdrop-blur-xl",
                            "backdrop-saturate-200",
                            "hover:bg-default-200/70",
                            "dark:hover:bg-default/70",
                            "group-data-[focused=true]:bg-default-200/50",
                            "dark:group-data-[focused=true]:bg-default/60",
                            "!cursor-text",
                          ],
                        }}
                        placeholder="Enter the email..."
                        startContent={
                          <FiSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                        }
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    <Button 
                    onPress={() => addMember(communityDetails.CommunityId, search)}
                    className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                      Add User
                    </Button>
                    </div>
                    <Button 
                    onPress={() => removeMember(communityDetails.CommunityId, session?.user?.["Username"])}
                    className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                      Leave Community
                    </Button>
                  </div>
                  <Button
                    onPress={onClose}
                    className="mt-4 bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded text-center w-full"
                  >
                    Close
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommunityDetails;
