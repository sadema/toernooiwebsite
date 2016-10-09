/**
 * Created by sjoerdadema on 09/10/16.
 */

export class Header {
  public contentid: string = "";
  public imageUrl: string = "";

  constructor(data?) {
    if (data) {
      this.contentid = data.contentid;
      this.imageUrl = data.imageUrl;
    }
  }
}
