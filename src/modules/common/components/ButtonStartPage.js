import React from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonStartPage() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate("/")}
        type="button"
        className="btn btn-danger"
      >
        QUIT
      </button>
    </>
  );
}
