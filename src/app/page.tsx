import Sidebar from "@/components/Sidebar";
import ProjectExplorer from "@/components/ProjectExplorer";

export default function Home() {
  return (
    <div className="mx-auto grid w-full max-w-6xl flex-1 lg:grid-cols-[320px_1fr]">
      <Sidebar />
      <ProjectExplorer />
    </div>
  );
}
