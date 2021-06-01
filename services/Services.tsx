import axios from 'axios';

export default class Services {
  static api = axios.create({
    baseURL: 'http://app.grupobemmult.com.br/v2/api/',
    responseType: 'json'
  });

  static async oxicareLogin(usuario: {login: string, senha: string}) {
    return await this.api
      .post('Login/index', usuario)
      .then((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        return error;
      });
  }
}
