import { apiSlice } from '../api/apiSlice';

export const teamApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeams: builder.query({
            query: (email) => `/teams?member_like=${email}`,
        }),
        getAllTeams:builder.query({
            query:()=>"/teams"
        }),
        createTeams: builder.mutation({
            query: (data) => ({
                url: '/teams',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // pessimistically cache update start
                const res = await queryFulfilled;
                dispatch(
                    apiSlice.util.updateQueryData('getTeams', arg?.member, (draft) => {
                        draft.push(res.data);
                    })
                );
            },
        }),
        editTeam: builder.mutation({
            query: ({ id, prevMember, data }) => ({
                url: `/teams/${id}`,
                method: 'PATCH',
                body: data,
            }),
            async onQueryStarted({ id, prevMember, data }, { queryFulfilled, dispatch }) {
                // pessimistically cache update start
                const res = await queryFulfilled;
            
                dispatch(
                    apiSlice.util.updateQueryData('getTeams', prevMember, (draft) => {
                        const draftData = draft.find((m) => m.id == res?.data.id);
                        draftData.member = res?.data?.member;
                        draftData.users = res?.data?.users;
                    })
                );
            },
        }),
    }),
});

export const { useGetTeamsQuery, useCreateTeamsMutation, useEditTeamMutation,useGetAllTeamsQuery } = teamApi;
