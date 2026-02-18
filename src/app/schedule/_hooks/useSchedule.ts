import { useState } from "react";

import { useToast } from "@/shared/hooks/use-toast";
import { useI18n } from "@/shared/contexts/i18n/I18nContext";
import { createScheduleDate } from "@/shared/services/schedule";
import { ScheduleDateInput } from "@/shared/models/schedule";
import {
  ScheduleFormData,
  ScheduleFormErrors,
  initialFormData,
} from "./_models/schedule";

export function useSchedule() {
  const { t } = useI18n();
  const { toast } = useToast();

  const [formData, setFormData] = useState<ScheduleFormData>(initialFormData);
  const [errors, setErrors] = useState<ScheduleFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: keyof ScheduleFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof ScheduleFormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ScheduleFormErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = t("requiredField");
    }
    if (!formData.companyAddress.trim()) {
      newErrors.companyAddress = t("requiredField");
    }
    if (!formData.firtName.trim()) {
      newErrors.firtName = t("requiredField");
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = t("requiredField");
    }
    if (!formData.email.trim()) {
      newErrors.email = t("requiredField");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("invalidEmail");
    }
    const phoneDigits = formData.phoneNumber.replace(/\D/g, "");
    if (!phoneDigits) {
      newErrors.phoneNumber = t("requiredField");
    } else if (phoneDigits.length < 7) {
      newErrors.phoneNumber = t("invalidPhone");
    }
    if (!formData.country.trim()) {
      newErrors.country = t("requiredField");
    }
    if (!formData.state.trim()) {
      newErrors.state = t("requiredField");
    }
    if (!formData.city.trim()) {
      newErrors.city = t("requiredField");
    }
    if (!formData.zip.trim()) {
      newErrors.zip = t("requiredField");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);

      const fullPhoneNumber = `${formData.phoneCode} ${formData.phoneNumber.replace(/\D/g, "")}`;

      const data: ScheduleDateInput = {
        companyName: formData.companyName.trim(),
        companyAddress: formData.companyAddress.trim(),
        firtName: formData.firtName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phoneNumber: fullPhoneNumber,
        country: formData.country.trim(),
        state: formData.state.trim(),
        city: formData.city.trim(),
        zip: formData.zip.trim(),
        message: formData.message.trim() || undefined,
      };

      const result = await createScheduleDate(data);

      if (result.error) {
        throw new Error(result.error);
      }

      setIsSuccess(true);
    } catch (error: any) {
      console.error("Schedule submission error:", error);
      toast({
        description: error.message || "Failed to submit schedule request",
        variant: "error",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSuccess(false);
  };

  return {
    t,
    formData,
    errors,
    isLoading,
    isSuccess,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
}
