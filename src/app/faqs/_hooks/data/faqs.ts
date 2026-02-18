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
import { FAQ } from "../_models/faqs";

export const faqs: FAQ[] = [
  {
    id: "1",
    category: "getting-started",
    question: "How do I create an account on Vehicle Sales?",
    answer:
      'Creating an account is simple! Click the "Sign Up" button on our homepage, fill in your personal information including name, email, and create a secure password. You\'ll receive a confirmation email, and once verified, you can start using our platform immediately.',
    icon: Users,
  },
  {
    id: "2",
    category: "getting-started",
    question: "What are the system requirements for using Vehicle Sales?",
    answer:
      "Vehicle Sales is a web-based platform that works on any modern web browser (Chrome, Firefox, Safari, Edge). We recommend using the latest browser version for the best experience. A stable internet connection is required, and the platform is fully responsive on desktop, tablet, and mobile devices.",
    icon: Settings,
  },
  {
    id: "3",
    category: "getting-started",
    question: "Is there a mobile app available?",
    answer:
      "Currently, Vehicle Sales is available as a responsive web application that works perfectly on mobile devices. We are developing native mobile apps for iOS and Android, which will be released soon. You can add our web app to your home screen for quick access.",
    icon: Car,
  },
  {
    id: "4",
    category: "vehicles",
    question: "How do I add a vehicle to my inventory?",
    answer:
      'To add a vehicle, navigate to the Vehicles section and click "Add Vehicle". Fill in all required information including make, model, year, price, mileage, and upload images. You can also add detailed descriptions and set the vehicle status (Available, Sold, or Reserved). Click save to add it to your inventory.',
    icon: Car,
  },
  {
    id: "5",
    category: "vehicles",
    question: "Can I import multiple vehicles at once?",
    answer:
      "Yes! We support bulk vehicle import through CSV files. Simply format your vehicle data according to our template, upload the file, and our system will automatically create multiple vehicle entries. This feature is available for Professional and Enterprise plan users.",
    icon: Car,
  },
  {
    id: "6",
    category: "vehicles",
    question: "How many images can I upload per vehicle?",
    answer:
      "You can upload up to 20 high-quality images per vehicle. We recommend including exterior shots from multiple angles, interior photos, engine bay, trunk space, and any special features. Images should be in JPG or PNG format and under 5MB each.",
    icon: Car,
  },
  {
    id: "7",
    category: "pricing",
    question: "What subscription plans are available?",
    answer:
      "We offer three plans: Basic (free for up to 10 vehicles), Professional ($49/month for up to 100 vehicles with advanced features), and Enterprise (custom pricing for unlimited vehicles with priority support). All plans include core features like inventory management and customer tracking.",
    icon: CreditCard,
  },
  {
    id: "8",
    category: "pricing",
    question: "Can I change my subscription plan anytime?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time from your account settings. When upgrading, you'll have immediate access to new features. When downgrading, changes take effect at the next billing cycle, and you'll need to reduce your vehicle count to fit the new plan limits.",
    icon: CreditCard,
  },
  {
    id: "9",
    category: "pricing",
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial of our Professional plan with full access to all features. No credit card required to start. After the trial, you can choose to subscribe to any plan or continue with our free Basic plan.",
    icon: CreditCard,
  },
  {
    id: "10",
    category: "security",
    question: "How is my data protected?",
    answer:
      "We take data security seriously. All data is encrypted using industry-standard AES-256 encryption both in transit and at rest. We use secure JWT authentication with automatic token expiration, regular security audits, and comply with GDPR and other data protection regulations.",
    icon: Shield,
  },
  {
    id: "11",
    category: "security",
    question: "Is my payment information secure?",
    answer:
      "Yes, we never store your payment information directly. All payment processing is handled by PCI-compliant third-party payment processors like Stripe and PayPal. We only store a secure token reference for subscription management.",
    icon: Shield,
  },
  {
    id: "12",
    category: "security",
    question: "Can I export my data?",
    answer:
      "Yes, you have full control over your data. You can export all your vehicle inventory, customer information, and sales reports at any time in CSV or PDF format. This ensures you always have access to your business data, even if you decide to leave our platform.",
    icon: Shield,
  },
  {
    id: "13",
    category: "features",
    question: "Does Vehicle Sales support multiple languages?",
    answer:
      "Yes! Vehicle Sales currently supports English and Spanish, with more languages coming soon. You can easily switch between languages using the language selector in the top-right corner of any page. The language preference is saved for your future visits.",
    icon: Settings,
  },
  {
    id: "14",
    category: "features",
    question: "Can I integrate Vehicle Sales with other software?",
    answer:
      "Our Enterprise plan includes API access for custom integrations. We also offer native integrations with popular accounting software, CRM systems, and automotive valuation services. Additional integrations are regularly added based on customer feedback.",
    icon: Settings,
  },
  {
    id: "15",
    category: "support",
    question: "What kind of customer support do you offer?",
    answer:
      "We offer multiple support channels: Email support for all users (response within 24 hours), live chat for Professional plan users (business hours), and priority phone support for Enterprise customers. We also have a comprehensive help center with tutorials and documentation.",
    icon: HelpCircle,
  },
  {
    id: "16",
    category: "support",
    question: "How do I report a bug or request a feature?",
    answer:
      'We love feedback! You can report bugs or request features through the "Feedback" button in your dashboard, email us at support@vehicle-sales.com, or use the in-app chat. Our development team reviews all submissions and prioritizes based on user impact.',
    icon: HelpCircle,
  },
];
