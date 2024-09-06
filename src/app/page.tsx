import Footer from "@/components/Footer";
import BoardPage from "@/components/boardPage/BoardPage";
import { Project } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      {/* <Events/> */}
      {/* <BoardPage /> */}
      <Footer />
      <BoardPage />

      {/* <Events /> */}
      <Project />
    </main>
  );
}
