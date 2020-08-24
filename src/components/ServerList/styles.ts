import styled from 'styled-components';

export const Container = styled.div`
   grid-area: SL;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: var(--tertiary);
   padding: 11px 0;
   max-height: 100vh;
   overflow-y: scroll;
   
   ::-webkit-scrollBar {
      display: none;
   }
`;

export const Separator = styled.div`
   width: 32px;
   margin-bottom: 8px;
   border-bottom: 2px solid var(--quaternary);
`;