import axios from 'axios';
import SaveFullNameApi from './saveFullNameAPI';
jest.mock('axios')

describe('Test Save Data', () => {
    it("save correct data", async () => {
        const correctData = {
            firstName: 'Kan',
            lastName: 'Jirawat'
        }

        await SaveFullNameApi.save(correctData);

        expect(axios.post).toHaveBeenCalledWith("mock.mock", correctData);
    })
})