'use strict';

const axios = require('axios');
const { fetchPeople } = require('../fetch-people');
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

    const responses = new Array(num).fill('').map(() => JSON.parse(JSON.stringify(response)));

    responses.forEach((r, i) => {
        r.data.metadata.paging.current_page = i + 1;
        r.data.metadata.paging.next_page = i + 2 > num ? null : i + 2;
    });

    return responses;
}

describe('fetchPeople', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should page correctly', async () => {
        const responses = makePagingResponses(5);

        axios.get.mockResolvedValueOnce(responses[0]);
        axios.get.mockResolvedValueOnce(responses[1]);
        axios.get.mockResolvedValueOnce(responses[2]);
        axios.get.mockResolvedValueOnce(responses[3]);
        axios.get.mockResolvedValueOnce(responses[4]);

        await fetchPeople();

        expect(axios.get).toHaveBeenCalledTimes(5);
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

        const actual = await fetchPeople();
        const expected = [
            {
                name: 'Steven Pease',
                email: 'sakatius@gmail.com',
                title: 'Software Engineer'
            },
            {
                name: 'Possibly Duplicate',
                email: 'sakatiuss@gmail.com',
                title: 'My Job'
            },
            {
                name: 'SomethingNewHere Here1',
                email: 'last@me.com',
                title: 'Baby Yoda Keeper'
            },
            {
                name: 'Something New Newer',
                email: 'newemailisnew@menew.com',
                title: 'My Job Is New'
            },
            { name: 'Testers Two', email: 'testt@gmail.com', title: 'Testing' },
            {
                name: 'Keagan Tromp',
                email: 'raa_beetty@google.com',
                title: 'Central Assurance Administrator'
            },
            {
                name: 'Sheridan Bogisich',
                email: 'erik@lubowitz.name',
                title: 'Lead Applications Planner'
            },
            {
                name: 'Marisa Casper',
                email: 'amixe@lindgren.info',
                title: 'Direct Security Representative'
            },
            {
                name: 'Griffin Hand',
                email: 'mamixe@lindgren.info',
                title: 'International Usability Agent'
            },
            {
                name: 'Mikel Reynolds',
                email: 'george_aiegwnd@boyer.name',
                title: 'Global Solutions Technician'
            }
        ];

        expect(actual).toEqual(expected);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });
});