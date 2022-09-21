import { apiSlice } from "../api/apiSlice";

export const teamApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
       getTeams:builder.query({
        query:(email)=>`/teams?member_like=${email}`
       }),
       createTeams:builder.mutation({
        query:(data)=>({
            url:"/teams",
            method:"POST",
            body:data
        })
       }),
       editTeam:builder.mutation({
        query:({id,data})=>({
            url:`/teams/${id}`,
            method:"PATCH",
            body:data
        })
       })
    })
})

export const {useGetTeamsQuery,useCreateTeamsMutation,useEditTeamMutation}=teamApi
  // "users": [
      //   {
      //     "email": "test@test.com",
      //     "name": "test",
      //     "avatar": "https://faces-img.xcdn.link/thumb-lorem-face-2929_thumb.jpg",
      //     "id": 3
      //   }
      // ],