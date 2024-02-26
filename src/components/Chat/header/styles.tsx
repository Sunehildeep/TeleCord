import styled from "styled-components";
import { colors } from "@/theme/variables/colors";
// import { FaRegUserCircle } from "react-icons/fa";
// import { CiCirclePlus } from "react-icons/ci";
// import { IoIosSettings } from "react-icons/io";

export const HeaderContainer = styled.div`
    padding: 25px;
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.lightGrey};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    justify-content: space-between;
`;

export const HeaderItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Icon = styled.div`
    font-size: 26px;
    cursor: pointer;
    margin-right: 20px;
    transition: transform 0.3s ease;

    &:last-child {
        margin-right: 0;
    }

    &:not(:first-child):hover {
        transform: scale(1.2);
        transform: rotate(-90deg);
    }
`;

// export const UserIcon = styled(FaRegUserCircle)`
//     font-size: 24px;
//     cursor: pointer;
// `;

// export const AddIcon = styled(CiCirclePlus)`
//     font-size: 24px;
//     cursor: pointer;
// `;

// export const SettingIcon = styled(IoIosSettings)`
//     font-size: 24px;
//     cursor: pointer;
// `;

