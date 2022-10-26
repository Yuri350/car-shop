import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const cardZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number().int().gte(2).lte(4),
  seatsQty: z.number().int().gte(2).lte(7),
});

type ICar = z.infer<typeof cardZodSchema>;

export { ICar, cardZodSchema };
