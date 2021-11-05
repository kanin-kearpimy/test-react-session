import axios from 'axios';
import SaveFullNameApi from './saveFullNameAPI';
import mockData from './mockData';
jest.mock('axios')
jest.mock()

describe('Test Save Data', () => {
    it("save correct data", async () => {
        const correctData = {
            firstName: 'Kan',
            lastName: 'Jirawat'
        }

        await SaveFullNameApi.save(correctData);

        expect(axios.post).toHaveBeenCalledWith("mock.mock", correctData);
    })

    it("fetch appropriate data", async () => {
        const fetchData = await SaveFullNameApi.fetch();

        expect(fetchData).toEqual(mockData)
    })
})