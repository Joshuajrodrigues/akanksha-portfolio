import React, { ReactNode } from "react";

const Typography = ({ children }: { children: ReactNode }) => {
  return <p className="p-2 m-1 uppercase">{children}</p>;
};

export default Typography;
