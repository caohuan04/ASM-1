import laptopRouter from "./laptops.js";
export default function routes(app) {
    app.get('/', (req, res) => {
        app.send("Hello World!");
    });
    app.use("/laptops", laptopRouter);
}