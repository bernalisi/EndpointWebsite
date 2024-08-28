import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Select from 'react-select';
import background from '../../assets/images/homepage/Background-colors.svg'; // Replace with your background image path

// Define Yup schemas for each category
const lifeScienceSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  company_email: Yup.string().email("Invalid email address").required("Email is required"),
  company: Yup.string().required("Organization is required"),
  comment: Yup.string(),
});

const healthcareProviderSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  institution: Yup.string().required("Institution is required"),
  role: Yup.string().required("Role is required"),
  comment: Yup.string(),
});

// Define the main schema
const schema = Yup.object().shape({
  category: Yup.string().required("Category is required"),
  fields: Yup.object().when("category", {
    is: "Life Science",
    then: () => lifeScienceSchema,
    otherwise: () => healthcareProviderSchema,
  }),
});

// Define options for the select dropdown
const categories = [
  { value: "Life Science", label: "Life Science" },
  { value: "Healthcare Provider", label: "Healthcare Provider" }
];

export default function ContactForm() {
  const { control, handleSubmit, watch, reset, register, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: "",
      fields: {},
    },
  });

  const selectedCategory = watch("category");

  useEffect(() => {
    // Set default field values when the category changes
    if (selectedCategory === "Life Science") {
      setValue("fields", {
        first_name: "",
        last_name: "",
        company_email: "",
        company: "",
        comment: "",
      });
    } else if (selectedCategory === "Healthcare Provider") {
      setValue("fields", {
        first_name: "",
        last_name: "",
        email: "",
        institution: "",
        role: "",
        comment: "",
      });
    }
  }, [selectedCategory, setValue]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-cover bg-center bg-repeat w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-5 pt-20 pb-20"
      style={{ backgroundImage: `url(${background})` }}>

      {/* Information section */}
      <div className="w-[90%] lg:w-[30%] flex flex-col justify-start text-white">
        <h1 className="text-[50px] font-normal">Contact us</h1>
      </div>

      {/* Form section */}
      <div className="z-50 w-[95%] lg:w-[40%] bg-gray-50 p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 justify-start items-start">
          <label className="w-full text-[15px] font-semibold flex flex-col gap-1">
            I AM
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={categories}
                  placeholder={selectedCategory ? selectedCategory : "Select category"}
                  onChange={(option) => field.onChange(option?.value)}
                />
              )}
            />
          </label>

          {errors.category && <p className="text-red-500">{errors.category.message}</p>}

          {/* Dynamically render fields based on the selected category */}
          {selectedCategory && Object.keys(watch("fields")).map((fieldKey) => (
            <div key={fieldKey}>
              <label className="flex flex-col gap-2 justify-start items-stretch text-[15px] font-semibold">
              {fieldKey.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase()}
                <input
                  {...register(`fields.${fieldKey}`)}
                  placeholder={`Enter ${fieldKey}`}
                  className="bg-white px-6 h-14 py-1 border border-gray-400"
                />
                {errors.fields?.[fieldKey] && <p className="text-red-500">{errors.fields[fieldKey].message}</p>}
              </label>
            </div>
          ))}

          <button type="submit" className="max-xs:w-full sm:w-40 h-10 px-5 py-1 flex flex-row items-center justify-center font-semibold border bg-violet-900 border-violet-900 text-white transition duration-150 ease-in-out hover:opacity-70">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
