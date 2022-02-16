import reactDom from "react-dom";
import { PuffLoader } from "react-spinners";

function Backdrop() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex flex-col justify-center items-center z-10 bg-overlay"></div>
  );
}

function LoadingOverlay() {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-10 flex flex-col items-center justify-center">
      <p className="mb-16 text-[4rem] font-extrabold text-blue-500 animate-pulse">
        File is uploading!
      </p>
      <PuffLoader
        speedMultiplier={1}
        size={150}
        loading={true}
        color="#0EA5E9"
      />
    </div>
  );
}
export default function LoadingModal() {
  return (
    <>
      {reactDom.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {reactDom.createPortal(
        <LoadingOverlay />,
        document.getElementById("file-uploading-modal")
      )}
    </>
  );
}
