import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props) {
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