import React, { createContext } from "react";

type SkeletonContextProps = {
  loading: boolean;
};

export const SkeletonContext = createContext<SkeletonContextProps | null>(null);

type Props = {
  loading: boolean;
  children: any;
};

export default function SkeletonManager(props: Props) {
  const { loading = false, children } = props;

  return (
    <SkeletonContext.Provider
      value={{
        loading
      }}
    >
      {children}
    </SkeletonContext.Provider>
  );
}
