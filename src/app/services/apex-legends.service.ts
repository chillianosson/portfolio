
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { apexLegendsApiKey } from "../api/api.const";

import { HttpClientService } from "./http-client.service";

@Injectable()
export class ApexLegendsService {

	constructor(
		private _http: HttpClientService
	) { }

	getProfile(username: string = "NxP Cilly", platform: string = "xbl"): Observable<{ data: [] }> {
		return this._http
			.get<{data:[]}>({ url: `https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${username}?TRN-Api-Key=${apexLegendsApiKey}&Accept=application/json&Accept-Encoding=gzip`, cacheMins: 5 })
	}
}