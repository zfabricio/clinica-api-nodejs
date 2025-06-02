import { Paciente } from "./paciente";


const pacienteService = {
    async getAll() {
        return await Paciente.findAll();
    },

    async getById(id: number) {
        return await Paciente.findByPk(id);
    },

    async create(data: any) {
        const pacienteExistente = await Paciente.findOne({
            where: { cpf: data.cpf }
        });

        if (pacienteExistente) {
            throw new Error('Paciente com esse CPF já está cadastrado');
        }

        const paciente = await Paciente.create(data);
        return paciente;
    },

    async update(id: number, data: any) {
        const paciente = await Paciente.findByPk(id);
        if (!paciente) throw new Error('Paciente não encontrado');
        await paciente.update(data);
        return paciente;
    },

    async delete(id: number) {
        const paciente = await Paciente.findByPk(id);
        if (!paciente) throw new Error('Paciente não encontrado');
        await paciente.destroy();
        return;
    },
};
export { pacienteService }