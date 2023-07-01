const unitsRepository = require('../repositories/unitsRepository');

const getAllUnits = async (req, res) => {
    const units = await unitsRepository.getAllUnits();
    res.status(200).json(units);
}

const getUnitById = async (req, res) => {
    const id = parseInt(req.params.id);
    const unit = await unitsRepository.getUnitById(id);
    res.status(200).json(unit);
}

const createUnit = async (req, res) => {
    const unit = req.body;
    await unitsRepository.createUnit(unit);
    res.status(201).json(unit);
}

const updateUnit = async (req, res) => {
    const unit = req.body;
    await unitsRepository.updateUnit(unit);
    res.status(200).json(unit);
}

const deleteUnit = async (req, res) => {
    const id = parseInt(req.params.id);
    await unitsRepository.deleteUnit(id);
    res.status(200).send('Unidade deletada com sucesso!');
}

module.exports = {
    getAllUnits,
    getUnitById,
    createUnit,
    updateUnit,
    deleteUnit
}