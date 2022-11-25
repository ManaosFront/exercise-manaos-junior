import { RouteComponentProps } from "../../common/router";

export const DashboardPage: React.FC<RouteComponentProps> = ({
  "data-testid": testid,
}) => {
  return <p data-testid={testid}>Dashboard page</p>;
};
