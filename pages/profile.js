import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
function profile() {
  return (
    <>
      <Head>
        <title>프로필</title>
      </Head>
      <AppLayout>
        <div>프로플 페이지입니다.</div>
      </AppLayout>
    </>
  );
}

export default profile;
