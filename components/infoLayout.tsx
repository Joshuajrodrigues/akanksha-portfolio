import React, { ReactNode } from "react";

const InfoLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className="w-full h-svh flex p-8 items-center justify-center">
        {children}
      </section>
    </>
  );
};

export default InfoLayout;
