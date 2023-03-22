import Author from "../../models/Author.js";


const controller = {
    get_me: async (req, res) => {
        try {
            let me = await Author.findOne({ user_id:req.user })
            if (me) {
                return res.status(200).json({
                    success: true,
                    me,
                });
            }
            return next(createError(404, "Author not found"))
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "Server error",
            });
        }
    },
};

export default controller