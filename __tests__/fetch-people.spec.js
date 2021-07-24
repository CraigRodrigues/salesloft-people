'use strict';

const axios = require('axios');
const { fetchPeople } = require('../app');
const samplePeopleData = require('./data/sample-people-data.json');

jest.mock('axios');

function makePagingResponses(num) {
    const response = {
        data: {
            metadata: {
                paging: {
                    current_page: 1,
                    next_page: 2
                }
            },
            data: []
        },
        headers: {
            etag: '',
            date: ''
        }
    };

    const responses = new Array(num).fill('').map((r) => JSON.parse(JSON.stringify(response)));

    responses.forEach((r, i) => {
        r.data.metadata.paging.current_page = i + 1;
        r.data.metadata.paging.next_page = i + 2 > num ? null : i + 2;
    });

    return responses;
}

describe('fetchPeople', () => {
    it ('should page correctly', async () => {
        const responses = makePagingResponses(5);

        axios.get.mockResolvedValueOnce(responses[0]);
        axios.get.mockResolvedValueOnce(responses[1]);
        axios.get.mockResolvedValueOnce(responses[2]);
        axios.get.mockResolvedValueOnce(responses[3]);
        axios.get.mockResolvedValueOnce(responses[4]);

        await fetchPeople();
        expect(axios.get).toHaveBeenCalledTimes(6);
    });

    it('should fetch people and map properties correctly', async () => {
        const response = {
            data: {
                metadata: {
                    paging: {
                        current_page: 1,
                        next_page: null
                    }
                },
                data: samplePeopleData
            },
            headers: {
                etag: '',
                date: ''
            }
        };

        axios.get.mockResolvedValue(response);

        const people = await fetchPeople();

        people.forEach((person) => {
            expect(person).toEqual(expect.objectContaining({
                name: expect.any(String),
                email: expect.any(String),
                title: expect.any(String)
            }));
        });
    });
})