import therapistServices from "../services/therapist.js";

 const createTherapist = async (req, res) => {
  try {
    const therapistData = req.body;
    const createdTherapist = await therapistServices.createTherapist(therapistData);
    res.status(201).json({ data: createdTherapist });
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear el terapeuta', error: error.message });
  }
};

 const getTherapists = async (req, res) => {
  try {
    const foundTherapists = await therapistServices.getTherapists();
    res.status(201).json({ data: foundTherapists });
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear el terapeuta', error: error.message });
  }
};

 const getTherapistById = async (req, res) => {
  try {
    const {id} = req.params
    const foundTherapist = await therapistServices.getTherapistById(id);
    res.status(201).json({ data: foundTherapist });
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear el terapeuta', error: error.message });
  }
};

 const updateTherapist = async (req, res) => {
  try {
    const {id} = req.params
    const {email, password} = req.body
    const updateTherapist = await therapistServices.updateTherapist(id, {email, password});
    res.status(201).json({ data: updateTherapist });
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear el terapeuta', error: error.message });
  }
};

 const deleteTherapist = async (req, res) => {
  try {
    const {id} = req.params
    const deleteTherapist = await therapistServices.deleteTherapist(id);
    res.status(201).json({ data: deleteTherapist });
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear el terapeuta', error: error.message });
  }
};

 export default { createTherapist, getTherapists, getTherapistById, updateTherapist, deleteTherapist };
