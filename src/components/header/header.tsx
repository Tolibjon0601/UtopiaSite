import headerIcon from "../../assets/icons/header_icon.svg";
import { PiNotepadBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FC ,useContext} from "react";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { AuthContext } from './../../pages/authcontext/authcontext';

const Header: FC = () => {
  const { isLogin, logout } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-between container max-w-[1440px] mx-auto py-[33px] bg-[white]">
      <ul>
        <li>
          <Link to="/"> <img src={headerIcon} alt="img" /></Link>
        </li>
      </ul>
      <ul className="flex gap-[70px] items-center">
        <li>
          <a href="#" className="flex flex-col text-2xl font-medium text-primary">
            +998 99 880 80-80<span className="text-right text-[12px] font-light">Тех. поддержка</span>
          </a>
        </li>
        <li >
          <a href="#" className="font-medium text-[14px] text-primary py-[15px] px-[18px] bg-secondary rounded-md">Разместить объявление</a>
        </li>
        <li className="flex items-center gap-5">
          <PiNotepadBold size={24} />
          <FaRegHeart size={24} />
{isLogin?(
<button onClick={logout}><IoPerson size={24} />
</button>
):(<Link to="/login"> <IoPersonOutline size={24} /></Link>)}

        </li>
        <li>
          <select id="languages" className="p-3 bg-[#f3f3f3] rounded-md">
            <option value="volvo">Py</option>
            <option value="saab">Uz</option>
            <option value="opel">Eng</option>

          </select>

        </li>
      </ul>
    </div>
  );
};

export default Header;
