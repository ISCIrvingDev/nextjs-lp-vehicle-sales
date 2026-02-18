/**
 * * Presentation Layer: Layout principal
 */

// * Props
// En los layout no se usan Props
// No hubo uso de Props

// * React
// xxx

// * NextJS/Expo
// xxx

// * Components
// xxx

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

// * Services
// xxx

// * Google Analytics & Google Tag Manager
import { sendGTMEvent } from "@next/third-parties/google";

export function useHome() {
  const { t } = useI18n();

  return {
    t,
    sendGTMEvent,
  };
}
