import { ISummary } from "./isummary";

export interface IPersone {
  id: number,
  name: string,
  gender: string,
  birthDate: string,
  heightCm: number,
  weightKg: number,
  bmi: number,
  summary: ISummary[]
}
