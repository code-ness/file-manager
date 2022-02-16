import Header from "../../components/Header";
import FilesTable from "../../components/FilesTable";
import StorageItemsList from "../../components/StorageItemsList";

export default function Dashboard() {
  return (
    <div className="p-16 pb-8">
      <Header title="Dashboard" />
      <div className="my-12">
        <p className="mb-8 text-4xl font-semibold">Storage</p>
        <StorageItemsList />
      </div>
      <div className="my-12">
        <p className="text-4xl font-semibold">Recent Files</p>
        <FilesTable />
      </div>
    </div>
  );
}
