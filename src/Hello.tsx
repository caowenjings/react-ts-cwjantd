import React, { useContext } from "react";
import useGetContext from "./hooks/useGetContext";
interface IHelloProps {
  msg: string;
}
const Hello: React.FC<IHelloProps> = (props) => {
  const _style = useGetContext();

  return (
    <div style={_style} className="App">
      {props.msg}
    </div>
  );
};

Hello.defaultProps = {
  msg: "你好呀",
};
export default Hello;
