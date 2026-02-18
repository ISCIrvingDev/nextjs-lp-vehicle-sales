/**
 * * Presentation Layer: Layout principal
 */

// * Props
// En los layout no se usan Props
// No hubo uso de Props

// * React
import { useState } from "react";

// * NextJS/Expo
import { useRouter } from "next/navigation";

// * Components
import { useToast } from "@/shared/hooks/use-toast";

// * Icons
// xxx

// * Models
// xxx

// * Services
// xxx

// * Custom Hooks
// xxx

// * Contexts
import { useI18n } from "@/shared/contexts/i18n/I18nContext";
import { useAuth } from "@/shared/contexts/AuthContext";

export function useSignUp() {
  const { t } = useI18n();
  const { toast } = useToast();
  const { register } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validatePassword = (password: string) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast({
        description: "Passwords do not match",
        variant: "error",
        duration: 5000,
      });

      setIsLoading(false);

      return;
    }

    if (!validatePassword(formData.password)) {
      toast({
        description:
          "Password must be at least 8 characters long and contain uppercase, lowercase, and numbers",
        variant: "error",
        duration: 5000,
      });

      setIsLoading(false);

      return;
    }

    try {
      await register({
        email: formData.email,
        username: formData.username,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
      });

      toast({
        description: "Account created successfully!",
        variant: "success",
        duration: 5000,
      });

      router.push("/dashboard");
    } catch (error) {
      toast({
        description: "Registration failed. Please try again",
        variant: "error",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    t,
    handleSubmit,
    formData,
    handleChange,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isLoading,
  };
}
