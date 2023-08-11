import { response } from "msw";
import { API_URL, DATA_FETCH_ERROR } from "./mocks/constants";
import { Headers } from "./types";

class apiService {
  private headers: Headers = {
    "Content-Type": "application/json",
  };

  fetchMockData = async () => {
    return fetch(`${API_URL}/testEndpoint`, {
      method: "GET",
      credentials: "same-origin",
      headers: this.getHeaders(),
    })
      .then((response) => apiService.handleErrors(response))
      .then((response) => response.json());
  };

  private getHeaders(additionalHeaders: Headers = {}): Headers {
    const headers: Headers = { ...this.headers, ...additionalHeaders };
    return headers;
  }
  private static handleErrors(response: Response): Response {
    if (!response.ok) {
      throw new Error(DATA_FETCH_ERROR);
    }
    return response;
  }
}

export default new apiService();
