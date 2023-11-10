import React, { ReactNode } from "react";
import { Navbar, Sidebar } from "../ui";
import styles from "./dashboard.module.css";
interface Props {
  children: ReactNode;
}

function DashboardLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}

export default DashboardLayout;
