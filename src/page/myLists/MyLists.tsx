import { RouteComponentProps } from "../../common/router";

export const MyListsPage: React.FC<RouteComponentProps> = ({
  "data-testid": testid,
}) => {
  return <p data-testid={testid}>My Lists</p>;
};
