import styled from 'styled-components';

import { RiSettings5Fill } from 'react-icons/ri';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdHeadset } from 'react-icons/io';

export const Container = styled.div`
   grid-area: UI;
   display: flex;
   background-color: var(--quaternary);
   align-items: center;
   justify-content: space-between;
   padding: 10px;
   box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
   display: flex;
   align-items: center;

`;

export const Avatar = styled.div`
   width: 32px;
   height:32px;
   border-radius: 50%;
   background-color: var(--gray);
`;

export const UserData = styled.div`
   margin-left: 8px;
   display: flex;
   flex-direction: column;

   > strong {
      font-size: 13px;
      font-weight: bold;
      color: var(--white);
      display: block;
   }  

   > span {
      color: var(--gray);
      font-size: 13px;
   } 
`;

export const Icons = styled.div`
   display: flex;
   align-items: center;
   
   > svg:not(:first-child) {
      margin-left: 7px;
   }
`;

export const MicIcon = styled(FaMicrophone)`
   color: var(--white);
   width: 20px;
   height: 20px;
   opacity: 0.7;
   cursor: pointer;
   transition: opacity 0.2s;

   &:hover {
      opacity: 1;
   }
`;

export const HeadphoneIcon = styled(IoMdHeadset)`
   color: var(--white);
   width: 20px;
   height: 20px;
   opacity: 0.7;
   cursor: pointer;
   transition: opacity 0.2s;

   &:hover {
      opacity: 1;
   }

`;

export const SettingsIcon = styled(RiSettings5Fill)`
   color: var(--white);
   width: 20px;
   height: 20px;
   opacity: 0.7;
   cursor: pointer;
   transition: opacity 0.2s;

   &:hover {
      opacity: 1;
   }
`;