import { useGetAllSupplyQuery } from "@/redux/api/api";
import SupplyCard from "../ui/SupplyCard";
import { Button } from "../ui/button";
import { TSupplyData } from "@/types";

const SupplyPosts = () => {
  const { data, isLoading } = useGetAllSupplyQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="mb-10">
        <div className="my-10">
          <h3 className="text-center text-3xl  ">Featured Supply</h3>

          <p className="text-center text-slate-500">
            Discover the most impactful donations that make a difference in the
            lives of those in need.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
          {data?.data?.map((item: TSupplyData) => (
            <SupplyCard data={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button>See all</Button>
      </div>
    </div>
  );
};

export default SupplyPosts;
