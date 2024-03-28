import { receiveMessage, sendMessage } from "@/api/socket-io";
import { Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Avatar } from "@nextui-org/react";
import { FaLanguage } from "react-icons/fa6";
import { ImAttachment } from "react-icons/im";
import { FaFile, FaFileAudio, FaSearch  } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { getChats, saveChatMessage, saveImageToS3, TextToAudio } from "@/api";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

const ChatArea = ({ communityId }: { communityId: string }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [chats, setChats] = useState([] as string[]);
  const [files, setFiles] = useState<File[] | null>(null);
  const [showCommunityDetails, setShowCommunityDetails] = useState(false);
  const { data: session }: any = useSession();

  const showUserNameChat = session?.user?.Username.charAt(0).toUpperCase();

  useEffect(() => {
    getChats(communityId).then((res) => {
      setChats(res);
    });
  }, []);

  useEffect(() => {
    receiveMessage((msg: any) => {
      setChats([...chats, msg]);
    });
  }, [chats]);

  const handleMessageChange = (event: any) => {
    setCurrentMessage(event.target.value);
  };

  const handleSendMessage = () => {
    const msg: SendMessage = {
      Message: currentMessage,
      CommunityId: communityId,
      Username: session?.user?.["Username"],
      Time: new Date(),
    };
    console.log(msg);
    try {
      if (currentMessage.length === 0) return;
      saveChatMessage(msg);
      sendMessage(msg);
      setCurrentMessage("");
    } catch (err) {
      console.error("Error sending message: ", err);
      Swal.fire({
        title: "Error!",
        text: "There was a problem sending your message",
        icon: "error",
        confirmButtonText: "Try again",
      });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFiles(Array.from(event.target.files));
    }
  };

  const translateMessage = () => {
    // Translate message
  };

  const handleAudio = async (currentMessage : String) => {
    await TextToAudio(currentMessage);
  };

  const handleSendFiles = async () => {
    if (files && files.length > 0) {
      try {
        const promises = files.map(async (file) => {
          // Send a request to your backend to save the file to S3
          const response = await saveImageToS3(file);

          // Parse the response to get the filename
          const fileUrl = response.fileUrl;

          // Create a message object including the filename
          const msg: SendMessage = {
            Message: `file:${fileUrl}`,
            CommunityId: communityId,
            Username: session?.user?.["Username"],
            Time: new Date(),
          };

          // Save the chat message with the filename included
          saveChatMessage(msg);

          // Send the message to other users
          sendMessage(msg);
          setCurrentMessage("");
        });

        // Wait for all file uploads to finish
        await Promise.all(promises);

        // Clear the files state after successful upload
        setFiles(null);
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: "There was a problem sending your files",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => {
      if (prevFiles) {
        const newFiles = [...prevFiles];
        newFiles.splice(index, 1);
        return newFiles;
      }
      return null;
    });
  };

  const formatDate = (date: any) => {
    const now: any = new Date();
    const diff = now - date;
    const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
      return "Today at " + formatTime(date);
    } else if (diffInDays === 1) {
      return "Yesterday at " + formatTime(date);
    } else {
      // Format date as you desire
      return date.toLocaleDateString() + " at " + formatTime(date);
    }
  };

  const formatTime = (date: any) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert midnight (0 hours) to 12
    return hours + ":" + minutes + " " + ampm;
  };

  const toggleCommunityDetails = () => {
    setShowCommunityDetails(!showCommunityDetails);
  };


  const [communityDetails, setCommunityDetails] = useState({
    name: "Cloud ML Group 6",
    createdDate: "2024-01-01",
    users: ["Garv", "Minyoung", "Alix","Sunehildeep", "Huyen Anh"],
  });


  return (
    
    <div className="w-full h-full flex flex-col">
    
      <div className="bg-gray-300 py-[14.5px] px-3 items-center justify-between flex">
      <div className="flex-1 flex items-center max-w-xs">
      <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<FaSearch size={28} />}
          type="search"
        />
        </div>
        
        {/* <div></div> */}

        {/*HUYEN ANH NHAP*/}
          <div onClick={toggleCommunityDetails} className="cursor-pointer text-white bg-gray-300  flex-1 text-center ">
          {communityDetails.name} 
          </div>

        {showCommunityDetails && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/4">
            <h2 className="text-xl font-bold mb-4 text-center">Group Details</h2>
            <div className="mb-4">
              <img src="../../images/default.png" alt="Group" className="mx-auto mb-4" style={{ width: '80px', height: '80px' }} />
              <h3 className="text-lg font-bold text-center">{communityDetails.name}</h3>
              <p className="text-sm text-center">Group Created: {communityDetails.createdDate}</p>
            </div>
            <p className="font-bold">Members:</p>
            <ul className="list-disc ml-5 mb-4">
              {communityDetails.users.map((user, index) => (
                <li key={index} className="flex justify-between items-center">
                  {user}
                  <span className="cursor-pointer">✕</span> 
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-2">
              <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Add User</button>
              <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Exit Group</button>
            </div>
            <button onClick={toggleCommunityDetails} className="mt-4 bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded text-center w-full">
              Close
            </button>
          </div>
        </div>
        )}
        <div className="flex-1 flex justify-end">


        {/* Translate button */}

        <Button
          aria-label="Translate message"
          title="Translate message"
          className="text-sm text-white bg-gray-600 hover:bg-gray-700 py-2 px-3"
          onClick={translateMessage}
        >
          <FaLanguage size={32} />
        </Button>
     
      </div>
      </div>

      {/* Messaging area */}
      <div className="p-4 w-full h-full overflow-y-auto">
        {chats.length > 0 ? (
          chats.map((chat: any, index: number) => {
            return (
              <div key={index} className="flex flex-row gap-2 my-4">
                <div className="text-black my-auto">
                  <Avatar
                    name={showUserNameChat}
                    className="w-12 h-12 text-tiny"
                  />
                </div>
                <div className="flex flex-row justify-start items-start w-full">
                  <div>
                    <span className="text-gray-500">{chat.Username}</span>
                    <div className="p-2 bg-primary rounded-lg text-white">
                      {chat.Message.startsWith("file:") ? (
                        chat.Message.includes(".pdf") ||
                        chat.Message.includes(".docx") ? (
                          <a
                            href={chat.Message.substring(5)}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white"
                          >
                            <div key={index} className="flex gap-2">
                              <span className="text-white flex flex-row gap-2 items-center justify-start">
                                <FaFile />
                                {chat.Message.substring(46)}
                                <MdFileDownload />
                              </span>
                            </div>
                          </a>
                        ) : (
                          <img
                            src={chat.Message.substring(5)}
                            alt="File"
                            className="w-full"
                          />
                        )
                      ) : (
                        <>
                          <div className="flex items-center justify-center">
                            <div className="p-2 bg-primary rounded-lg text-white flex-grow">
                              {chat.Message}
                            </div>
                            <div className="ml-2 cursor-pointer">
                              <FaFileAudio onClick={() => handleAudio(chat.Message)}/>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="mx-4">
                    <span className="text-gray-500">
                      {formatDate(new Date(chat.Time))}
                    </span>
                  </div>
                </div>
                <div className="flex-grow"></div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full p-4">
            <h1 className="text-2xl text-center font-light">
              Welcome to Telecord
            </h1>
            <h2 className="text-lg font-light">
              Start a chat with your friends and family
            </h2>
          </div>
        )}
      </div>
      <div className="flex p-4 gap-2 w-full flex-col">
        {files && files.length > 0 && (
          <div className="flex gap-2 flex-wrap bg-gray-200 p-2 rounded-lg">
            {files.map((file: File, index: number) => (
              <div key={index} className="flex gap-2">
                <span className="text-gray-500 flex flex-row gap-2 items-center justify-start">
                  <FaFile />
                  {file.name}
                </span>
                <span
                  className="text-gray-500 cursor-pointer"
                  onClick={() => removeFile(index)}
                >
                  &#10005;
                </span>
              </div>
            ))}
          </div>
        )}
        <Input
          type="url"
          label="Message"
          value={currentMessage}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
              if (files) handleSendFiles();
            }
          }}
          onChange={handleMessageChange}
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-md",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Type to message..."
          endContent={
            <div className="flex items-center m-auto justify-center">
              <label htmlFor="file-upload">
                <ImAttachment className="text-[22px] text-gray-500 cursor-pointer" />
              </label>
              <Input
                id="file-upload"
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ChatArea;
