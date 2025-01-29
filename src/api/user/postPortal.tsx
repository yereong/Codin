import axios, {AxiosResponse} from 'axios';

const BASE_URL = 'https://www.codin.co.kr/api';

export const PostPortal = async (studentId:string, password:string): Promise<any> => {
    console.log("전송 데이터", studentId, password);
    axios.defaults.withCredentials = true;
    try{
        const response: AxiosResponse<any> = await axios.post(
            `${BASE_URL}/auth/portal`,
            {
                studentId: studentId,
                password: password
            },
            {withCredentials: true}
        );

        console.log(response.data);
        console.log(response.headers);
        return response;
      } catch (error: any) {
        if (error.response) {
          const { status, data } = error.response;
          console.error('Error response:', status, data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
    
        throw error;
      }
}