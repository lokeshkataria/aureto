export default (req, res) => {
  const {
    query: { pid },
  } = req;

  res.status(200).json({ name: pid });
};
