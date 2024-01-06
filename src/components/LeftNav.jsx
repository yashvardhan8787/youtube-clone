import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/contextApi";
import { categories } from "../../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";

const LeftNav = () => {
  const navigate = useNavigate();
  const { setSelectCategroies, selectCategories, mobileMenu } =
    useContext(Context);
  const clickHandler = (name, type) => {

   switch (type) {
    case 'category':
      return setSelectCategroies(name);
    case 'home':
        return setSelectCategroies(name);
    case 'menu':
        return false;
    default:
      break;
   }
  };
  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-1 bg-black absolute md:relative z-10 translate-x-[-240px] transition-all md:translate-x-0 ${mobileMenu ? 'translate-x-0':""}` }>
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                cname={`${
                  selectCategories === item.name ? "bg-white/[0.15]" : ""
                }`}
              ></LeftNavMenuItem>
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">. clone by @yash</div>
      </div>
    </div>
  );
};

export default LeftNav;
