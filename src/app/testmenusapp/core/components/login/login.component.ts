/**
 * Created by: deepali arvind
 * Date: 04/10/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Loginmodel } from './../../models/loginmodel.model'
@Component(
{
	selector: 'login',
	templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit
{
	
	loginmodel: Loginmodel;
	
	
	constructor( private router: Router)
	{
		this.loginmodel = new Loginmodel();
		
	}
	ngOnInit()
	{
	}
	
	
}

