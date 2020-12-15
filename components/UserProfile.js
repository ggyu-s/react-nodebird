import React, { useCallback } from "react";
import { Button, Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";

function UserProfile({ setIsLoggedIn }) {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짝짝
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="follower">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>ZC</Avatar>} title="ggyu" />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
}

export default UserProfile;
