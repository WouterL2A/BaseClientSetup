@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  get(endpoint: string): Observable<any> {
    return this.http.get(`/api/${endpoint}`);
  }
}
