import { apiSlice } from "../api/apiSlice";

export const projectApi=apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query({
            query:()=> `/projects`
        }),
        addProject:builder.mutation({
            query:(data)=>({
                url:"/projects",
                method:"POST",
                body:data
            }),
            async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
                // pessimistically cache update start
                const res = await queryFulfilled;
            
                dispatch(
                    apiSlice.util.updateQueryData('getProjects', undefined, (draft) => {
                   draft.unshift(res.data)  
                    })
                );
            },
        }),
        editProject:builder.mutation({
            query:({id,data})=>({
                url:`/projects/${id}`,
                method:"PATCH",
                body:data
            }),
            async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
                // pessimistically cache update start
                const res = await queryFulfilled;
            
                dispatch(
                    apiSlice.util.updateQueryData('getProjects', undefined, (draft) => {
                         const draftData = draft.find((m) => m.id == res?.data.id);
                         draftData.status = res?.data?.status;  
                    })
                );
            },
        }),
        deleteProject:builder.mutation({
            query:(id)=>({
                url:`/projects/${id}`,
                method:"DELETE",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // pessimistically cache update start
             const patchResult=   dispatch(
                    apiSlice.util.updateQueryData(
                        'getProjects',
                         undefined,
                         (draft) => {   
                         return draft.filter((p)=>p.id!==arg) 
                         })
                );

                try{
                    await queryFulfilled;
                }catch{
                    patchResult.undo()
                }
            
            },
        })
    })
})

export const {
    useGetProjectsQuery,
    useAddProjectMutation,
    useEditProjectMutation,
    useDeleteProjectMutation
}=projectApi