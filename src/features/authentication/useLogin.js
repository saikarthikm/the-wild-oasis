import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    // onSuccess: () => {
    onSuccess: (user) => {
      // queryClient.setQueriesData(["user", user]); BUG WRONGGGG
      queryClient.setQueryData(["user", user.user]);

      //Manually setting data into react query cache. useUser will later call it using the queryKey, it will use the cache.
      //   console.log(user);

      navigate("/dashboard", { replace: true }); //replaces the history so that you don't click back and gain access to stuff.
    },

    onError: (err) => {
      console.log("Error", err);
      toast.error("Provided email or password is incorrect");
    },
  });

  return { login, isLoading };
}
