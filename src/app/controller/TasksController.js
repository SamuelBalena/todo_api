const Tasks = require("../model/Tasks");

class TasksController {
  async postData(req, res) {
    const data = await Tasks.create(req.body);
    return res.json(data);
  }
  async showData(req, res) {
    const data = await Tasks.find({});
    return res.json(data);
  }

  async deleteData(req, res) {
    const data = req.body;
    await Tasks.deleteOne({ id: data.id });
    return res.send();
  }

  async putData(req, res) {
    const dataId = req.body.id;
    const dataStatus = req.body.status;
    await Tasks.find({ id: dataId }).updateOne({ status: dataStatus });
    return res.send();
  }
}

module.exports = new TasksController();
