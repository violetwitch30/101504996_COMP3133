const expect = require('chai').expect;
const calculator = require('../app/calculator');

describe('Calculator Test', function () {

    // ADDITION
    it('add(5,2) should return 7 - PASS', function () {
        expect(calculator.add(5, 2)).to.equal(7);
    });

    // failing test
    it('add(5,2) should return 8 - FAIL', function () {
        expect(calculator.add(5, 2)).to.equal(8);
    });

    // SUBTRACTION
    it('sub(5,2) should return 3 - PASS', function () {
        expect(calculator.sub(5, 2)).to.equal(3);
    });

    // failing test
    it('sub(5,2) should return 5 - FAIL', function () {
        expect(calculator.sub(5, 2)).to.equal(5);
    });

    // MULTIPLICATION
    it('mul(5,2) should return 10 - PASS', function () {
        expect(calculator.mul(5, 2)).to.equal(10);
    });

    // failing test
    it('mul(5,2) should return 12 - FAIL', function () {
        expect(calculator.mul(5, 2)).to.equal(12);
    });

    // DIVISION
    it('div(10,2) should return 5 - PASS', function () {
        expect(calculator.div(10, 2)).to.equal(5);
    });

    // failing test
    it('div(10,2) should return 2 - FAIL', function () {
        expect(calculator.div(10, 2)).to.equal(2);
    });

});