import "../styles/globals.css";
import { NextPage } from "next";
import React from "react";
function MyApp({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) {
  return (
    <div className="bg-neutral-900 h-full w-full">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
