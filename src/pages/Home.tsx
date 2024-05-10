import { Button } from "@/components/ui/button";
import { useGetPostsQuery } from "../redux/api/api";
import { increase } from "../redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
type TItem = { id: string; title: string };
const Home = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);
  const { data, isLoading } = useGetPostsQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <p className="text-xl font-bold">{count}</p>
        <Button onClick={() => dispatch(increase())}>Increase</Button>
        {data.map((item: TItem) => (
          <p className="text-lg font-bold" key={item.id}>
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
