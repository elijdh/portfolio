import mongoose from "mongoose";
const ContactSchema = new mongoose.Schema(
  {
    name: String,
    subject: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

const Contact =
  mongoose.models.Contacts || mongoose.model("Contacts", ContactSchema);

export default Contact;
