import { useState } from "react";
import UploadButton from "../../components/UploadButton";
import DragAndDrop from "../DragAndDrop";

export default function Header({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <h2 className="text-5xl font-bold text-blue-dark">{title}</h2>
      <UploadButton onAddModal={() => setIsOpen(true)} />
      {isOpen && <DragAndDrop onClose={setIsOpen(false)} />}
    </div>
  );
}
