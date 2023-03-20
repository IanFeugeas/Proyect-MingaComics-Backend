import Author from "../../models/Author.js";


const controller = {
    update: async(req,res,next) => {
        try{
            let author = await Author.findOneAndUpdate({ user_id: req.user }, req.body, { new: true })
            .select("name last_name city country date photo")
            if(author){
                return res.status(200).json({
                    success: true,
                    author
                })
            }
            return next ( createError(404, "no es author" ))
        }catch(error){
            return res.status(400).json({
                success: false,
                message: "Server error"
            })
        }
    }
}

export default controller