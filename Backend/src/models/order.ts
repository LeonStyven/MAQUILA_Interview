import { Schema, model } from "mongoose";

type OrderItem = {
    productId: string;
    skuId: string;
    queantity: number;
    unitPrice: number;
};

const orderSchema = new Schema({
    orderId: {type: String, required: true, index: true},
    purchasedAt: {type: Date, default: () => new Date(), required: true},
    customerDocument: { type: String, required: true },
    items: [{
        productId: {type: String, required: true},
        skuId: { type: String, required: true },
        queantity: { type: Number, required: true, min:1 },
        unitPrice: { type: Number, required: true, min: 0},
    }],
    totalQuantity: {type: Number, required: true, min: 1},
    totalAmount: { type: Number, required: true, min: 0 },
}, { timestamps: true});


export type OrderDoc = typeof orderSchema extends infer T ? unknown : unknown;
export default model("Order", orderSchema);

