import styled from 'styled-components';
import { FaHashtag } from 'react-icons/fa';

export const Container = styled.div`
   grid-area: CI;
   display: flex;
   align-items: center;
   padding: 0 17px;
   background-color: var(--primary);
   box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
   z-index: 2;
`;

export const HashtagIcon = styled(FaHashtag)`
   color: var(--symbol);
   height: 24px;
   width: 24px;
`;
export const Title = styled.h1`
   margin-left: 9px;
   font-size: 16px;
   font-weight: bold;
   color: var(--white);
`;

export const Separator = styled.div`
   height: 24px;
   width: 1px;
   background-color: var(--white);
   margin: 0 13px;   
   opacity: 0.2;
`;

export const Description = styled.span`
   font-size: 15px;
   color: var(--gray);
`;