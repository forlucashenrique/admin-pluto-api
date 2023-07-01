const unitsModel = require('../models/unitsModel');

const getAllUnits = async () => {
    return await unitsModel.findAll();
}

const getUnitById = async (id) => {
    return await unitsModel.findByPk(id);
}

const createUnit = async (unit) => {
    return await unitsModel.create(unit);
}

const updateUnit = async (unit) => {
    return await unitsModel.update(unit, {
        where: {
            id: unit.id
        }
    });
}

const deleteUnit = async (id) => {
    return await unitsModel.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllUnits,
    getUnitById,
    createUnit,
    updateUnit,
    deleteUnit
}