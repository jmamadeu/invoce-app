import { type SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { ClientFormProps, SaveClientForm } from "./save-client-form";
import { useCreateClient } from "@/hooks/api/clients/use-clients";

export const saveClientFormSchemeValidation = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("E-mail is required")
      .email("E-mail format is incorrect"),
    name: yup.string().required("Name is required"),
    companyDetails: yup.object().shape({
      name: yup.string().required("Name is required"),
      address: yup.string().required("Address is required"),
      vatNumber: yup.string().required("Address is required"),
      regNumber: yup.string().required("Address is required"),
      iban: yup.string(),
      swift: yup.string()
    })
  })
  .required();

export const SaveClient = () => {
  const { register, handleSubmit, control, reset } = useForm<ClientFormProps>({
    resolver: yupResolver(saveClientFormSchemeValidation)
  });

  const { isLoading, mutateAsync: createUser } = useCreateClient();

  const onSubmit: SubmitHandler<ClientFormProps> = async (data) => {
    try {
      const createUserResponse = await createUser(data);

      if (!createUserResponse.success) {
        toast.error(`An error occurred while trying to create a client`);
        return;
      }

      toast.success("Client Created successfully");
      reset();
    } catch (err) {
      const { response } = err as AxiosError<string>;

      toast.error(`An error occurred: ${response?.data}`);
    }
  };

  return (
    <SaveClientForm
      registerField={register}
      handleFormSubmit={handleSubmit(onSubmit)}
      formControl={control}
      isSubmitting={isLoading}
    />
  );
};
