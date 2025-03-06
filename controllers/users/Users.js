import User from "../../models/users/Users.js";

const createUser = async (req, res) => {
    try {
        const{ firstName, lastName} = req.body
if(!firstName || !lastName) {
    return res.status(400).json({ message: 'Firstname and Lastname are required'})

}
const newUser = await User.create({firstName, lastName})
res.status(201).json({message: "User created successfuly", user: newUser})
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}


// exports.getUsers = async (req,res) => {

// try

// }

export default createUser