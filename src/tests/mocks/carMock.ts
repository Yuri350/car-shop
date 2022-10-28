import  { ICar } from '../../interfaces/ICar';

const carMock:ICar = {
	status: true,
	model: 'ferrari',
  year: 1996,
  color: 'blue',
  buyValue: 10000,
  doorsQty: 4,
  seatsQty: 4,
};

const carMockWithId:ICar & { _id:string } = {
	_id: '62cf1fc6498565d94eba52cd',
  status: true,
	model: 'ferrari',
  year: 1996,
  color: 'blue',
  buyValue: 10000,
  doorsQty: 4,
  seatsQty: 4,
};

const carMockForChange:ICar = {
  status: true,
	model: 'ferrari',
  year: 1996,
  color: 'orange',
  buyValue: 12000,
  doorsQty: 4,
  seatsQty: 4,
};

const carMockForChangeWithId:ICar & { _id:string } = {
	_id: '62cf1fc6498565d94eba52cd',
  status: true,
	model: 'ferrari',
  year: 1996,
  color: 'blue',
  buyValue: 10000,
  doorsQty: 4,
  seatsQty: 4,
};

const carMockArray:ICar[] = [
  {  
    status: true,
    model: 'ferrari',
    year: 1996,
    color: 'blue',
    buyValue: 10000,
    doorsQty: 4,
    seatsQty: 4,},
  {  
    status: true,
    model: 'porsche',
    year: 2010,
    color: 'black',
    buyValue: 50000,
    doorsQty: 2,
    seatsQty: 2,}
  ]

export {
	carMock,
	carMockWithId,
	carMockForChange,
	carMockForChangeWithId,
  carMockArray,
};

// status?: boolean | undefined;
// model: string;
// year: number;
// color: string;
// buyValue: number;
// doorsQty: number;
// seatsQty: number;
