import { UseDeleteUser } from "../queries/req.query"

export const handleEdit = (setEdit, edit) => {
   setEdit(!edit) 
}

export const handleDelete = (userId) => {
   return UseDeleteUser(userId);
}