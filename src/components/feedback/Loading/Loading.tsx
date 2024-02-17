import { TLoading } from "@customTypes/shared";
import React from "react";

type TLoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
};

const Loading = ({ status, error, children }: TLoadingProps) => {
  if (status === "pending") {
    return <p>Loading ...</p>;
  }

  if (status === "failed") {
    return <p>{error}</p>;
  }

  return <>{children}</>;
};

export default Loading;
