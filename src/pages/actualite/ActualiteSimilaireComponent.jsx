/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import ActualiteCardComponent from "../../components/ActualiteCardComponent";
import useRequest from "../../hooks/useRequest";
import endPoint from "../../services/endPoint";

const ActualiteSimilaireComponent = () => {
  const { get } = useRequest();
  const { slug } = useParams();
  const [list, setList] = useState({});

  useEffect(() => {
    get("public/" + endPoint.posts+"/type/ACTUALITE", setList);
  }, []);
  return (
    <div className="row my-5">
      <div className="d-flex mt-3 mb-2">
        <span className="fw-bold fs-4">Actualités similaires</span>
        <div className="ms-auto d-flex align-items-center">
          <span className="text-primary">Voir plus</span>
          <i className="bi bi-arrow-right ms-1"></i>
        </div>
      </div>
      <div className="col-12">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {list?.data?.map((data, idx) => {
            if (idx > 3 || data.slug === slug) {
              return null;
            }
            return (
              <div className="col" key={data.slug}>
                <ActualiteCardComponent data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActualiteSimilaireComponent;
