import { getCommunities } from "@/api";
import React, { useEffect, useState } from "react";
import CommunityItem from "../CommunityItem";

interface Community {
  Image: string;
  CommunityName: string;
  LastMessage: string;
  Time: string;
}

const CommunityArea = () => {
  const [communitiesData, setCommunitiesData] = useState<Community[]>([]);

  useEffect(() => {
    getCommunities("Garv").then((res) => {
      setCommunitiesData(res);
      console.log(res);
    }),
      [];
  }, [setCommunitiesData]);

  return (
    <>
      {communitiesData.map((community: Community) => (
        <CommunityItem imageSrc={community.Image} name={community.CommunityName} lastMessage={community.LastMessage} time={community.Time} />
      ))}
    </>
  );
};

export default CommunityArea;
