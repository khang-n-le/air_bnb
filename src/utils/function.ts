export const ConvertDateToVNDate = (data: string) => {
  const date = new Date(data);

  return `Ngày ${date.getDate()} Tháng ${date.getMonth()} Năm ${date.getFullYear()}`;
};
