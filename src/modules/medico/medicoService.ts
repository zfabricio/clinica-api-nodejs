import { Medico } from "./medico";


export const medicoService = {
    async getAll() {
        return await Medico.findAll();
    },

    async getById(id: number) {
        return await Medico.findByPk(id);
    },

    async create(data: any) {
        const medicoExistente = await Medico.findOne({
            where: { crm: data.crm }
        });

        if (medicoExistente) {
            throw new Error('Medico com esse CRM já está cadastrado');
        }
        return await Medico.create(data);
    },

    async update(id: number, data: any) {
        const medico = await Medico.findByPk(id);
        if (!medico) throw new Error('Médico não encontrado');
        await medico.update(data);
        return medico;
    },

    async delete(id: number) {
        const medico = await Medico.findByPk(id);
        if (!medico) throw new Error('Médico não encontrado');
        await medico.destroy();
        return;
    },
};
