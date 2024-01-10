import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../service/log.service';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrl: './test01.component.css'
})
export class Test01Component implements OnInit, AfterViewInit {
  @ViewChild('div2') div2!: ElementRef;
  //@ViewChild('div2', { static: true }) div2!: ElementRef;
  // 服务
  log: LogService;
  http: HttpClient;
  router: ActivatedRoute;

  preUrl: string = '/api/user';

  userName: string = '';

  userName2: string = '';
  list = [
    { id: '1', name: 'aaa', age: "20" },
    { id: '2', name: 'bbb', age: "22" },
    { id: '3', name: 'ccc', age: "23" }
  ];
  date = new Date();

  constructor(httpClient: HttpClient, activatedRoute: ActivatedRoute,
    private el: ElementRef, private renderer2: Renderer2, logService: LogService) {
    this.userName = '山田';
    this.http = httpClient;
    this.router = activatedRoute;
    this.log = logService;
  }

  ngOnInit(): void {
    this.log.log("Test01Component-开始");

    this.router.queryParamMap.subscribe(res => {
      if (res.get('name'))
        this.log.log("Test01Component-" + res.get('name'));
    })
    this.renderer2.setStyle(this.el.nativeElement.querySelector('#btn1'), 'background', 'yellow');
  }

  updateName() {
    this.log.log(this.userName);
  }

  springBoot() {
    this.http
      .get(`${this.preUrl}/getUser?userName=${this.userName}`)
      //.get(`${this.preUrl}/getUser`)
      .subscribe((res: any) => {
        this.log.log("Test01Component-" + res.name);
        alert(res.name);
      });
  }
  
  // 会在 Angular 完全初始化了组件的视图后调用
  ngAfterViewInit() {
    this.renderer2.setStyle(this.div2.nativeElement, 'background', 'red');
  }
}