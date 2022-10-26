import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string({
    required_error: 'Model é necessario',
    invalid_type_error: 'Model deve ser uma string',
  }).min(3, { message: 'Model deve ter no minimo 3 ou mais caracteres' }),
  year: z.number({
    required_error: 'ano é necessario',
    invalid_type_error: 'o ano deve ser um numero',
  })
    .int({ message: 'ano deve ser um inteiro' })
    .gte(1900, { message: 'ano deve ser igual ou maior que 1900' })
    .lte(2022, { message: 'ano deve ser menor ou igual que 2022' }),
  color: z.string({
    required_error: 'Cor é necessario',
    invalid_type_error: 'Cor deve ser uma string',
  }).min(3, { message: 'Cor deve ter no minimo 3 ou mais caracteres' }),
  status: z.boolean({
    required_error: 'status é necessario',
    invalid_type_error: 'status deve ser um numero',
  }).optional(),
  buyValue: z.number({
    required_error: 'valor de compra é necessario',
    invalid_type_error: 'valor de compra deve ser um numero',
  }).int({ message: 'valor de compra deve ser um inteiro' }),
});

type IVehicle = z.infer<typeof VehicleZodSchema>;

export { IVehicle, VehicleZodSchema };