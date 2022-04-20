import { Control, UseFormRegister, useFormState } from "react-hook-form";
import type { FormEvent } from "react";

import { FormInput } from "@/components/ui";
import { ClientType } from "@/hooks/api/clients/use-clients";

export type ClientFormProps = Omit<ClientType, "id">;

type SaveClientFormProps = {
  registerField: UseFormRegister<ClientFormProps>;
  handleFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  formControl: Control<ClientFormProps, any>;
  isSubmitting: boolean;
};

export const SaveClientForm: React.FC<SaveClientFormProps> = ({
  registerField,
  handleFormSubmit,
  formControl,
  isSubmitting
}) => {
  const { errors } = useFormState({ control: formControl });

  return (
    <form
      onSubmit={(event) => handleFormSubmit(event)}
      className="bg-gray-10 rounded-xl p-4 py-8 flex flex-col gap-2 w-full"
    >
      <h3 className="text-gray-200 font-headline mb-4 text-2xl text-center">
        Save Client
      </h3>
      <div className="flex gap-4 flex-row w-full">
        <FormInput
          type="text"
          label="Contact Name"
          register={registerField("name")}
          error={errors.name?.message}
        />
        <FormInput
          type="text"
          label="Contact Email"
          register={registerField("email")}
          error={errors.email?.message}
        />
      </div>
      <div className="flex gap-4 flex-row w-full">
        <FormInput
          type="text"
          placeholder="Toptal"
          label="company's name"
          register={registerField("companyDetails.name")}
          error={errors?.companyDetails?.name?.message}
        />
        <FormInput
          type="text"
          placeholder="San Francisco"
          label="Company's address"
          register={registerField("companyDetails.address")}
          error={errors?.companyDetails?.address?.message}
        />
      </div>
      <div className="flex gap-4 flex-row w-full">
        <FormInput
          type="text"
          placeholder="1223"
          label="Your vat number"
          register={registerField("companyDetails.vatNumber")}
          error={errors?.companyDetails?.vatNumber?.message}
        />
        <FormInput
          type="text"
          placeholder="1223"
          label="Your reg number"
          register={registerField("companyDetails.regNumber")}
          error={errors?.companyDetails?.regNumber?.message}
        />
      </div>
      <div className="flex gap-4 flex-row w-full">
        <FormInput
          type="text"
          placeholder="BE32432934893"
          label="Your Iban"
          register={registerField("companyDetails.iban")}
          error={errors?.companyDetails?.iban?.message}
        />
        <FormInput
          type="text"
          placeholder="TOP123"
          label="Your Swift"
          register={registerField("companyDetails.swift")}
          error={errors?.companyDetails?.swift?.message}
        />
      </div>

      <div className="flex flex-col gap-8 mt-8">
        <button
          type="submit"
          title="sign in"
          className="bg-purple-100 text-white text-base py-3 rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
};
