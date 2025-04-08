
import users from './MocData/Users'
const AuthService = {
    
    login: async (email) => {
      return new Promise((resolve, reject) => {
       
        const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  
        if (user) {
          sessionStorage.setItem("user", JSON.stringify(user)); 
          resolve(user);
        } else {
          reject(new Error("المستخدم غير موجود"));
        }
      });
    },
  
    logout: () => {
      sessionStorage.removeItem('user');
    },
  
    getUser: () => {
      return JSON.parse(sessionStorage.getItem('user'));
    },
  
    isAuthenticated: () => {
      return !!sessionStorage.getItem('user');
    },
  
    getRole: () => {
      const user = AuthService.getUser();
      return user ? user.role : null;
    }
  };
  
  export default AuthService;
  