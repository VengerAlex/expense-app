import { FC, ReactNode } from "react";

import { MainContent, MainWrapper } from "../../styles";
import { Sidebar } from "../Sidebar";

interface IMainLayout {
  children: ReactNode;
}
export const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <MainWrapper>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </MainWrapper>
  );
};
