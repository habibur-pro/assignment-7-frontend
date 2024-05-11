import Container from "@/components/layout/Contaienr";
import Banner from "@/components/sections/Banner";
import SupplyPosts from "@/components/sections/SupplyPosts";
import TopDoner from "@/components/ui/TopDoner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Container>
        <SupplyPosts />
        <TopDoner />
      </Container>
    </div>
  );
};

export default Home;
