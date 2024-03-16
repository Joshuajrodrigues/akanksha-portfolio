import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <h3 className=" text-xl font-semibold uppercase text-lightPrimary ">
      {title}
      <hr className="h-2" />
    </h3>
  );
};

export default PageTitle;
