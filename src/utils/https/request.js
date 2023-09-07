
import axios from './AxiosInterceptor';

export async function apiPost(url, payload, header = {}) {
  try {
    const { data } = await axios.post(url, payload, {
      headers: header,
    });
    return data;
  } catch (error) {
    console.log('🚀 ~ apiPost ~ error:', error);
    const response = {
      data: undefined,
      error: 1,
      message: 'system_error',
    };
    return response;
  }
}

export async function apiGet(url, header = {}) {
  try {
    const { data } = await axios.get(url, {
      headers: header,
    });
    return data;
  } catch (error) {
    console.log('🚀 ~ apiGet ~ error:', error);
    const response = {
      data: undefined,
      error: 1,
      message: 'system_error',
    };
    return response;
  }
}
