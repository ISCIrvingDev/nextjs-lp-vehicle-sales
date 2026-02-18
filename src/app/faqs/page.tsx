'use client';

// * NextJS
import Link from 'next/link';

// * Components
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { LandingPageHeader } from '@/app/_components/landing-page-header';

// * Icons
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

// * MVVM
import { useFAQs } from './_hooks/useFAQs';

export default function FAQs() {
  const {
    t,
    searchTerm,
    setSearchTerm,
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredFAQs,
    expandedItems,
    toggleExpanded,
    sendGTMEvent
  } = useFAQs()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <LandingPageHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t('faqsTitle')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('faqsText1')}
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder={t('faqsText2')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input border-border text-foreground"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map(category => {
              const Icon = category.icon;

              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => {
                    setSelectedCategory(category.id)

                    if (process.env.NEXT_PUBLIC_IS_DEMO === 'true')
                      sendGTMEvent({ event: `/faqs - Filtros - ${category.name}`, cta_type: 'Btn' })
                  }}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* FAQs List */}
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <Card className="bg-card border-border">
                <CardContent className="text-center py-12">
                  <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No FAQs found matching your search.</p>
                </CardContent>
              </Card>
            ) : (
              filteredFAQs.map(faq => {
                const Icon = faq.icon;
                const isExpanded = expandedItems.includes(faq.id);

                return (
                  <Card key={faq.id} className="bg-card border-border">
                    <CardHeader>
                      <CardTitle
                        className="text-foreground flex items-center justify-between cursor-pointer hover:text-primary transition-colors"
                        onClick={() => {
                          toggleExpanded(faq.id)

                          if (process.env.NEXT_PUBLIC_IS_DEMO === 'true')
                            sendGTMEvent({ event: `/faqs - Preguntas - ${faq.question}`, cta_type: 'Card' })
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-primary" />
                          <span className="text-left">{faq.question}</span>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </CardTitle>
                    </CardHeader>
                    {isExpanded && (
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                );
              })
            )}
          </div>

          {/* Contact Support */}
          <Card className="bg-card border-border mt-12">
            <CardHeader>
              <CardTitle className="text-foreground text-center">
                {t('faqsText41')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                {t('faqsText42')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Contact Support
                </Button> */}

                <a href="https://ivin-dev.com/#contact" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" onClick={() => {
                  if (process.env.NEXT_PUBLIC_IS_DEMO === 'true')
                    sendGTMEvent({ event: '/faqs - Still have questions? - Contact Us', cta_type: 'Link & Btn' })
                }}>
                  <Button variant="outline">
                    {/* Visit Help Center */}
                    {t('faqsText43')}
                  </Button>
                </a>

              </div>
              <div className="text-sm text-muted-foreground">
                <p>{t('faqsText44')}: irving@ivin-dev.com</p>
                {/* <p>Phone: +1 (555) 123-4567</p> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}