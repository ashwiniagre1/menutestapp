/**
 * 
 * Date: 04/10/2018	
 */
export class Loginmodel
{
	
	private _email: string;
	private _password: string;
	
	constructor() { 
	}
	
	set email(value: string) {
		this._email = value;
	}
	get email() : string {
		return this._email;
	}
	set password(value: string) {
		this._password = value;
	}
	get password() : string {
		return this._password;
	}
	
}
