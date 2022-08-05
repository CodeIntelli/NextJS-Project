import dbConnect from "../../../Utils";
import productModel from "../../../Models/productModel";
export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  dbConnect();
  if (method === "GET") {
    try {
      // console.log(id);
      const products = await productModel.findById(id);
      res.status(200).json({
        success: true,
        data: products,
        message: "Product Display Successfully",
      });
    } catch (err) {
      res.status(500).json({ success: false, data: [], message: err });
    }
  }
  if (method === "PUT") {
    try {
      const product = await productModel.create(req.body);
      if (!product) {
        res.send("Something Error Occured");
      }
      res.status(200).json({
        success: true,
        data: product,
        message: "Product Update Successfully",
      });
    } catch (err) {
      res.status(500).json({ success: false, data: [], message: err });
    }
  }
  if (method === "DELETE") {
    try {
      const product = await productModel.findByIdAndDelete(id);
      if (!product) {
        res.send("Something Error Occured");
      }
      res.status(200).json({
        success: true,
        data: product,
        message: "Product Removed Successfully",
      });
    } catch (err) {
      res.status(500).json({ success: false, data: [], message: err });
    }
  }
}
