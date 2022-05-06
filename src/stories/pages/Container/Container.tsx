import React from "react";

import { AppBar } from "../../headers/";
import "./Container.css";

interface ContainerProps {
  children;
}

type User = {
  name: string;
};

export const Container = ({ children, ...props }: ContainerProps) => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <AppBar
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <section>{children}</section>
    </article>
  );
};
