/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import JobCardComponent from "../../../components/JobCardComponent";
import useRequest from "../../../hooks/useRequest";
import endPoint from "../../../services/endPoint";
import { useParams } from "react-router-dom";

const OffreSimilaireComponent = () => {
  const {get} = useRequest()
  const {slug} = useParams()
  const [list,setList] = useState({})

  useEffect(() => {
    get("public/"+endPoint.offres,setList)
  },[])
  return (
    <div className="row my-5">
      <div className="d-flex mt-3 mb-2">
        <span className="fw-bold fs-4">Offres similaires</span>
        <div className="ms-auto d-flex align-items-center">
          <span className="text-primary">Voir plus</span>
          <i className="bi bi-arrow-right ms-1"></i>
        </div>
      </div>
      {list?.data?.map((data,idx) => {
        if(idx > 3 || data.slug === slug ){
          return null
        }
        return (
          <div key={data.slug+"OffreSimilaireComponent"}>
            <JobCardComponent key={data.slug} data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default OffreSimilaireComponent;
