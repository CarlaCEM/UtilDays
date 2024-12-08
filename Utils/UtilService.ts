class UtilService {
  private feriados: { month: number; day: number }[];

  constructor() {
    this.feriados = [
      { month: 0, day: 1 }, // 1 de Janeiro
      { month: 3, day: 21 }, // 21 de Abril
      { month: 4, day: 1 }, // 1 de Maio
      { month: 8, day: 7 }, // 7 de Setembro
      { month: 9, day: 12 }, // 12 de Outubro
      { month: 10, day: 2 }, // 2 de Novembro
      { month: 10, day: 15 }, // 15 de Novembro
      { month: 10, day: 18 }, // 18 de Novembro
      { month: 11, day: 25 }, // 25 de Dezembro
    ];
  }

  public addUtilDays(date: Date, days: number): Date {
    const newDate = new Date(date); // Cria uma cópia para evitar mutações

    while (days > 0) {
      newDate.setUTCDate(newDate.getUTCDate() + 1);

      const isWeekend = newDate.getUTCDay() === 0 || newDate.getUTCDay() === 6;
      const isHoliday = this.feriados.some(
        (feriado) =>
          feriado.month === newDate.getUTCMonth() &&
          feriado.day === newDate.getUTCDate()
      );

      // Apenas decrementa se não for final de semana nem feriado
      if (!isWeekend && !isHoliday) {
        days--;
      }
    }

    return newDate;
  }
}

export default new UtilService();
