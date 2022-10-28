import { expect } from 'chai';
import { Request, Response } from 'express';
import * as sinon from 'sinon';
import CarController from '../../../controllers/cars.controller';
import CarModel from '../../../models/cars.models';
import CarService from '../../../services/cars.service';
import {
	carMock,
	carMockWithId,
	carMockForChange,
	carMockForChangeWithId,
	carMockArray,
} from '../../mocks/carMock';


describe('Car Controller', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request; 
  const res = {} as Response;

  beforeEach(async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore()
  })

  describe('Create Car', () => {
    beforeEach(() => {
      sinon.stub(carService, 'create').resolves(carMock);
    })

    it('Success', async () => {

      req.body = carMock;
      await carController.create(req, res);

      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(201)).to.be.true;

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(carMock)).to.be.true;
    });
  });

  describe('Read Car', () => {
    beforeEach(() => {
      sinon.stub(carService, 'read').resolves(carMockArray);
    })

    it('Success', async () => {
      await carController.read(req, res);

      const jsonStub = res.json as sinon.SinonStub;
      expect(jsonStub.calledWith(carMockArray)).to.be.true;
      
      const statusStub = res.status as sinon.SinonStub;
      expect(statusStub.calledWith(200)).to.be.true;
    });
  });

  // describe('ReadOne Car', () => {
  //   beforeEach(() => {
  //     sinon.stub(carService, 'readOne').resolves(carMock);
  //   })

  //   it('Success', async () => {
  //     req.params = { id: carMockWithId._id };
  //     await carController.readOne(req, res);

  //     expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
  //     expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
  //   });
  // });

  // describe('Update Car', () => {
  //   it('Success', async () => {
  //     sinon.stub(carService, 'update').resolves(carMockWithId)

  //     await carController.update(req, res)

  //     expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
  //     expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
  //   })
  // })

});