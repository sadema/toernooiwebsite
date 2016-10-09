/**
 * Created by sjoerdadema on 07/10/16.
 */

export class Card {
  public contentid: string = "";
  public title: string = "";
  public description: string = "";

  constructor(data?) {
    if (data) {
      this.title = data.title;
      this.description = data.description;
    }
  }
}
