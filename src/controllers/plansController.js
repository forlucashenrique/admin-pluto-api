const plansRepository = require('../repositories/plansRepository');

const getAllPlans = async (_req, res) => {
   
    const plans = await plansRepository.getAllPlans();
    res.status(200).json(plans);
}

const getPlanById = async (req, res) => {
    const { id } = req.params;
    const plan = await plansRepository.getPlanById(id);

    if (!plan) return res.status(404).json({ message: 'Plan not found' });

    res.status(200).json(plan);
}

const createPlan = async (req, res) => {
    const { cardImage, titleCard, titleColor, planValue, buttonColor, textButtonColor, iconButtonColor } = req.body;

    if (!cardImage || !titleCard || !titleColor || !planValue || !buttonColor || !textButtonColor || !iconButtonColor) return res.status(404).json({ message: 'All fields must be filled' });

    const newPlan = await plansRepository.createPlan({ cardImage, titleCard, titleColor, planValue, buttonColor, textButtonColor, iconButtonColor });

    res.status(201).json(newPlan);

}

const updatePlan = async (req, res) => {
    const { id } = req.params;
    const { cardImage, titleCard, titleColor, planValue, buttonColor, textButtonColor, iconButtonColor } = req.body;

    if (!cardImage || !titleCard || !titleColor || !planValue || !buttonColor || !textButtonColor || !iconButtonColor) return res.status(404).json({ message: 'All fields must be filled' });

    const updatedPlan = await plansRepository.updatePlan(id, { cardImage, titleCard, titleColor, planValue, buttonColor, textButtonColor, iconButtonColor });

    res.status(200).json(updatedPlan);
}

const deletePlan = async (req, res) => {
    const { id } = req.params;

    const deletedPlan = await plansRepository.deletePlan(id);

    res.status(200).json(deletedPlan);
}

module.exports = {
    getAllPlans,
    getPlanById,
    createPlan,
    updatePlan,
    deletePlan,
}