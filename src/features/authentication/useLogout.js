import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      // remove user info and queries from localStorage as well.
      queryClient.removeQueries(); // remove all queries
      navigate("/login", { replace: true }); //replaces the history so that you don't click back and gain access to stuff.
    },
  });

  return { logout, isLoading };
}
