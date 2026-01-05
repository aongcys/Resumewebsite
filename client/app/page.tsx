import Desktopnavbar from "./components/navbar/desktopnavnar";
import Aboutme from "./components/aboutme";
import ExperienceAndEducation from "./components/eperienceandeducation";

export default function Home() {
  return (
    <div className="flex flex-col gap-15">
      <Desktopnavbar />
      <Aboutme />
      <ExperienceAndEducation />
    </div>
  );
}
