export default class homeService {
  constructor(basicService) {
    Object.assign(this, {
      basicService
    })
  }
  get(url, data) {
    return this.basicService.get({'url':url, 'params':data});
  }
  post(url, data) {
    return this.basicService.post({'url':url, 'data':data});
  }

}
homeService.$inject = ['basicService']