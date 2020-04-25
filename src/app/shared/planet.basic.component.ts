export abstract class PlanetComponent {
   loading: boolean;
   loadingMessage: string;

  protected constructor(...arg: any) {}

  public showLoading(message: string = 'Loading...') {
    this.loadingMessage = message;
    this.loading = true;
  }

  public hideLoading() {
    this.loading = false;
    this.loadingMessage = '';
  }
}
