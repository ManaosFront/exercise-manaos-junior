import { makeStyles } from "../../common/makeStyles";
import { colors } from "../../common/colors";
import { ApplicationBanner } from "../ApplicationBanner/ApplicationBanner";

const useStyles = makeStyles({
  pageHeader: {
    display: "flex",
    background: colors.grey99,
    padding: "1rem",
    boxShadow: `1rem 0 1rem 0 ${colors.grey93}, -1rem 0 1rem 0 ${colors.grey93}`,
  },
});

type PageHeaderProps = {
  applicationIconClassName: string;
  title: string;
  providerName: string;
  children?: React.ReactNode;
  "data-testid"?: string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  ...applicationBannerProps
}) => (
  <div className={useStyles().pageHeader}>
    <ApplicationBanner {...applicationBannerProps} />
    {children}
  </div>
);
