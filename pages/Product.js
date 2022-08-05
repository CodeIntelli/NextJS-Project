import axios from "axios";
import PizzaList from "../Components/PizzaList";

const AllProduct = ({ pizzaList }) => {
  return (
    <div>
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
};
export default AllProduct;
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data.data,
    },
  };
};