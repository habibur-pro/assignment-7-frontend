import DeleteModal from "@/components/ui/DeleteModal";
import EditModal from "@/components/ui/EditModal";
import ErrorBox from "@/components/ui/ErrorBox";
import Loader from "@/components/ui/Loader";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllSupplyQuery } from "@/redux/api/api";
import { TSupplyData } from "@/types";
import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AllSuppliesDashboard = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetAllSupplyQuery(undefined);
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorBox />;
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((item: TSupplyData) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell className="text-right space-x-5">
                <EditModal supply={item}>
                  <Button>
                    <Pencil />
                  </Button>
                </EditModal>
                <DeleteModal supply={item}>
                  <Button variant="destructive">
                    <Trash2 />
                  </Button>
                </DeleteModal>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="">
            <TableCell colSpan={4} className="">
              <Button onClick={() => navigate("/dashboard/create-supply")}>
                Add Supply
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default AllSuppliesDashboard;
