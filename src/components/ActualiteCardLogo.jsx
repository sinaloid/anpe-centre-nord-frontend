/* eslint-disable react/prop-types */
import { colors } from "../data/array";

const ActualiteCardLogo = ({ data }) => {
  return (
    <div
      className="job-logo d-flex justify-content-center align-items-center rounded-2 me-3"
      style={{ backgroundColor: colors[data?.titre?.charAt(0)]?.color}}
    >
      <span style={{ color: colors[data?.titre?.charAt(0)]?.contrast }}>
        {data?.titre?.charAt(0)}
      </span>
    </div>
  );
};

export default ActualiteCardLogo;
