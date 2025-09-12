import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#f9f9f9",
      }}
    >
      <ClipLoader size={100} color="#3498db" />
    </div>
  );
}
