'use client';

// * NextJS
import Link from 'next/link';
import Image from 'next/image'

// * Icons
import VehicleSalesLogo from "@/shared/assets/icon.png";

// * Contexts
import { useI18n } from '@/shared/contexts/i18n/I18nContext';

// * Google Analytics & Google Tag Manager
import { sendGTMEvent } from "@next/third-parties/google";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-card/50 py-12 px-4">
      <div className="container mx-auto">
        {/* md:grid-cols-4 */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className='mx-auto'>
            <div className="flex items-center gap-2 mb-4">
              <Image src={VehicleSalesLogo} alt="Logo" className="w-10 h-10" />

              <span className="text-lg font-bold text-foreground">{t('systemTitle')}</span>
            </div>
            <p className="text-muted-foreground">
              {t('footerSummary')}
            </p>
          </div>
          {/* <div className='mx-auto'>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-muted-foreground hover:text-primary">Features</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
              <li><Link href="/api" className="text-muted-foreground hover:text-primary">API</Link></li>
            </ul>
          </div> */}
          <div className='mx-auto'>
            <h4 className="font-semibold text-foreground mb-4">{t('footerCompany')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary" onClick={() => {
                  if (process.env.NEXT_PUBLIC_IS_DEMO === 'true')
                    sendGTMEvent({ event: 'Footer - About', cta_type: 'Link' })
                }}>
                  {t('about')}
                </Link>
              </li>

              {/* <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary">Careers</Link></li> */}
            </ul>
          </div>
          <div className='mx-auto'>
            <h4 className="font-semibold text-foreground mb-4">{t('footerLegal')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary" onClick={() => {
                  if (process.env.NEXT_PUBLIC_IS_DEMO === 'true')
                    sendGTMEvent({ event: 'Footer - Privacy Policy', cta_type: 'Link' })
                }}>
                  {t('privacyPolicy')}
                </Link>
              </li>

              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary" onClick={() => {
                  if (process.env.NEXT_PUBLIC_IS_DEMO === 'true')
                    sendGTMEvent({ event: 'Footer - Terms of Service', cta_type: 'Link' })
                }}>
                  {t('termsOfService')}
                </Link>
              </li>

              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-primary" onClick={() => {
                  if (process.env.NEXT_PUBLIC_IS_DEMO === 'true')
                    sendGTMEvent({ event: 'Footer - FAQs', cta_type: 'Link' })
                }}>
                  {t('faqs')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            {t('copyright')} | {t('footerDeveloped')}{' '}

            <a href="https://ivin-dev.com/#resume" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" onClick={() => {
              if (process.env.NEXT_PUBLIC_IS_DEMO === 'true')
                sendGTMEvent({ event: 'Footer - Ivin Dev', cta_type: 'Link' })
            }}>
              Ivin Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}