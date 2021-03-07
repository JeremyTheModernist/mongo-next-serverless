import React from "react";
import { useUser } from "../hooks/index";

const Profile = () => {
  const { user, isLoading, isError } = useUser();
  if (isLoading) return <div>currently loading your data</div>;
  if (isError) return <div>there was an error!</div>;
  return (
    <div>
      <h1>welcome back: {user?.username}</h1>
    </div>
  );
};

export default Profile;
