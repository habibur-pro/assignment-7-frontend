import Container from "@/components/layout/Contaienr";
import Loader from "@/components/ui/Loader";
import SupplyCard from "@/components/ui/SupplyCard";
import { useGetAllSupplyQuery } from "@/redux/api/api";
type TSupplyData = {
  id: string;
  title: string;
  description: string;
  image: string;
  quantity: number;
  category: string;
};
const AllSupplies = () => {
  const { data, isLoading } = useGetAllSupplyQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="pt-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
          {data?.data?.map((item: TSupplyData) => (
            <SupplyCard data={item} key={item.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllSupplies;
