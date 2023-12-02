
export const validateCreateTherapist = (req, res, next) => {
  const { password, email} = req.body;

  if (!password || !email) {
    return res.status(400).json({ msg: 'Datos del terapeuta no válidos' });
  }

  next();
};
