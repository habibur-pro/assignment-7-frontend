import { Card, CardContent } from "./card";
import { CarouselItem } from "./carousel";

export type TDonerCard = {
  key: string;
  details: {
    name: string;
    image: string;
    amount: number;
  };
};

const DonerCard = ({ key, details }: TDonerCard) => {
  return (
    <>
      <CarouselItem key={key} className="md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className=" p-6 flex flex-col items-center">
              <div>
                <img
                  src={details.image}
                  alt=""
                  className="size-40 rounded-full"
                />
                <p className="text-3xl font-semibold">{details.name}</p>
                <p className="text-3xl font-semibold">{details.amount}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </>
  );
};

export default DonerCard;
