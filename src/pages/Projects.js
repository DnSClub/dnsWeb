import { useEffect } from "react";

function ProjectsPage() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(120deg, #020091, #A2004C, #FF014A)";
    document.body.style.backgroundSize = "100% 1100%";
    document.body.style.animation = "gradientAnimation 30s ease infinite";
  }, []);
  return (
    <section>
      <h1>projects & events</h1>
      <h2>our github</h2>
    </section>
  );
}

export default ProjectsPage;
