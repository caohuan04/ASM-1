import mongoose from "mongoose";
const Schema = mongoose.Schema;
const LaptopSchema = new Schema(
    {
        name: {type: String, required: true},
        vote: {type: Number, min: 0, max: 6, default: 3},
        desc: {type: String, required: true},
        price: {type: Number, required: true},
        public: {type: Boolean, default: true}
       
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const Laptop = mongoose.model('Laptop', LaptopSchema);
export default Laptop;