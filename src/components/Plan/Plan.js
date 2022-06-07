import { useState } from "react";
import "./plan.scss";
import Cotization from "./Cotization";
import Steps from "./Steps";
import ProfileHeader from "./ProfileHeader";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors/UserSelector";

const Plan = () => {
  const [tab, setTab] = useState("pt");
  const activeTab = (res) => {
    setTab(res);
  };
  const user = useSelector(userSelector);
  const [cents, setCents] = useState(14300);
  const [price, setPrice] = useState(200);
  const toMoney = (count = 0) => {
    let str = count.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return "$ " + str.join(".");
  };

  const increment = () => {
    let count = cents;
    count = count + 100;
    setCents(count);
  };

  const decrement = () => {
    let count = cents;
    count = count - 100;
    setCents(count);
  };

  const changePrice = (type, action) => {
    let total = price;
    switch (type) {
      case "llanta":
        total = action ? total + 150 : total - 150;
        setPrice(total);
        break;
      case "choque":
        total = action ? total + 200 : total - 200;
        setPrice(total);
        break;
      case "atropello":
        total = action ? total + 500 : total - 500;
        setPrice(total);
        break;
      default:
        console.log("Not found");
        break;
    }
  };

  return (
    <div className="plan">
      <Steps />
      <ProfileHeader
        user={user}
        tab={tab}
        cents={cents}
        activeTab={activeTab}
        toMoney={toMoney}
        increment={increment}
        decrement={decrement}
        changePrice={changePrice}
      />
      <Cotization price={price} />
    </div>
  );
};
export default Plan;
