/**
 * * Presentation Layer: Layout principal
 */

// * Props
// En los layout no se usan Props
// No hubo uso de Props

// * React
import { useState } from "react";

// * Expo
// xxx

// * Native Components
// xxx

// * Icons
import {
  Car,
  HelpCircle,
  Users,
  CreditCard,
  Shield,
  Settings,
} from "lucide-react";

// * Models
import { FAQ } from "./_models/faqs";

// * Services
// xxx

// * Custom Hooks
// xxx

// * Contexts
import { useI18n } from "@/shared/contexts/i18n/I18nContext";

// * Data
// import { faqs } from "./data/faqs";

// * Google Analytics & Google Tag Manager
import { sendGTMEvent } from "@next/third-parties/google";

export function useFAQs() {
  const { t } = useI18n();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: t("faqsText3"), icon: HelpCircle },
    { id: "getting-started", name: t("faqsText4"), icon: Users },
    { id: "vehicles", name: t("faqsText5"), icon: Car },
    { id: "pricing", name: t("faqsText6"), icon: CreditCard },
    { id: "security", name: t("faqsText7"), icon: Shield },
    { id: "features", name: t("faqsText8"), icon: Settings },
    { id: "support", name: t("faqsText9"), icon: HelpCircle },
  ];

  // * FAQs
  const faqs: FAQ[] = [
    {
      id: "1",
      category: "getting-started",
      question: t("faqsText10"),
      answer: t("faqsText11"),
      icon: Users,
    },
    {
      id: "2",
      category: "getting-started",
      question: t("faqsText12"),
      answer: t("faqsText13"),
      icon: Settings,
    },
    // {
    //   id: "3",
    //   category: "getting-started",
    //   question: "Is there a mobile app available?",
    //   answer:
    //     "Currently, Vehicle Sales is available as a responsive web application that works perfectly on mobile devices. We are developing native mobile apps for iOS and Android, which will be released soon. You can add our web app to your home screen for quick access.",
    //   icon: Car,
    // },
    {
      id: "4",
      category: "vehicles",
      question: t("faqsText14"),
      answer: t("faqsText15"),
      icon: Car,
    },
    // {
    //   id: "5",
    //   category: "vehicles",
    //   question: t('faqsText16'),
    //   answer: t('faqsText17'),
    //   icon: Car,
    // },
    {
      id: "6",
      category: "vehicles",
      question: t("faqsText18"),
      answer: t("faqsText19"),
      icon: Car,
    },
    // {
    //   id: "7",
    //   category: "pricing",
    //   question: t('faqsText20'),
    //   answer: t('faqsText21'),
    //   icon: CreditCard,
    // },
    // {
    //   id: "8",
    //   category: "pricing",
    //   question: t('faqsText22'),
    //   answer: t('faqsText23'),
    //   icon: CreditCard,
    // },
    {
      id: "9",
      category: "pricing",
      question: t("faqsText24"),
      // answer: t("faqsText25") + " <a>/signin</a> \n" + t("faqsText26"),
      answer: t("faqsText26"),
      icon: CreditCard,
    },
    {
      id: "10",
      category: "security",
      question: t("faqsText27"),
      answer: t("faqsText28"),
      icon: Shield,
    },
    {
      id: "11",
      category: "security",
      question: t("faqsText29"),
      answer: t("faqsText30"),
      icon: Shield,
    },
    {
      id: "12",
      category: "security",
      question: t("faqsText31"),
      answer: t("faqsText32"),
      icon: Shield,
    },
    {
      id: "13",
      category: "features",
      question: t("faqsText33"),
      answer: t("faqsText34"),
      icon: Settings,
    },
    {
      id: "14",
      category: "features",
      question: t("faqsText35"),
      answer: t("faqsText36"),
      icon: Settings,
    },
    {
      id: "15",
      category: "support",
      question: t("faqsText37"),
      answer: t("faqsText38"),
      icon: HelpCircle,
    },
    {
      id: "16",
      category: "support",
      question: t("faqsText39"),
      answer: t("faqsText40"),
      icon: HelpCircle,
    },
  ];

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return {
    t,
    searchTerm,
    setSearchTerm,
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredFAQs,
    expandedItems,
    toggleExpanded,
    sendGTMEvent,
  };
}
