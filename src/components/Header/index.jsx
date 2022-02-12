import UploadButton from "../../components/UploadButton";

export default function Header({ title }) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-5xl font-bold text-blue-dark">{title}</h2>
      <UploadButton />
    </div>
  );
}
