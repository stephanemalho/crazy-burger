import React, { useContext } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { toast } from "react-toastify";

import Logo from "../../../reusableUI/Logo";
import { logo } from "../../../../assets/images";
import ToggleButton from "../../../reusableUI/ToggleButton";
import UserProfile from "./Profile";
import ToastAdmin from "./ToastAdmin";
import OrderContext from "../../../context/OrderContext";
import { NavBarStyled } from "../../../../styled";
import { activedModeAdmin, activer, altLogo, desactiver, helloWorld, userInfoMessage } from "../../../../utils/variables";

function NavBar({ userName, handleLogin }) {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);


  const displayNotification = () => {
    if (!isModeAdmin) {
      toast.info(activedModeAdmin, {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavBarStyled>
      <Logo
        props={<img src={logo} alt={altLogo} />}
        onClick={() => {
          window.location.reload();
        }}
        className={"orderLogo"}
      />
      <ToggleButton
        isChecked={isModeAdmin}
        labelIfUnchecked={activer}
        labelIfChecked={desactiver}
        className={"toggleButton"}
        onToggle={displayNotification}
      />
      <UserProfile
        sayHi={helloWorld}
        label={userInfoMessage.disconnect}
        userName={userName}
        onClick={handleLogin}
        className={"userBox"}
        Icon={<BsPersonCircle className="icon" />}
      />
      <ToastAdmin />
    </NavBarStyled>
  );
}

export default NavBar;
