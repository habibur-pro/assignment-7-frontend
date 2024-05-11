import { Button } from "./button";
import { Card } from "./card";

type SupplyCardProps = {
  data: {
    title: string;
    image: string;
    quantity: number;
    category: string;
  };
};

const SupplyCard = ({ data }: SupplyCardProps) => {
  return (
    <div className="hover:shadow-lg transition-all">
      <Card>
        <img className="w-full h-full rounded-t" src={data.image} alt="" />
        <div className="p-3">
          <h3 className="font-bold my-2">{data.title}</h3>
          <p className="text-sm text-slate-800 mb-2">
            Category: {data.quantity}
          </p>
          <p className="text-sm text-slate-800 mb-2">
            Quantity: {data.quantity}
          </p>
          <Button className="w-full my-3">Donate Now</Button>
        </div>
      </Card>
    </div>
  );
};

export default SupplyCard;
