import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';
// https://zod.dev/?id=numbers

const carZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number({
    required_error: 'doorsQty é necessario',
    invalid_type_error: 'doorsQty deve ser um numero',
  }).int({ message: 'doorsQty deve ser um inteiro' })
    .gte(2, { message: 'doorsQty deve ser igual ou maior que 2' })
    .lte(4, { message: 'doorsQty deve ser igual ou menor que 4' }),
  seatsQty: z.number({
    required_error: 'seatsQty é necessario',
    invalid_type_error: 'seatsQty deve ser um numero',
  }).int({ message: 'seatsQty deve ser um inteiro' })
    .gte(2, { message: 'seatsQty deve ser igual ou maior que 2' })
    .lte(7, { message: 'seatsQty deve ser igual ou menor que 7' }),
});

type ICar = z.infer<typeof carZodSchema>;

export { ICar, carZodSchema };
