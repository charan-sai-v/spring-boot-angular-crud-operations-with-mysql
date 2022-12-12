import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user?: User
  data: any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getUserById(id).subscribe(data => {
      this.user = data
      console.log(this.user)
    })
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    pNo: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateUser(this.user?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}
