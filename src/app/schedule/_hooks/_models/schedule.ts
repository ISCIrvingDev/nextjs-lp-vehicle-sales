export type ScheduleFormData = {
  companyName: string;
  companyAddress: string;
  firtName: string;
  lastName: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  message: string;
};

export type ScheduleFormErrors = {
  companyName?: string;
  companyAddress?: string;
  firtName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  country?: string;
  state?: string;
  city?: string;
  zip?: string;
};

export const initialFormData: ScheduleFormData = {
  companyName: "",
  companyAddress: "",
  firtName: "",
  lastName: "",
  email: "",
  phoneCode: "+52",
  phoneNumber: "",
  country: "",
  state: "",
  city: "",
  zip: "",
  message: "",
};
