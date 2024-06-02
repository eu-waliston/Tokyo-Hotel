const mongoose = require("mongoose");

const paymentStatusOptions = ["pending", "done", "error"];
const actionTypeOptions = ["ArticleCreation"];

const PaymentSchema = new mongoose.Schema(
  {
    status: {
      //current status of payment
      type: String,
      enum: paymentStatusOptions,
      required: true,
    },
    actionType: {
      //type of action
      type: String,
      enum: actionTypeOptions,
      required: true,
    },
    actionData: {
      //data associated with action
      type: object,
    },
    paymentId: {
      // Id from external payment references (in this case from Payment Id from Square)
      type: String,
      default: "",
    },
    created: { type: Date, default: Date.now, required: true },
  },
  { autoCreate: true }
);

const PaymentModel = mongoose.model("Payment", PaymentSchema);

module.exports = {
  PaymentModel,
};
