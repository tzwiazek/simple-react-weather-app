import { BehaviorSubject } from 'rxjs';

export class AppService {
  static toggleLocation$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
