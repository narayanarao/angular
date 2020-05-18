export class Product {
  private _productId: number;
    public get productId(): number {
        return this._productId;
    }
    public set productId(value: number) {
        this._productId = value;
    }
  private _productName: string;
    public get productName(): string {
        return this._productName;
    }
    public set productName(value: string) {
        this._productName = value;
    }
  private _productQuanity: number;
    public get productQuanity(): number {
        return this._productQuanity;
    }
    public set productQuanity(value: number) {
        this._productQuanity = value;
    }
  private _productPrice: number;
    public get productPrice(): number {
        return this._productPrice;
    }
    public set productPrice(value: number) {
        this._productPrice = value;
    }

  constructor(
      
  ){}
}
