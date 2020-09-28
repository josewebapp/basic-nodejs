const controller = {
  test: (req, res) => {
    res.status(200).send({ ok: true, msg: "Hello Word" });
  },
};
module.exports = controller;
