import styled from 'styled-components';


export const Container = styled.div`
   grid-area: UL;
   display: flex;
   flex-direction: column;
   padding: 3px 6px 0 16px;
   background-color: var(--secondary);
   max-height: calc(100vh - 46px);
   overflow: scroll;

   ::-webkit-scrollbar {
      width: 4px;
   }

   ::-webkit-scrollbar-thumb {
      background-color: var(--tertiary);
      border-radius: 4px;
   }

   ::-webkit-scrollbar-track {
      background-color: var(--secondary);
   }
`;

export const Role = styled.span`
   margin-top: 20px;
   text-transform: uppercase;
   font-size: 12px;
   font-weight: 500;
   color: var(--gray);
`;

export const User = styled.div`
   display: flex;
   margin-top: 5px;
   align-items: center;
   cursor: pointer;
   border-radius: 4px;
   padding: 5px;
   background: transparent;
   transition: background .2s;

   &:hover {
      background-color: rgba(255, 255, 255, 0.1);
   }

   > strong {
      margin-left: 13px;
      color: var(--white);
      opacity: 0.7;
      font-weight: 500;
      /* 
         white-space: nao quebrar linha
         text-overflow: texto faltando vai colocar os ...
       */
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
   }

   > span {
      margin-left: 8px;
      background-color: var(--discord);  
      color: var(--white);
      border-radius: 4px;
      padding: 4px 5px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 11px;
   }
`;

export const Avatar = styled.div`
   flex-shrink: 0; /* para nao amassar o avatar */
   width: 32px;
   height: 32px;
   background-color: var(--primary);
   border-radius: 50%;

   &.bot {
     background-color: var(--mention-detail); 
   }
`;