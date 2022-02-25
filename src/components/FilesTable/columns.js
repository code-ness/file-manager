import TableMenu from "../Menu";

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Date Created",
    dataIndex: "createDate",
    defaultSortOrder: "descend",
    sorter: (a, b) => new Date(a.createDate) - new Date(b.createDate),
  },
  {
    title: "Size",
    dataIndex: "size",
    defaultSortOrder: "descend",
    sorter: (a, b) => parseFloat(a.size) - parseFloat(b.size),
  },
  {
    title: "Last Modified",
    dataIndex: "modifyDate",
    defaultSortOrder: "descend",
    sorter: (a, b) => new Date(a.modifyDate) - new Date(b.modifyDate),
  },
  {
    title: "Actions",
    dataIndex: "actions",
    render: () => <TableMenu />,
  },
];
