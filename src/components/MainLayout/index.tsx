import { FC, ReactNode } from "react";
import { Sidebar } from "../Sidebar";
import { MainWrapper, MainContent } from "../../styles";

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
