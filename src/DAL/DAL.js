import axios from 'axios'

let instance = axios.create({
  withCredentials:true,
  baseURL:"https://social-network.samuraijs.com/api/1.0/",
  headers:{
    "API-KEY":"af7ee61f-2628-4d27-8775-8003596d5859"
  }
})

export const request = {
  getUsers  (currentPage,pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,{
    })
  },
  profile(userId){
    return instance.get(`profile/${userId}`)
  },
  auth (){
    return instance.get(`auth/me`)
  },
  loginn(email,password,rememberMe){
    return instance.post('auth/login',{email,password,rememberMe})
  },
  logout(){
      return instance.delete('auth/login')
  } ,
  follow(userId){
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId){
    return instance.delete(`follow/${userId}`)
  }
}