import styled from 'styled-components';

import { FaHashtag } from 'react-icons/fa';
import { IoMdPersonAdd } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';


export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   cursor: pointer;
   padding: 5px 3px;
   border-radius: 5px;
   background-color: transparent;
   transition: background-color .2s;

   > div {
      display: flex;
      align-items: center;
   }

   > div span {
      font-size: 15px;
      color: var(--senary);
      margin-left: 5px;
   }

   > div:last-child svg {
      display: none;
   }

   &:hover,
   &.active {
      background-color: var(--quinary);

      > div span {
         color: var(--white);
      }

      > div:last-child svg {
         display: initial;
      }
   }
`;

export const HashtagIcon = styled(FaHashtag)`
   color: var(--symbol);
   width: 20px;
   height: 20px;
`;

export const InviteIcon = styled(IoMdPersonAdd)`
   color: var(--symbol);
   width: 16px;
   height: 16px;
   cursor: pointer;
   transition: color .2s;

   &:hover {
     color: var(--white);
   }

`;

export const SettingsIcon= styled(FiSettings)`
   color: var(--symbol);
   width: 16px;
   height: 16px;
   cursor: pointer;
   transition: color .2s;
   margin-left: 4px;

   &:hover {
     color: var(--white);
   }
`;
