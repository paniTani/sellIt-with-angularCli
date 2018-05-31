export class ProductsList{
  public id: string;
  public theme: string;
  public images: string[];

  constructor( json:any ) {
    this.id = json.id;
    this.theme = json.theme;
    this.images = json.images;

  }
}
