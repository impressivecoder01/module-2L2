//as constant assertion
// enum UserRoles {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer'
// }
//  const canEdit = (role: UserRoles) => {
//     if(role === UserRoles.Admin || role === UserRoles.Editor){
//         return true
//     }
//     else{
//         return false
//     }
//  }
const User = {
    Admin : 'ADMIN',
    Editor : 'Editor',
    Viewer : 'Viewer'
} as const
const canEditUser = (role: keyof typeof User) => {
    if(role === User.Admin || role === User.Editor){
        return true
    }
    else{
        return false
    }
 }
 console.log(canEditUser(User.Admin))