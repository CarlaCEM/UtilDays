import UtilService from "../Utils/UtilService";

describe("UtilService", () => {
  test("Deve adicionar corretamente dias úteis ignorando finais de semana", () => {
    const startDate = new Date("2024-11-25T21:21:44.000Z"); // Segunda-feira
    const result = UtilService.addUtilDays(startDate, 5); // Adiciona 5 dias úteis
    expect(result.toISOString()).toBe("2024-12-02T21:21:44.000Z"); // Segunda-feira seguinte
  });

  test("Deve ignorar finais de semana e feriados ao adicionar dias úteis", () => {
    const startDate = new Date("2024-11-29T21:21:44.000Z"); // Sexta-feira
    const result = UtilService.addUtilDays(startDate, 10); // Adiciona 10 dias úteis
    expect(result.toISOString()).toBe("2024-12-13T21:21:44.000Z"); // Sexta-feira
  });

  test("Deve lidar corretamente com feriados em dias úteis", () => {
    const startDate = new Date("2024-11-25T21:21:44.000Z"); // Segunda-feira
    const result = UtilService.addUtilDays(startDate, 2); // Adiciona 2 dias úteis
    expect(result.toISOString()).toBe("2024-11-27T21:21:44.000Z"); // Quarta-feira
  });

  test("Deve considerar corretamente um feriado caindo no fim de semana", () => {
    const startDate = new Date("2024-12-20T21:21:44.000Z"); // Sexta-feira
    const result = UtilService.addUtilDays(startDate, 3); // Adiciona 3 dias úteis
    expect(result.toISOString()).toBe("2024-12-26T21:21:44.000Z"); // Quinta-feira
  });
  test("Deve calcular corretamente com startDate em 24/11/2024 às 21:21:44", () => {
    const startDate = new Date("2024-11-24T21:21:44.000Z"); // Domingo
    const result = UtilService.addUtilDays(startDate, 10); // Adiciona 10 dias úteis
    expect(result.toISOString()).toBe("2024-12-06T21:21:44.000Z"); // Sexta-feira
  });
});
