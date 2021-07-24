'use strict';

const axios = require('axios');
const { fetchPeople } = require('../app');

jest.mock('axios');

describe('fetchPeople', () => {
    it('should fetch people', async () => {
        const response = {
            data: {
                metadata: {},
                data: []
            },
            headers: {
                etag: '',
                date: ''
            }
        };

        axios.get.mockResolvedValue(response)
    });
})