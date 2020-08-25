import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface Props {
   nickname: string;
   isBot?: boolean;
}

const UserRow: React.FC<Props>= ({ nickname, isBot }) => {
   return(
      <User>
         <Avatar className={ isBot ? 'bot' : ''} />
         <strong>{nickname}</strong>

         { isBot && <span>BOT</span>}
      </User>
   );
}

const UserList: React.FC = () => {
  return(
     <Container>
        <Role>Disponível - 1</Role>
        <UserRow nickname="Raphael Capeto" />

        <Role>Offline - 18</Role>
        <UserRow nickname="Diego" isBot/>
        <UserRow nickname="Lucas" />
        <UserRow nickname="João" />
        <UserRow nickname="Gabriel" />
        <UserRow nickname="Thamires" />
        <UserRow nickname="Jennifer" />
        <UserRow nickname="Gabriela" />
        <UserRow nickname="Pedro" />
        <UserRow nickname="Fernando" />
        <UserRow nickname="Bruno" />
        <UserRow nickname="Jessica" />
        <UserRow nickname="Bruna" />
        <UserRow nickname="Vinicius" />
        <UserRow nickname="Roberto" />
        <UserRow nickname="Arthur" />
        <UserRow nickname="Beatriz" />
        <UserRow nickname="Rafael" />
        <UserRow nickname="Antônio" />
     </Container>
  );
}

export default UserList;