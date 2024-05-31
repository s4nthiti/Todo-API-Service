const dataPath = path.join(__dirname, 'data.json');

const getData = async () => {
  const data = await fs.promises.readFile(dataPath, 'utf8');
  return JSON.parse(data);
};

const saveData = async (data) => {
  await fs.promises.writeFile(dataPath, JSON.stringify(data));
};

async function getAll(id, page = 0, limit = 8000) {
  if (id == 'all') {
    const contentObj = await db.Content.find({ deletedBy: { $exists: false } }).populate('image').sort({ date: -1 }).limit(parseInt(limit)).skip(limit * page);
    return contentObj;
  }
  else {
    const contentObj = await db.Content.findOne({ _id: id, deletedBy: { $exists: false } }).populate('image');
    return contentObj;
  }
}

async function getById(id, page = 0, limit = 8000) {
  if (id == 'all') {
    const contentObj = await db.Content.find({ deletedBy: { $exists: false } }).populate('image').sort({ date: -1 }).limit(parseInt(limit)).skip(limit * page);
    return contentObj;
  }
  else {
    const contentObj = await db.Content.findOne({ _id: id, deletedBy: { $exists: false } }).populate('image');
    return contentObj;
  }
}

async function create() {

}

async function update() {

}

async function deleteById() {

}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
};