import dbConnect from "../../../Utils";
import orderModel from "../../../Models/orderModel";
const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  if (method === "GET") {
    try {
      const orders = await orderModel.find(req.body);
      res.status(200).json({
        success: true,
        data: orders,
        message: "Order Display Successfully",
      });
    } catch (error) {
      res.status(500).json({ success: false, data: [], message: err });
    }
  }
  if (method === "POST") {
    try {
      const order = await orderModel.create(req.body);
      res.status(200).json({
        success: true,
        data: order,
        message: "Order Added Successfully",
      });
    } catch (error) {
      res.status(500).json({ success: false, data: [], message: err });
    }
  }
};

export default handler;
