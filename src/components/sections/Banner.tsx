import Container from "../layout/Contaienr";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="banner full-screen" style={{ backgroundImage: "" }}>
      <div className="bg-black bg-opacity-70 w-full h-full ">
        <Container className="flex items-center justify-center w-full h-full">
          <div className="text-white flex flex-col items-center justify-center gap-3">
            <h1 className="text-xl lg:text-2xl">
              No one has ever become poor by giving
            </h1>
            <h1 className="text-3xl lg:text-7xl font-bold">
              Be aHand Make Yourself
            </h1>
            <p>Give a helping hand to those who need it</p>
            <Button className="mt-5">Donate Now</Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
