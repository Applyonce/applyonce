import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import Sidebar from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  className,
}) => {
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Layout noNavbar noFooter>
      <div className="flex h-screen w-full overflow-hidden">
        <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <div
          className={cn(
            "flex-1 overflow-auto h-screen",
            isMobile && "pt-0",
            className
          )}
        >
          <main className="px-4 pb-4 sm:px-6 sm:pb-6">{children}</main>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardLayout;
