const plansModel = require('../models/plansModel');

const getAllPlans = async () => {
    const plans = await plansModel.findAll();
    return plans;
}

const getPlanById = async (id) => {
    const plan = await plansModel.findByPk(id);
    return plan;
}

const createPlan = async (plan) => {
    const newPlan = await plansModel.create(plan);
    return newPlan;
}

const updatePlan = async (id, plan) => {
    const updatedPlan = await plansModel.update(plan, {
        where: { id },
    });
    return updatedPlan;
}

const deletePlan = async (id) => {
    const deletedPlan = await plansModel.destroy({
        where: { id },
    });
    return deletedPlan;
}

module.exports = {
    getAllPlans,
    getPlanById,
    createPlan,
    updatePlan,
    deletePlan,
}