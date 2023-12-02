export const validateCreateFeedback = (req, res, next) => {
  const { userId, serviceId, comment } = req.body;

  if (!userId || !serviceId || !comment) {
    return res.status(400).json({ msg: "Datos del comentario no válidos" });
  }

  next();
};
