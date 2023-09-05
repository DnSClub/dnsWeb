import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import { useEffect } from "react";

function Layout(props) {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(120deg, #000243, #420064, #020091, #A2004C, #420064)";
    document.body.style.backgroundSize = "600% 600%";
    document.body.style.animation = "gradientAnimation 15s ease infinite";
    // Define the @keyframes rule for the gradientAnimation
    const styleSheet = document.styleSheets[0];
    if (styleSheet) {
      styleSheet.insertRule(
        `
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `,
        styleSheet.cssRules.length
      );
    }
  }, []);

  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <div className={classes.footer}>
        Developers and Systems Club at Simon Fraser University 2023 &#169;
      </div>
    </div>
  );
}

export default Layout;