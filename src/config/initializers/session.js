import { store } from "../../db/store";
import { show, set } from "../../application/services/session";

export const run = async () => {
  const response = await store.dispatch(show());

  if (response.payload.success){
    await store.dispatch(set({
      data: {
        active: true,
        superuser: response.payload.data.user.superuser,
        admin: response.payload.data.user.admin,
        user: response.payload.data.user,
      }
    }))
  }
}
