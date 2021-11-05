import User1 from '../../../../assets/User01.png'
import User2 from '../../../../assets/User02.png'
import User3 from '../../../../assets/User03.png'
import User4 from '../../../../assets/User04.png'
import * as U from './UsersIcon.style';


export interface UserIconProps {

    id: number;

}

function UserIcon ({id}: UserIconProps) {
    return <U.IconContainer>

        {

        id === 1&&
        <img src= {User1} alt=""  className = "img" />

        }

        {

        id === 2&&
        <img src= {User2} alt=""  className = "img" />

        }

        {

        id === 3&&
        <img src= {User3} alt=""  className = "img" />

        }

        {

        id === 4&&
        <img src= {User4} alt=""  className = "img" />

        }

    </U.IconContainer>
}

  export default UserIcon