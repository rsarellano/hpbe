import UserSchema from "../../models/users/Users";

exports.createUser = async (req, res) => {
    try {
        const{ firstName, lastName} = req.body
if(!firstName || lastName) {
    return res.status(400).json({ message: 'Firstname and Lastname are required'})

}
const newUser = await UserSchema.create({firstName, LastName})
res.status(201).json({message: "User created successfuly", user: newUser})
    }
    catch (error) {
res.status(500)
    }
}