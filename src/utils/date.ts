import dayjs from "dayjs";
export const FORMAT_DD_MMM_YYYY = "DD MMM YYYY";
export const FORMAT_DD_MM_YYYY_WITH_SLASH = "DD/MM/YYYY";

export function formatDate(date: string | Date, format: string = FORMAT_DD_MMM_YYYY): string {
  try {
    return dayjs(date).format(format);
  } catch (error) {
    return "";
  }
}
