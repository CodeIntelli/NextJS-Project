import dbConnect from "../../../Utils";
import orderModel from "../../../Models/orderModel";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;
  await dbConnect();
  if (method === "GET") {
    try {
      const order = await orderModel.findById(id);
      res.status(200).json({
        success: true,
        data: order,
        message: "Order Display Successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: true,
        data: [],
        message: error,
      });
    }
  }
  if (method === "PUT") {
    try {
      const order = await orderModel.findByIdAndUpdate(id);
      res.status(200).json({
        success: true,
        data: order,
        message: "Order Updated Successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: true,
        data: [],
        message: error,
      });
    }
  }
  if (method === "DELETE") {
    try {
      const order = await orderModel.findByIdAndDelete(id);
      res.status(200).json({
        success: true,
        data: order,
        message: "Order Removed Successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: true,
        data: [],
        message: error,
      });
    }
  }
};
export default handler;
