import React, { ReactNode } from "react";
const Card: React.FC<{ children: ReactNode }> = (props) => {
  return <div className="bg-white px-4 py-4 rounded-xl">{props.children}</div>;
};

export default Card;
