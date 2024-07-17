/* eslint-disable react/prop-types */
import { colors } from "../data/array";

const JobCardLogo = ({ data }) => {
  return (
    <div
      className="job-logo d-flex justify-content-center align-items-center rounded-2 me-3"
      style={{ backgroundColor: colors[data?.entreprise?.charAt(0)]?.color}}
    >
      <span style={{ color: colors[data?.entreprise?.charAt(0)]?.contrast }}>
        {data?.entreprise?.charAt(0)}
      </span>
    </div>
  );
};

export default JobCardLogo;
