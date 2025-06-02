import { Pagamento } from "./pagamento";

export const pagamentoService = {
  async getAll() {
    return await Pagamento.findAll();
  },

  async getById(id: number) {
    return await Pagamento.findByPk(id);
  },

  async create(data: any) {
    return await Pagamento.create(data);
  },

  async update(id: number, data: any) {
    const pagamento = await Pagamento.findByPk(id);
    if (!pagamento) throw new Error('Pagamento não encontrado');
    await pagamento.update(data);
    return pagamento;
  },

  async delete(id: number) {
    const pagamento = await Pagamento.findByPk(id);
    if (!pagamento) throw new Error('Pagamento não encontrado');
    await pagamento.destroy();
    return;
  },
};
