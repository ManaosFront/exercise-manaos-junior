import { makeStyles } from "../../common/makeStyles";
import { colors } from "../../common/colors";

const useStyles = makeStyles({
  item: {
    display: "flex",
    margin: ".5rem 0",
  },
  term: {
    flex: "0 0 15rem",
    margin: "0 1rem 0 0",
    borderBottom: `2px dotted ${colors.grey59}`,
  },
  definition: {
    flex: "1 1 auto",
    margin: 0,
  },
});

type DefinitionsProps = {
  record: Record<string, string>;
};

export const Definitions: React.FC<DefinitionsProps> = ({ record }) => {
  const classes = useStyles();

  return (
    <div>
      {Object.entries(record).map(([term, definition]) => (
        <dl className={classes.item}>
          <dt className={classes.term}>{term}</dt>
          <dd className={classes.definition}>{definition}</dd>
        </dl>
      ))}
    </div>
  );
};
