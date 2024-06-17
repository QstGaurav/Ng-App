import { AbstractControl, FormControl } from '@angular/forms';

export class CustomValidator {
    static noSpaceAllowed(control: FormControl){
        if(control.value != null && control.value.indexOf(' ') != -1){
            return {noSpaceAllowed: true}
        }
        return null;
    
  }
  static checkUsername(control: AbstractControl): Promise<any> {
    return usernameAllowed(control.value);
  }
}

function usernameAllowed(username: string) {
  const takenUsername = ['abc', 'xyz'];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (takenUsername.includes(username)) {
        resolve({ checkUsername: true });
      } else {
        resolve(null);
      }
    }, 5000);
  });
}
