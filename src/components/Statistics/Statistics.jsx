import PropTypes from 'prop-types';
import { List } from './List/List';
import statisticsData from './data.json';
import css from "./statistics.module.css";

export const Statistics = ({ title = 'Upload stats' }) => {
  return (
    <section className={css.wrapper}>
      {title && <h2 className={css.title}>{title}</h2>}
      {/* {title ? <h2 className="title">{title}</h2> : ""} */}
      <List stats={statisticsData} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

