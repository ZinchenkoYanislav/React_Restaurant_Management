import React from "react";
import { useNavigate } from "react-router-dom";


export default function ButtonNavBack() {
    const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate(-1)} type="button" className="btn btn-secondary">BACK</button>
    </>
  );
}
