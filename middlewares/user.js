
export const validateCreateUser = (req, res, next) => {
  const { password, email} = req.body;

  if (!password || !email) {
    return res.status(400).json({ msg: 'Datos de usuario no válidos' });
  }

  next();
};
