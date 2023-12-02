import userSchema from "../schemas/user.js";

const createUser = async (userData) => {
  try {
    const user = new userSchema(userData);
    const savedUser = await user.save();
    return savedUser;
  } catch (error) {
    throw error;
  }
};

const getUsers = async () => {
  try {
    const foundUser = await userSchema.find();
    return foundUser;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const foundUser = await userSchema.findById(id);
    return foundUser;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, { name, modality, time, price }) => {
  try {
    const updateUser = await userSchema.updateOne(
      { _id: id },
      { $set:  { name, modality, time, price }}
    );
    return updateUser;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await userSchema.findOneAndDelete({ _id: id });
    return deletedUser;
  } catch (error) {
    throw error;
  }
};

export default { createUser, getUsers, getUserById, updateUser, deleteUser };
