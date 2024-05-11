import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DonerCard from "./donerCard";

const doners = [
  {
    name: "Habibur Rahman",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    amount: 5222,
  },
  {
    name: "Habibur Rahman",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    amount: 5222,
  },
  {
    name: "Habibur Rahman",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    amount: 5222,
  },
  {
    name: "Habibur Rahman",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    amount: 5222,
  },
  {
    name: "Habibur Rahman",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    amount: 5222,
  },
  {
    name: "Habibur Rahman",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    amount: 5222,
  },
  {
    name: "Habibur Rahman",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    amount: 5222,
  },
  {
    name: "Habibur Rahman",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    amount: 5222,
  },
  {
    name: "Habibur Rahman",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    amount: 5222,
  },
];

export default function TopDoner() {
  return (
    <div>
      <div className="my-10">
        <h3 className="text-center text-3xl  ">Featured Supply</h3>

        <p className="text-center text-slate-500">
          Discover the most impactful donations that make a difference in the
          lives of those in need.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent>
          {doners.map((doner) => (
            <DonerCard key={doner.name} details={doner} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
