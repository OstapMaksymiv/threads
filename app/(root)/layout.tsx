import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";

import RightSidebar from "@/components/shared/RightSidebar";
import TopBar from "@/components/shared/Topbar";
import BottomBar from "@/components/shared/Bottombar";
export const metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <TopBar />
          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSidebar />
          </main>{" "}
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
