"use client";

import { createContext } from "react";

export const FeatureContext = createContext({
  contactFormIsEnabled: true,
});

export default function FeatureProvider({ children }) {
  return (
    <FeatureContext.Provider
      value={{
        contactFormIsEnabled: true,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
}
