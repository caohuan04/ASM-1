import Laptop from "../model/laptopModel.js";

class LaptopController {

    // Get all
    async getAllLaptops(req, res) {
        try {
            const laptops = await Laptop.find();
            res.status(200).send({
                message: "Hiển thị thành công!",
                data: laptops
            });
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
        // res.send("Get All Laptops");
    }

    // Get all
    async getLaptopsDetail(req, res) {
        const laptops = await Laptop.findById(req.params.id);
        if (!laptops) {
            return res.status(404).send({
                message: "Không tìm thấy id"
            });
        }
        try {
            res.status(200).send({
                message: "Hiển thị thành công!",
                data: laptops
            });
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    }

    // Get all
    async createLaptops(req, res) {
        const newLaptops = await Laptop.create(req.body);
        const saveLaptops = await newLaptops.save();
        res.status(200).send({
            message: "Thêm thành công!",
            data: saveLaptops
        });
    }

    // Get all
    async updateLaptops(req, res) {
        const laptops = await Laptop.findByIdAndUpdate(req.params.id, req.body);
        if (!laptops) {
            return res.status(404).send({
                message: "Không tìm thấy id"
            });
        }
        const updateLaptops = await Laptop.findById(req.params.id);
        try {
            res.status(200).send({
                message: "Sửa thành công!",
                data: updateLaptops
            });
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    }

    // Get all
    async deleteLaptops(req, res) {
        const laptops = await Laptop.findByIdAndDelete(req.params.id);
        if (!laptops) {
            return res.status(404).send({
                message: "Không tìm thấy id"
            });
        }
        try {
            res.status(200).send({
                message: "Xóa thành công!",
                data: laptops
            });
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    }
}
export default LaptopController;