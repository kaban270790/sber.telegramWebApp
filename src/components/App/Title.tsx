import React from "react";
import useTelegramWebApp from "../../hooks/useTelegramWebApp";

interface ITitleProps {}

const Title: React.FC<ITitleProps> = () => {
  const {
    initDataUnsafe: { user },
  } = useTelegramWebApp();

  return (
    <h1>
      {user
        ? `Добро пожаловать, ${user.first_name} ${user.last_name}!`
        : "Добро пожаловать!"}
    </h1>
  );
};

export default Title;
