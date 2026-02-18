export type ScheduleDate = {
  id: string;
  companyName: string;
  companyAddress: string;
  firtName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  message: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type ScheduleDateInput = {
  companyName: string;
  companyAddress: string;
  firtName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  message?: string;
};
