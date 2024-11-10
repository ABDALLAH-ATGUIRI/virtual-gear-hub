import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: "login",
				method: "GET",
				params: { ...credentials },
			}),
		}),
		register: builder.mutation({
			query: (credentials) => ({
				url: "register",
				method: "POST",
				body: credentials,
			}),
		}),
		logout: builder.mutation({
			query: (credentials) => ({
				url: "logout",
				method: "POST",
				body: credentials,
			}),
		}),
		refreshToken: builder.mutation({
			query: (credentials) => ({
				url: "refresh-token",
				method: "POST",
				body: credentials,
			}),
		}),
		authUser: builder.query({
			query: () => ({
				url: "me",
				method: "GET",
			}),
		}),
	}),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
  useAuthUserQuery
} = authApiSlice;
