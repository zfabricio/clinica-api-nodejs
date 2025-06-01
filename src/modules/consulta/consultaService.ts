import { Consulta } from "models";


export const consultaService = {
    async getAll() {
        return await Consulta.findAll();
    },

    async getById(id: number) {
        return await Consulta.findByPk(id);
    },

    async create(data: any) {
        return await Consulta.create(data);
    },

    async update(id: number, data: any) {
        const consulta = await Consulta.findByPk(id);
        if (!consulta) throw new Error('Consulta não encontrado');
        await consulta.update(data);
        return consulta;
    },

    async delete(id: number) {
        const consulta = await Consulta.findByPk(id);
        if (!consulta) throw new Error('Consulta não encontrado');
        await consulta.destroy();
        return;
    },
};
