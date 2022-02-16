import { useState } from "react";
import { useSelector } from "react-redux";
import UploadButton from "../../components/UploadButton";
import DragAndDrop from "../DragAndDrop";
import LoadingModal from "../LoadingModal";

export default function Header({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const isUploading = useSelector((state) => state.upload.isUploading);

  return (
    <div className="flex justify-between items-center">
      <h2 className="text-5xl font-bold text-blue-dark">{title}</h2>
      <UploadButton onAddModal={() => setIsOpen(true)} />
      {isOpen && <DragAndDrop onClose={() => setIsOpen(false)} />}
      {isUploading && <LoadingModal />}
    </div>
  );
}
