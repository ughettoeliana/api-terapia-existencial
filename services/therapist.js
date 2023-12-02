import therapistSchema from "../schemas/therapist.js";

const createTherapist = async (therapistData) => {
  try {
    const therapist = new therapistSchema(therapistData);
    const savedTherapist= await therapist.save();
    return savedTherapist;
  } catch (error) {
    throw error;
  }
};

const getTherapists = async () => {
  try {
    const foundTherapist = await therapistSchema.find();
    return foundTherapist;
  } catch (error) {
    throw error;
  }
};

const getTherapistById = async (id) => {
  try {
    const foundTherapist = await therapistSchema.findById(id);
    return foundTherapist;
  } catch (error) {
    throw error;
  }
};

const updateTherapist = async (id,  { email, password}) => {
  try {
    const updateTherapist = await therapistSchema.updateOne(
      { _id: id },
      { $set:  { email, password}}
    );
    return updateTherapist;
  } catch (error) {
    throw error;
  }
};

const deleteTherapist = async (id) => {
  try {
    const deletedTherapist = await therapistSchema.findOneAndDelete({ _id: id });
    return deletedTherapist;
  } catch (error) {
    throw error;
  }
};

export default { createTherapist, getTherapists, getTherapistById, updateTherapist, deleteTherapist };
