import React from 'react';

import { Button } from './styles';
import Logo from '../../assets/Logo.svg';

export interface Props {
   selected?: boolean;
   mentions?: number;
   isHome?: boolean;
   hasNotifications?:boolean;

}

const ServerButton: React.FC<Props> = ({ hasNotifications, isHome, mentions, selected }) => {
   return(
      <Button
         isHome={isHome}
         hasNotifications={hasNotifications}
         mentions={mentions}
         className={selected ? 'active' : ''}
      >
         { isHome && (<img src={Logo} alt="Rocketseat"/>)}
      </Button>
   );
}

export default ServerButton;