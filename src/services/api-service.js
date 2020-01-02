class ApiService {

    postRequester = async (request) => {
        const address = '/api/';

        const result = await fetch(address, {
                method: 'POST',
                body:JSON.stringify(request),
                headers: {'Content-Type': 'application/json; charset=utf-8'}
            }
        );

        if (!result.ok) {
            throw new Error(`Could not fetch ${address}, received ${result.status}`);
        }

        return await result.json();
    };

    //TODO: request method example.
    /*request = async ({token = ''}) => {
        const request = {cmd: 'cmd', token};
        return await this.postRequester(request);
    };*/
};


export default ApiService;
