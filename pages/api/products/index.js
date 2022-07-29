import dbConnect from "../../../Utils";
import productModel from "../../../Models/productModel";
export default async function handler(req, res) {
  const { method } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const products = await productModel.find().sort({ createdAt: -1 });
      res.status(200).json({
        success: true,
        data: products,
        message: "Product Display Successfully",
      });
    } catch (err) {
      res.status(500).json({ success: false, data: [], message: err });
    }
  }
  if (method === "POST") {
    try {
      const product = await productModel.create(req.body);
      if (!product) {
        res.send("Something Error Occured");
      }
      res.status(200).json({
        success: true,
        data: product,
        message: "Product Add Successfully",
      });
    } catch (err) {
      res.status(500).json({ success: false, data: [], message: err });
    }
  }
}
