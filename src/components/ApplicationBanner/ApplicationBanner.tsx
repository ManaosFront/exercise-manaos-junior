import { clsx, makeStyles } from "../../common/makeStyles";
import { colors } from "../../common/colors";

const useStyles = makeStyles({
  applicationBanner: {
    display: "inline-flex",
    padding: "1rem",
    background: colors.white,
    borderRadius: ".5rem",
    boxShadow: `0 0 1rem 0 ${colors.grey93}`,
  },
  icon: {
    width: "4rem",
    height: "4rem",
    marginRight: "1rem",
    backgroundSize: "contain",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  },
  infos: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    "& > *": {
      margin: 0,
    },
  },
});

type ApplicationBannerProps = {
  applicationIconClassName: string;
  title: string;
  providerName: string;
  "data-testid"?: string;
};

export const ApplicationBanner: React.FC<ApplicationBannerProps> = ({
  applicationIconClassName,
  title,
  providerName,
  "data-testid": testid,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.applicationBanner} data-testid={testid}>
      <div className={clsx(classes.icon, applicationIconClassName)} />
      <div className={classes.infos}>
        <h2>{title}</h2>
        <span>
          Powered by <strong>{providerName}</strong>
        </span>
      </div>
    </div>
  );
};
