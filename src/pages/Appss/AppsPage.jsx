import React from "react";
import Apps from "../../components/Apps/Apps";
import { useLoaderData } from "react-router";

const AppsPage = () => {
  const { data: apps } = useLoaderData();
  return (
    <div>
      <Apps apps={apps}></Apps>
    </div>
  );
};

export default AppsPage;
