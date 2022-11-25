import { RouteComponentProps, RouteProps } from "../../common/router";
import { routes } from "../../entry/routes";
import { NavItem } from "../NavItem/NavItem";
import logo from "../../static/pictures/manaos-simple.svg";
import { mainLayoutStyles as useStyles } from "./MainLayout.styles";
import { MainLayoutHeaderPortal } from "./MainLayoutHeaderPortal";
import { useMemo } from "react";

type NavRoute = Required<RouteProps>;
const isNavRoute = (route: RouteProps): route is NavRoute =>
  !!route.icon && !!route.title;

export const MainLayout: React.FC<RouteComponentProps> = ({
  children,
  "data-testid": testid = "main-layout",
}) => {
  const classes = useStyles();
  const navRoutes = useMemo(() => routes.filter(isNavRoute), []);

  return (
    <div className={classes.mainLayout} data-testid={testid}>
      <div className={classes.mainLayoutHead}>
        <img src={logo} alt="Manaos logo" className={classes.mainLayoutLogo} />
        <MainLayoutHeaderPortal className={classes.mainLayoutHeader} />
      </div>
      <div className={classes.mainLayoutBody}>
        <div className={classes.mainLayoutNav}>
          {navRoutes.map(({ icon, title, path }) => (
            <NavItem key={path} icon={icon} title={title} path={path} />
          ))}
        </div>
        <div className={classes.mainLayoutContent}>{children}</div>
      </div>
    </div>
  );
};
