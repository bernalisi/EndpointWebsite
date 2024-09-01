import { useEffect, useState } from 'react';
import { useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import background from '../../assets/images/homepage/Snake_violet.svg'; // Replace with your background image path
import ChevronDown from "../../assets/images/ui/Chevron down black.svg"
import ModalSuccessOpen from "../../components/contact-us/ModalSuccessOpen"

// Define Yup schemas for each category
const lifeScienceSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  company_email: Yup.string().email("Invalid email address").required("Email is required"),
  company: Yup.string().required("Organization is required"),
});

const healthcareProviderSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  institution: Yup.string().required("Institution is required"),
  role: Yup.string().required("Role is required"),
});

// Define the main schema
const schema = Yup.object().shape({
  category: Yup.string().required("Category is required"),
  fields: Yup.object().when("category", {
    is: "Life Science",
    then: () => lifeScienceSchema,
    otherwise: () => healthcareProviderSchema,
  }),
  comment: Yup.string().optional(),
});

// Define options for the select dropdown
const categories = [
  { value: "Life Science", label: "Life Science" },
  { value: "Healthcare Provider", label: "Healthcare Provider" }
];

export default function ContactForm() {
  const {handleSubmit, watch, reset, register, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: "",
      fields: {},
      comment: "",
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
      });
    } else if (selectedCategory === "Healthcare Provider") {
      setValue("fields", {
        first_name: "",
        last_name: "",
        email: "",
        institution: "",
        role: "",
      });
    }
  }, [selectedCategory, setValue]);

  // Modal after submit
  const [modalOpen, setModalOpen] = useState(false)
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data);
    setModalOpen(true);
    reset();
  };

  const closeModal = () => {
    setModalOpen(false);
    navigate("/")
  };

  // code to resize bg image snake

  const [bgSize, setBgSize] = useState(window.innerWidth < 600? '1000px' : '2900px')

  useEffect(() => {
    const handleResize = () => {
      setBgSize(window.innerWidth < 600? '1000px' : '2900px');
    }

    window.addEventListener('resize',handleResize)

    return() => window.removeEventListener('resize', handleResize);
  },[]);

  return (
    <div className="bg-black bg-center w-full min-h-[1100px] max-h-auto lg:min-h-[1200px] lg:max-h-auto flex flex-col justify-start items-center lg:pt-40 gap-5 pt-20 pb-20"
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: bgSize, // Example dimensions for width and height
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>

      {/* Modal component render when mdalOpen = true */}
      <ModalSuccessOpen isOpen={modalOpen} onClose={closeModal}/>

      {/* Information section */}
      <div className="w-[90%] lg:w-[50%] flex flex-col justify-start lg:justify-start text-white">
        <h1 className="text-[50px] font-normal">Contact us</h1>
      </div>

      {/* Form section */}
      <div className="w-[90%] lg:w-[50%] bg-gray-50 p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 justify-start items-start">
          <label className="w-full text-[15px] font-semibold flex flex-col gap-1 relative">
            I AM
            <div className="relative">
              <select
                {...register("category")}
                className="appearance-none w-full h-14 p-2 border border-gray-300 font-light hover:border-violet-900 focus:outline-none focus:border-violet-900"
                defaultValue=""
              >
                <option value="" disabled>Select category</option>
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              {/* Chevron Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <img src={ChevronDown} alt="Chevron down icon" className="h-6 rotate-90"/>
              </div>
            </div>
          </label>

          {errors.category && <p className="text-red-500">{errors.category.message}</p>}

          {/* Dynamically render fields based on the selected category */}
          {selectedCategory &&

            <div className="w-full flex flex-col gap-5">
             {
              Object.keys(watch("fields")).map((field) => (
                <div key={field} className="w-full">
                  <label className="flex flex-col gap-2 justify-start items-stretch text-[15px] font-semibold">
                  {field.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase()}
                    <input className="w-full h-14 p-2 border border-gray-300 hover:border-violet-900 font-light rounded-none"
                      {...register(`fields.${field}`)}
                    />
                    {errors.fields?.[field] && <p className="text-red-500">{errors.fields[field].message}</p>}
                  </label>
                </div>
              ))}

              <label className="flex flex-col gap-2 justify-start items-stretch text-[15px] font-semibold">
                COMMENT
                <textarea className="w-full min-h-24 p-2 border border-gray-300 hover:border-violet-900 font-light rounded-none"
                {...register("comment")}/>
                 {errors.comment && <p className="text-red-500">{errors.comment.message}</p>}
              </label>
            </div>
             }

          <div className="w-full flex flex-row max-sm:justify-start mt-5">
            <button type="submit" className="max-xs:w-[55%] max-xs:text-[13px] sm:w-40 h-10 px-5 py-1 flex flex-row items-center justify-center font-semibold border bg-black hover:opacity-70  text-white transition duration-150 ease-in-out">
              GET IN TOUCH
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
