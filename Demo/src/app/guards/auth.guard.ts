import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("路由守卫-用户信息：" + localStorage.getItem("user"));



  
  if (localStorage.getItem("user") == undefined)
    return false;
  else
    return true;
};