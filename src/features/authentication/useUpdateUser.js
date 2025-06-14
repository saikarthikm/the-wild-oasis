import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user); //to set the details without having to wait for React Query to fetch details when we leave the site

      // queryClient.invalidateQueries({ queryKey: ["user"] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
