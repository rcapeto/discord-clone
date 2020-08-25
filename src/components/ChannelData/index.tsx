import React, { useRef, useEffect } from 'react';

import { Container, Messages, Input, InputIcon, InputWrapper } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
   const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

   useEffect(() => {
      const div = messagesRef.current;

      if(div) {
         div.scrollTop = div.scrollHeight;
      } 

   }, []);

  return(
     <Container>
        <Messages ref={messagesRef}>

         {Array.from(Array(15).keys()).map(n => (
            <ChannelMessage 
               author="Raphael Capeto"
               date="20/02/2021"
               content="Hoje é meu aniversário"
               key={n}
            />
         ))}
           
            
            <ChannelMessage 
               author="Diego"
               date="20/02/2021"
               hasMention
               isBot
               content={
                  <>
                     <Mention>@Raphael Capeto</Mention>, me carrega no COD?
                  </>
               }
           />

        </Messages>

        <InputWrapper>
            <Input placeholder="Conversar em #chat-livre" type="text" />
            <InputIcon />
        </InputWrapper>
     </Container>
  );
}

export default ChannelData;