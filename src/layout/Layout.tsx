import React, { ReactNode } from "react";

interface LayoutProps {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
      {props.header}
      {props.content}
      {props.footer}
    </div>
  );
};

export default Layout;
