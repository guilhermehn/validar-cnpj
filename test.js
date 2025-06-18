const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const validarCnpj = require('./index.js');

describe('validarCnpj', () => {
	it('should return false when the input is not comprised of 14 numbers', () => {
		assert.equal(validarCnpj('1'), false);
		assert.equal(validarCnpj('11'), false);
		assert.equal(validarCnpj('a1111111111111'), false);
		assert.equal(validarCnpj('1111111111111a'), false);
		assert.equal(validarCnpj('aaaaaaaaaaaaaa'), false);
	});

	it('should return false when the input is composed of only repeating numbers', () => {
		assert.equal(validarCnpj('11111111111111'), false);
	});

	it('should return true when the input is a valid cnpj', () => {
		assert.equal(validarCnpj('11444777000161'), true);
	});

	it('should return true when the input is a valid cnpj and has formatting characters', () => {
		assert.equal(validarCnpj('11.444.777/0001-61'), true);
	});

	describe('Alphanumeric values', () => {
		it('should return true for valid cnpj with alphanumeric characters', () => {
			assert.equal(validarCnpj('12.ABC.345/01DE-35'), true);
		});

		it('should return false for invalid cnpj with alphanumeric characters', () => {
			assert.equal(validarCnpj('12.ABC.345/01DE-36'), false);
		});
	});
});
